"""Convert MkDocs (Material) Markdown pages to nimbus content pages.

Usage (in the converter image, repository root as work dir):

    docker run --rm -v "$PWD":/docs phalcon-docs-converter resources/nimbus/convert.py \
        --version 4.2 --source resources/legacy/4.2/docs --nav resources/legacy/4.2/mkdocs.yml
    docker run --rm -v "$PWD":/docs phalcon-docs-converter resources/nimbus/convert.py --register

A conversion:
- reads every *.md file below --source, except the assets/ folder,
  or only the pages given with --only (paths relative to --source),
- writes the converted page to <target>/src/content/docs-<version>/<same path>,
- copies <source>/assets/images to <target>/public/assets/images,
- writes the sidebar (from the mkdocs.yml nav) and the redirects (from the
  MkDocs redirect stubs and redirect_maps) of the version.

--register writes the routes, src/content.config.ts and
src/versions.generated.mjs for every src/content/docs-* folder.
"""

import argparse
import json
import posixpath
import re
import shutil
from pathlib import Path

import yaml

# MkDocs admonition type -> nimbus directive type.
ADMONITION_TYPES = {
    "danger": "danger",
    "info": "info",
    "note": "note",
    "success": "tip",
    "tip": "tip",
    "warning": "warning",
}

ADMONITION_RE = re.compile(
    r'^!!! (\w+)(?: "([^"]*)")?[ \t]*\n((?:(?:    .*|[ \t]*)\n)*)',
    re.MULTILINE,
)
DESC_SPAN_RE = re.compile(r'<span class="desc">.*?</span>', re.DOTALL)
# Emoji shortcodes (pymdownx.emoji) that the pages use in prose.
EMOJI = {"facepalm": "🤦", "memo": "📝", "question": "❓", "rocket": "🚀"}
EMOJI_RE = re.compile(r"(?<![\w:]):(" + "|".join(EMOJI) + r"):(?![\w:])")
GRID_CARDS_RE = re.compile(r'<div class="grid cards" markdown>\n(.*?)\n</div>', re.DOTALL)
OCTICONS_TO_PHOSPHOR = {
    "discussion-closed-16": "ph:chats-circle",
    "megaphone-16": "ph:megaphone",
    "question-16": "ph:lifebuoy",
    "video-16": "ph:video",
}
# CommonMark allows up to three spaces of indentation before a fence, and a
# fence can open a list item (`- ```).
FENCE_RE = re.compile(
    r"^ {0,3}(?:[-*+] |\d+\. )?(?P<f>```|~~~).*?^ {0,3}(?P=f)[ \t]*$",
    re.MULTILINE | re.DOTALL,
)
# Fence languages that Shiki names differently.
FENCE_LANG_ALIASES = {"apacheconfig": "apache"}
# HTML tags the pages use, plus the MDX components the converter emits.
HTML_TAGS = (
    "a|b|br|code|div|em|h[1-6]|hr|i|iframe|img|li|ol|p|pre|span|strong|sub|sup|"
    "table|tbody|td|th|thead|tr|ul|Card|CardGrid"
)
NOT_A_TAG_RE = re.compile(r"<(?!(?:/?(?:" + HTML_TAGS + r")(?=[\s>/])|!--))")
BARE_INLINE_TAG_PAIR_RE = re.compile(r"<(/?)(a|b|code|em|i|img|span|strong|sub|sup)>")
CODE_BLOCK_RE = re.compile(r"^<code>\n(.*?)^</code>[ \t]*$", re.MULTILINE | re.DOTALL)
FENCE_TOKEN_RE = re.compile(r"\x00FENCE(\d+)\x00")
FRONTMATTER_RE = re.compile(r"\A---\n(.*?)\n---\n", re.DOTALL)
H1_RE = re.compile(r"^# (.+?)[ \t]*$", re.MULTILINE)
HEADING_ID_RE = re.compile(
    r"^(#{1,6}) (.*?)[ \t]*\{[ \t]*#([A-Za-z0-9_-]+)[ \t]*\}[ \t]*$",
    re.MULTILINE,
)
INLINE_CODE_RE = re.compile(r"`[^`\n]+`")
INLINE_CODE_TOKEN_RE = re.compile(r"\x00CODE(\d+)\x00")
# `.md/#anchor` (a slash before the anchor) is a typo in older pages.
INLINE_LINK_RE = re.compile(r"\]\((?!https?://)([^)#\s]+?)\.md/?(#[^)\s]*)?\)")
LINK_CLASS_RE = re.compile(
    r"\[([^\]]+)\]\(([^)\s]+)\)\{[ \t]*\.([A-Za-z0-9_-]+)[ \t]*\}"
)
REF_LINK_RE = re.compile(
    r"^(\[[^\]]+\]:[ \t]+)(?!https?://)(\S+?)\.md/?(#\S*)?[ \t]*$",
    re.MULTILINE,
)
SNIPPET_RE = re.compile(r'^--8<-- "([^"]+)"[ \t]*$', re.MULTILINE)


def convert_page(text, page_dir, source_root, keep_h1=False, fallback_title="", version=""):
    """Convert one MkDocs page and return the nimbus page text.

    `page_dir` is the directory of the page relative to the docs root ("" or
    "api"); relative links are resolved against it. The title comes from the
    first H1. Pages without an H1 (the API pages) get `fallback_title`.
    `version` is the URL prefix for links and images.
    """
    frontmatter, body = split_frontmatter(text)
    hidden = parse_hide(frontmatter)
    body = convert_snippets(body, source_root)
    body = convert_code_blocks(body)
    stashed, blocks = _stash_fences(body)
    title, stashed = extract_title(stashed, keep_h1)
    title = title or fallback_title
    stashed = convert_admonitions(stashed)
    stashed = convert_grid_cards(stashed)
    base = "/" + version + "/" + (page_dir + "/" if page_dir else "")
    stashed = convert_links(stashed, base)
    # Images are shared by all versions under /assets/.
    stashed = convert_assets(stashed, "/")
    stashed = convert_material_markup(stashed)
    stashed = convert_heading_ids(stashed)
    stashed = convert_mdx_safety(stashed)
    body = _restore_fences(stashed, blocks)
    return build_frontmatter(title, hidden) + body


def split_frontmatter(text):
    """Return (frontmatter, body). The frontmatter is empty when absent."""
    match = FRONTMATTER_RE.match(text)
    if not match:
        return "", text
    return match.group(1), text[match.end():]


def parse_hide(frontmatter):
    """Return the set of MkDocs `hide:` entries (navigation, toc)."""
    hidden = set()
    in_hide = False
    for line in frontmatter.splitlines():
        if re.match(r"^hide:\s*$", line):
            in_hide = True
            continue
        item = re.match(r"^\s+-\s+(\w+)\s*$", line)
        if in_hide and item:
            hidden.add(item.group(1))
        elif line.strip():
            in_hide = False
    return hidden


def build_frontmatter(title, hidden):
    """Return the nimbus frontmatter block."""
    lines = ["---", "title: " + json.dumps(title, ensure_ascii=False)]
    if "navigation" in hidden:
        lines.append("sidebar: false")
    if "toc" in hidden:
        lines.append("tableOfContents: false")
    lines.append("---")
    return "\n".join(lines) + "\n\n"


def extract_title(body, keep_h1=False):
    """Return (title, body). The first H1 and a following `- - -` rule go."""
    match = H1_RE.search(body)
    if not match:
        return "", body
    # The title is plain text: an `<img>` in the H1 does not belong in it.
    title = re.sub(r"<[^>]+>", "", match.group(1)).strip()
    if keep_h1:
        return title, body
    rest = body[match.end():]
    rest = re.sub(r"\A\s*\n- - -[ \t]*\n", "\n", rest, count=1)
    return title, (body[:match.start()] + rest).lstrip("\n")


def convert_admonitions(text):
    """Rewrite `!!! type "Title"` blocks to `:::type[Title]` directives."""

    def replace(match):
        kind = ADMONITION_TYPES.get(match.group(1).lower(), "note")
        title = match.group(2) or ""
        lines = match.group(3).splitlines()
        while lines and not lines[-1].strip():
            lines.pop()
        body = "\n".join(
            line[4:] if line.startswith("    ") else "" for line in lines
        ).strip("\n")
        header = f":::{kind}[{title}]" if title else f":::{kind}"
        return f"{header}\n{body}\n:::\n\n"

    return ADMONITION_RE.sub(replace, text)


def convert_links(text, base):
    """Rewrite `.md` links to root-relative directory URLs below `base`."""
    text = INLINE_LINK_RE.sub(
        lambda m: "](" + _target(m.group(1), m.group(2), base) + ")", text
    )
    text = REF_LINK_RE.sub(
        lambda m: m.group(1) + _target(m.group(2), m.group(3), base), text
    )
    return text


def _target(path, anchor, base):
    # nimbus lint requires root-relative internal links. `base` is the
    # directory URL of the page; `..` segments are resolved here.
    resolved = posixpath.normpath(base + path)
    if posixpath.basename(resolved) == "index":
        resolved = posixpath.dirname(resolved)
    return resolved.rstrip("/") + "/" + (anchor or "")


def convert_assets(text, prefix):
    """Make `assets/` references absolute.

    Astro resolves a relative image path against the content file and fails
    the build when the file is not there. Absolute paths are served as they
    are from public/assets/, shared by all versions.
    """
    text = re.sub(r"\]\((?:\.\./|\./)*assets/", "](" + prefix + "assets/", text)
    text = re.sub(r'src="(?:\.\./|\./)*assets/', 'src="' + prefix + "assets/", text)
    return text


def convert_material_markup(text):
    """Remove Material-only icon shortcodes and attribute lists."""
    text = text.replace(":material-github: ", "")
    text = EMOJI_RE.sub(lambda m: EMOJI[m.group(1)], text)
    # A link with an attribute list keeps its class as an HTML link.
    text = LINK_CLASS_RE.sub(r'<a class="\3" href="\2">\1</a>', text)
    text = re.sub(r"[ \t]*\{[ \t]*\.[A-Za-z0-9_-]+[ \t]*\}", "", text)
    text = re.sub(r'(<div[^>]*?)\s+markdown(?:="1")?>', r"\1>", text)
    return text


def convert_heading_ids(text):
    """Rewrite `## Text { #id }` headings to HTML headings with that id.

    MDX has no heading-attribute syntax (`{` starts an expression), so the
    heading is emitted as HTML. Inline code in the text becomes `<code>`.
    """

    def code(match):
        inner = (
            match.group(1)
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("{", "&#123;")
            .replace("}", "&#125;")
        )
        return "<code>" + inner + "</code>"

    def replace(match):
        level = len(match.group(1))
        content = INLINE_CODE_RE.sub(lambda m: code(re.match(r"`(.*)`", m.group(0))), match.group(2))
        return f'<h{level} id="{match.group(3)}">{content}</h{level}>'

    return HEADING_ID_RE.sub(replace, text)


def convert_mdx_safety(text):
    """Escape what MDX reads as code: braces, bare `<`, open void tags."""
    stashed, spans = _stash_inline_code(text)
    stashed = re.sub(r"<(https?://[^>\s]+)>", r"[\1](\1)", stashed)
    stashed = re.sub(r"<(img\b[^>]*[^/])>", r"<\1 />", stashed)
    stashed = re.sub(r"<br\s*>", "<br />", stashed)
    # Only the HTML tags that the pages really use stay tags. Everything
    # else after `<` (`<Access>`, `array<string, T>`, `<hashed>`) is text.
    stashed = NOT_A_TAG_RE.sub("&lt;", stashed)
    # "Produce a <a> tag": a bare inline tag with no closing tag in the same
    # paragraph is text about the tag, not markup.
    stashed = "\n\n".join(_escape_bare_inline_tags(p) for p in stashed.split("\n\n"))
    # A Quill description that spans a blank line is one paragraph in MDX.
    stashed = DESC_SPAN_RE.sub(lambda m: re.sub(r"\s*\n\s*", " ", m.group(0)), stashed)
    stashed = stashed.replace("{", "\\{").replace("}", "\\}")
    return _restore_inline_code(stashed, spans)


def _escape_bare_inline_tags(paragraph):
    """Escape `<tag>` openers that no later `</tag>` closes."""
    unmatched = {}
    for match in BARE_INLINE_TAG_PAIR_RE.finditer(paragraph):
        tag = match.group(2)
        if match.group(1):
            if unmatched.get(tag):
                unmatched[tag].pop()
        else:
            unmatched.setdefault(tag, []).append(match.start())
    starts = sorted(pos for positions in unmatched.values() for pos in positions)
    out = []
    position = 0
    for start in starts:
        out.append(paragraph[position:start] + "&lt;")
        position = start + 1
    out.append(paragraph[position:])
    return "".join(out)


def convert_code_blocks(text):
    """Turn raw `<code>` blocks that stand alone on their lines into fences.

    Quill emits docblock examples this way; a blank line inside such a block
    would end the element in MDX. The examples are PHP.
    """
    return CODE_BLOCK_RE.sub(lambda m: "```php\n" + m.group(1) + "```", text)


def convert_snippets(text, source_root):
    """Replace `--8<-- "path"` lines with the content of the file."""
    source_root = Path(source_root)

    def replace(match):
        return (source_root / match.group(1)).read_text(encoding="utf-8").rstrip("\n")

    return SNIPPET_RE.sub(replace, text)


def load_mkdocs(mkdocs_yml):
    """Return an mkdocs.yml as a dict (its Python tags are ignored)."""

    class Loader(yaml.SafeLoader):
        pass

    Loader.add_multi_constructor("tag:yaml.org,2002:python/", lambda *_: None)
    Loader.add_multi_constructor("!", lambda *_: None)
    return yaml.load(Path(mkdocs_yml).read_text(encoding="utf-8"), Loader=Loader)


def load_nav(mkdocs_yml):
    """Return the `nav` list of an mkdocs.yml."""
    return load_mkdocs(mkdocs_yml)["nav"]


def redirect_maps(mkdocs_yml):
    """Return the `redirect_maps` of the MkDocs redirects plugin, or {}."""
    for plugin in load_mkdocs(mkdocs_yml).get("plugins") or []:
        if isinstance(plugin, dict) and "redirects" in plugin:
            return (plugin["redirects"] or {}).get("redirect_maps") or {}
    return {}


def convert_grid_cards(text):
    """Rewrite Material `grid cards` blocks to nimbus `<CardGrid>`/`<Card>`."""

    def card(item):
        lines = item.strip("\n").split("\n")
        head = re.match(r":octicons-([a-z0-9-]+):\{[^}]*\}\s*__(.+?)__\s*$", lines[0])
        title = head.group(2) if head else lines[0].strip()
        icon = OCTICONS_TO_PHOSPHOR.get(head.group(1), "ph:" + re.sub(r"-\d+$", "", head.group(1))) if head else ""
        body = []
        for line in lines[1:]:
            line = re.sub(r"^ {1,4}", "", line)
            if line.strip() == "---":
                continue
            body.append(line.replace("[:octicons-chevron-right-12: ", "["))
        body_text = "\n".join(body).strip("\n")
        icon_attr = f' icon="{icon}"' if icon else ""
        return f'<Card title="{title.replace(chr(34), "&quot;")}"{icon_attr}>\n\n{body_text}\n\n</Card>'

    def replace(match):
        items = re.split(r"^- ", match.group(1), flags=re.MULTILINE)
        cards = [card(item) for item in items if item.strip()]
        return "<CardGrid>\n" + "\n".join(cards) + "\n</CardGrid>"

    return GRID_CARDS_RE.sub(replace, text)


def build_sidebar(nav, titles, version):
    """Translate an MkDocs nav into nimbus `sidebar.items`.

    `titles` maps a page id ("acl", "api") to its title. A page whose nav
    label is its title becomes a bare slug; any other page becomes a link
    item with the nav label, so the labels of the MkDocs nav are kept.
    """
    items = []
    for entry in nav:
        for label, value in entry.items():
            if isinstance(value, list):
                # Groups start folded; nimbus opens the one with the current page.
                items.append({
                    "label": label,
                    "collapsed": True,
                    "items": build_sidebar(value, titles, version),
                })
            elif value.endswith(".md") and not value.startswith("http"):
                page = value[: -len(".md")]
                if page.endswith("/index"):
                    page = page[: -len("/index")]
                if titles.get(page) == label:
                    items.append(page)
                else:
                    items.append({"label": label, "link": "/" + version + "/" + page + "/"})
            else:
                items.append({"label": label, "link": value})
    return items


def write_sidebar(nav, titles, version, sidebar_dir):
    """Write `<sidebar_dir>/<version>.mjs` with the nimbus sidebar items."""
    items = build_sidebar(nav, titles, version)
    out = Path(sidebar_dir) / f"{version}.mjs"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(
        "// Generated by resources/nimbus/convert.py from the mkdocs.yml nav of "
        f"version {version}. Do not edit.\n"
        "export default " + json.dumps(items, indent=2, ensure_ascii=False) + ";\n",
        encoding="utf-8",
    )
    return out


def find_redirects(source, version, mkdocs_yml=None):
    """Return `{old URL: new URL}` from the MkDocs redirects.

    Older branches declare them as `redirect_maps` of the MkDocs redirects
    plugin (`old.md: new.md`); newer ones ship `index.html` stubs whose
    `<link rel="canonical">` points to the page that replaced them,
    relative to the stub's directory.
    """
    source = Path(source)
    redirects = {}

    def url(page):
        page, _, anchor = page.partition("#")
        page = page[: -len(".md")] if page.endswith(".md") else page
        if page.endswith("index"):
            page = page[: -len("index")]
        path = "/" + version + "/" + (page + "/" if page else "")
        return path.replace("//", "/") + ("#" + anchor if anchor else "")

    if mkdocs_yml and Path(mkdocs_yml).is_file():
        for old, new in redirect_maps(mkdocs_yml).items():
            redirects[url(old)] = url(new)
    for stub in sorted(source.rglob("index.html")):
        match = re.search(r'<link rel="canonical" href="([^"]+)">', stub.read_text(encoding="utf-8"))
        if not match:
            continue
        directory = stub.parent.relative_to(source).as_posix()
        base = "/" + version + "/" + (directory + "/" if directory != "." else "")
        target = posixpath.normpath(base + match.group(1))
        redirects[base] = target.rstrip("/") + "/"
    return redirects


def write_redirects(redirects, version, redirects_dir):
    """Write `<redirects_dir>/<version>.mjs` with the redirect map."""
    out = Path(redirects_dir) / f"{version}.mjs"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(
        "// Generated by resources/nimbus/convert.py from the MkDocs redirect stubs of "
        f"version {version}. Do not edit.\n"
        "export default " + json.dumps(redirects, indent=2) + ";\n",
        encoding="utf-8",
    )
    return out


def apply_overrides(overrides, version, source, content, only=()):
    """Copy hand-written pages over converted ones. Return their count.

    `<overrides>/<version>/<page>.mdx` always applies to that version.
    `<overrides>/common/<page>.mdx` applies to a version when the version's
    MkDocs source page is identical to `<overrides>/common/<page>.md`, the
    source it was written for; `__VERSION__` in it becomes the version.
    """
    count = 0
    candidates = []
    common = overrides / "common"
    if common.is_dir():
        for path in sorted(common.rglob("*.mdx")):
            rel = path.relative_to(common)
            reference = path.with_suffix(".md")
            original = Path(source) / rel.with_suffix(".md")
            if reference.is_file() and original.is_file() and reference.read_bytes() == original.read_bytes():
                candidates.append((rel, path.read_text(encoding="utf-8").replace("__VERSION__", version)))
    specific = overrides / version
    if specific.is_dir():
        for path in sorted(specific.rglob("*.mdx")):
            candidates.append((path.relative_to(specific), path.read_text(encoding="utf-8")))
    for rel, text in candidates:
        if only and str(rel.with_suffix(".md")) not in only:
            continue
        out = Path(content) / rel
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(text, encoding="utf-8")
        count += 1
    return count


def version_key(version):
    """Sort key: newest version first when used with reverse=True."""
    return tuple(int(part) for part in version.split("."))


def registered_versions(target):
    """Return the versions that have a `src/content/docs-<version>` folder."""
    content = Path(target) / "src" / "content"
    versions = [p.name[len("docs-"):] for p in content.glob("docs-*") if p.is_dir()]
    return sorted(versions, key=version_key, reverse=True)


def content_config_source(versions):
    """Return `src/content.config.ts` with one literal key per version.

    nimbus reads this file textually, so every collection is a literal key.
    """
    lines = [
        "import { defineCollection } from \"astro:content\";",
        "import { z } from \"astro/zod\";",
        "import { docsCollection, partialsCollection } from \"@cloudflare/nimbus-docs/content\";",
        "",
        "// Generated by resources/nimbus/convert.py --register from src/content/docs-*.",
        "// Do not edit. The primary `docs` collection stays empty: every version",
        "// lives in its own `docs-<version>` collection.",
        "const schemaFields = { audience: z.literal(\"human\").optional() };",
        "",
        "export const collections = {",
        "  docs: defineCollection(docsCollection({ schemaFields })),",
    ]
    for version in versions:
        lines.append(
            f"  \"docs-{version}\": defineCollection(docsCollection({{ base: \"docs-{version}\", schemaFields }})),"
        )
    lines += ["  partials: defineCollection(partialsCollection()),", "};", ""]
    return "\n".join(lines)


def versions_module_source(versions):
    """Return `src/versions.generated.mjs`: version list, sidebars, redirects."""
    lines = ["// Generated by resources/nimbus/convert.py --register from src/content/docs-*. Do not edit."]
    for version in versions:
        ident = version.replace(".", "_")
        lines.append(f"import sidebar_{ident} from \"./sidebar/{version}.mjs\";")
        lines.append(f"import redirects_{ident} from \"./redirects/{version}.mjs\";")
    lines.append("")
    lines.append("/** Published versions, newest first: the order of the version picker. */")
    lines.append("export const versions = " + json.dumps(versions) + ";")
    lines.append("")
    lines.append("export const sidebars = {")
    for version in versions:
        lines.append(f"  \"{version}\": sidebar_{version.replace('.', '_')},")
    lines.append("};")
    lines.append("")
    lines.append("export const redirects = {")
    for version in versions:
        lines.append(f"  ...redirects_{version.replace('.', '_')},")
    lines.append("};")
    return "\n".join(lines) + "\n"


def register(target, templates):
    """Write the per-version routes, `content.config.ts` and the versions module."""
    target = Path(target)
    templates = Path(templates)
    versions = registered_versions(target)
    for version in versions:
        pages = target / "src" / "pages" / version
        (pages / "[...slug]").mkdir(parents=True, exist_ok=True)
        for template, out in (
            ("slug.astro.tpl", pages / "[...slug].astro"),
            ("index.md.ts.tpl", pages / "[...slug]" / "index.md.ts"),
        ):
            source = (templates / template).read_text(encoding="utf-8")
            out.write_text(source.replace("__VERSION__", version), encoding="utf-8")
    (target / "src" / "content.config.ts").write_text(content_config_source(versions), encoding="utf-8")
    (target / "src" / "versions.generated.mjs").write_text(versions_module_source(versions), encoding="utf-8")
    return versions


def _stash_fences(text):
    blocks = []

    def keep(match):
        block = match.group(0)
        for old, new in FENCE_LANG_ALIASES.items():
            if block.startswith("```" + old + "\n"):
                block = "```" + new + block[len("```" + old):]
        blocks.append(block)
        return "\x00FENCE" + str(len(blocks) - 1) + "\x00"

    return FENCE_RE.sub(keep, text), blocks


def _restore_fences(text, blocks):
    return FENCE_TOKEN_RE.sub(lambda m: blocks[int(m.group(1))], text)


def _stash_inline_code(text):
    spans = []

    def keep(match):
        spans.append(match.group(0))
        return "\x00CODE" + str(len(spans) - 1) + "\x00"

    return INLINE_CODE_RE.sub(keep, text), spans


def _restore_inline_code(text, spans):
    return INLINE_CODE_TOKEN_RE.sub(lambda m: spans[int(m.group(1))], text)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--version", help="version slug, e.g. 5.20")
    parser.add_argument(
        "--register",
        action="store_true",
        help="write routes, content.config.ts and versions.generated.mjs for every "
        "src/content/docs-* folder, then exit",
    )
    parser.add_argument(
        "--templates",
        default="resources/nimbus/templates",
        help="route templates used by --register",
    )
    parser.add_argument("--source", default="docs", help="MkDocs docs directory")
    parser.add_argument("--target", default=".", help="the Astro project (repository root)")
    parser.add_argument("--keep-h1", action="store_true", help="keep the first H1 in the body")
    parser.add_argument(
        "--overrides",
        default="resources/nimbus/overrides",
        help="directory with hand-written pages per version, copied over the output",
    )
    parser.add_argument(
        "--nav",
        default=None,
        help="mkdocs.yml whose nav becomes the sidebar (default: <source>/../mkdocs.yml)",
    )
    parser.add_argument(
        "--only",
        action="append",
        default=[],
        metavar="PAGE",
        help="convert only this page (relative to --source); repeatable",
    )
    args = parser.parse_args()

    if args.register:
        versions = register(args.target, args.templates)
        print(f"Registered versions: {', '.join(versions)}")
        return
    if not args.version:
        parser.error("--version is required unless --register is given")

    source = Path(args.source)
    target = Path(args.target)
    content = target / "src" / "content" / f"docs-{args.version}"

    if args.only:
        pages = [source / page for page in args.only]
    else:
        # A full run replaces the version directory so removed pages go away.
        shutil.rmtree(content, ignore_errors=True)
        pages = sorted(source.rglob("*.md"))

    count = 0
    titles = {}
    for path in pages:
        rel = path.relative_to(source)
        if rel.parts[0] == "assets":
            continue
        # Pages are MDX: nimbus rewrites `:::` admonitions in .mdx files only.
        out = content / rel.with_suffix(".mdx")
        out.parent.mkdir(parents=True, exist_ok=True)
        (content / rel).unlink(missing_ok=True)
        # API pages have no H1: "phalcon_acl" becomes the title "Phalcon Acl".
        fallback_title = path.stem.replace("_", " ").title()
        page_dir = rel.parent.as_posix()
        page = convert_page(
            path.read_text(encoding="utf-8"),
            "" if page_dir == "." else page_dir,
            source,
            args.keep_h1,
            fallback_title,
            args.version,
        )
        out.write_text(page, encoding="utf-8")
        count += 1
        page_id = rel.with_suffix("").as_posix()
        if page_id.endswith("/index"):
            page_id = page_id[: -len("/index")]
        titles[page_id] = re.search(r'^title: (".*")$', page, re.M).group(1)
        titles[page_id] = json.loads(titles[page_id])

    nav_file = Path(args.nav) if args.nav else source.parent / "mkdocs.yml"
    if not args.only and nav_file.is_file():
        sidebar = write_sidebar(load_nav(nav_file), titles, args.version, target / "src" / "sidebar")
        print(f"Sidebar written to {sidebar}")

    if not args.only:
        redirects = find_redirects(source, args.version, nav_file)
        out = write_redirects(redirects, args.version, target / "src" / "redirects")
        print(f"{len(redirects)} redirects written to {out}")

    # One image folder for all versions; a later run overwrites files of the
    # same name, so convert versions from the oldest to the newest.
    images = source / "assets" / "images"
    if images.is_dir():
        dest = target / "public" / "assets" / "images"
        shutil.copytree(images, dest, dirs_exist_ok=True)

    # Pages that are maintained by hand (MDX components) replace the
    # converted ones.
    overridden = apply_overrides(Path(args.overrides), args.version, source, content, args.only)

    print(f"Converted {count} pages into {content} ({overridden} overridden by hand-written pages)")


if __name__ == "__main__":
    main()
