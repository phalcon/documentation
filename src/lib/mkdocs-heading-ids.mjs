/**
 * Give headings the ids that MkDocs (Python-Markdown `toc`) generated, so
 * that anchors of the previous site keep working.
 *
 * Python-Markdown slugify: NFKD-normalize, drop non-ASCII characters, remove
 * everything but word characters, whitespace and hyphens, strip, lower-case,
 * collapse runs of whitespace and hyphens to one hyphen. Duplicate ids get
 * `_1`, `_2`, ...
 *
 * This is a Sätteri hast plugin (nimbus `markdown.hastPlugins`). It replaces
 * the automatic id on every Markdown heading. Headings written as HTML
 * (`<h4 id="...">`) are JSX nodes in MDX and keep their explicit id; MkDocs
 * registered those ids before it assigned the automatic ones, which this
 * single-pass visitor cannot do — the explicit ids are class-prefixed, so
 * they do not collide with the automatic ones.
 */
import { readFileSync } from "node:fs";

export default function mkdocsHeadingIds() {
  // A factory: Sätteri calls it once per compile, so the set of used ids
  // starts empty for every document.
  return () => {
    const used = new Set();
    let primed = false;
    return {
      name: "phalcon:mkdocs-heading-ids",
      element: {
        filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
        visit(node, ctx) {
          if (!primed) {
            primed = true;
            reserveTitle(used, readTitle(ctx.fileURL));
          }
          ctx.setProperty(node, "id", unique(slugify(ctx.textContent(node)), used));
        },
      },
    };
  };
}

/**
 * The page title was the H1 in MkDocs and took its id first: a page "Cache"
 * with a section "Cache" gave the section `cache_1`.
 */
export function reserveTitle(used, title) {
  if (title) used.add(slugify(title));
}

function readTitle(fileURL) {
  if (!fileURL) return "";
  let source;
  try {
    source = readFileSync(fileURL, "utf8");
  } catch {
    return "";
  }
  const frontmatter = /^---\n([\s\S]*?)\n---\n/.exec(source);
  const line = frontmatter && /^title:[ \t]*(.+)$/m.exec(frontmatter[1]);
  if (!line) return "";
  const value = line[1].trim();
  return value.startsWith('"') ? JSON.parse(value) : value;
}

export function slugify(value) {
  const ascii = value.normalize("NFKD").replace(/[^\x00-\x7F]/g, "");
  const cleaned = ascii.replace(/[^\w\s-]/g, "").trim().toLowerCase();
  return cleaned.replace(/[-\s]+/g, "-");
}

export function unique(id, used) {
  while (used.has(id) || id === "") {
    const match = /^(.*)_(\d+)$/.exec(id);
    id = match ? `${match[1]}_${Number(match[2]) + 1}` : `${id}_1`;
  }
  used.add(id);
  return id;
}
