import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { test } from "node:test";

import { definedTokens, footerProblems, missingTokens } from "../src/lib/design-checks.mjs";
import { cphalconStars } from "../src/lib/stars.mjs";
import { versions } from "../src/versions.generated.mjs";
import { sourceFiles, usedBySite } from "./token-sources.mjs";

const root = new URL("../", import.meta.url);
const globals = readFileSync(new URL("src/styles/globals.css", root), "utf8");

/** The declarations of the first rule with this exact selector at the start of a line. */
const block = (css, selector) => {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return new RegExp(`(?:^|\\n)${escaped}\\s*\\{([^}]*)\\}`).exec(css)?.[1] ?? "";
};

/** The --nb- colors and the code background of one mode, as the table of spec Part 4 maps them. */
const modeColors = (mode) => {
  const role = (name) => `var(--ph-${mode}-${name})`;
  // No dark tone role is a hover surface (spec Decision 16).
  const hover = mode === "light" ? role("bg-alt") : "var(--ph-surface-800)";
  const tint =
    mode === "light"
      ? "color-mix(in srgb, var(--ph-light-accent) 9%, var(--ph-light-bg))"
      : "color-mix(in srgb, var(--ph-dark-accent) 14%, transparent)";
  const status = ["danger", "info", "success", "warning"].flatMap((name) => [
    [`--nb-${name}`, role(name)],
    [`--nb-${name}-foreground`, role(name)],
    [`--nb-${name}-muted`, role(`${name}-bg`)],
  ]);

  return [
    ["--code-bg", role("code-bg")],
    ["--nb-accent", hover],
    ["--nb-background", role("bg")],
    ["--nb-border", role("border")],
    ["--nb-border-strong", role("border-strong")],
    ["--nb-card", role("surface")],
    ["--nb-foreground", role("text")],
    ["--nb-muted", hover],
    ["--nb-muted-foreground", role("muted")],
    ["--nb-primary", role("accent")],
    ["--nb-primary-foreground", role("accent-contrast")],
    ["--nb-primary-hover", role("accent-hover")],
    ["--nb-primary-muted", tint],
    ["--nb-ring", role("ring")],
    ["--nb-selected", role("border-strong")],
    ...status,
  ];
};

test("the source scan covers the stylesheets, components, layouts, pages and scripts, not tests, content or the tokens file", () => {
  // A token that only a component uses must count as used. The diagram script is a source too (sites roadmap,
  // Phase 5, D3): it has no color of its own.
  const files = sourceFiles();

  for (const file of ["src/components/api/ApiItem.astro", "src/layouts/BaseLayout.astro", "src/pages/404.astro", "src/scripts/mermaid.ts", "src/styles/api.css", "src/styles/globals.css"]) {
    assert.ok(files.includes(file), file);
  }

  assert.ok(!files.includes("src/styles/tokens.css"), "src/styles/tokens.css");
  assert.ok(!files.some((file) => file.endsWith(".test.mjs") || file.startsWith("src/content/")));
});

test("the diagrams take their colors from the docs variables of the current mode", () => {
  // Mermaid's colors follow the tokens (sites roadmap, Phase 5, D3). Its error colors are not set: on an error
  // the script shows a text, not Mermaid's error picture.
  const script = readFileSync(new URL("src/scripts/mermaid.ts", root), "utf8");

  for (const name of ["--nb-background", "--nb-card", "--nb-foreground", "--nb-muted", "--nb-muted-foreground", "--nb-primary"]) {
    assert.ok(script.includes(`getThemeColor("${name}")`), name);
  }

  assert.doesNotMatch(script, /errorBkgColor|errorTextColor/);
});

test("the source scan leaves out the generated files: a link anchor in them is not a color", () => {
  // resources/nimbus/convert.py writes them (AGENT.md). An anchor such as #add in a sidebar must not fail a test.
  const files = sourceFiles();

  for (const file of ["src/content.config.ts", "src/pages/5.22/[...slug].astro", "src/redirects/5.22.mjs", "src/sidebar/5.22.mjs", "src/versions.generated.mjs"]) {
    assert.ok(!files.includes(file), file);
  }

  assert.ok(files.includes("src/pages/[...slug].astro"), "src/pages/[...slug].astro");
});

test("the tokens file defines every token that the docs use", () => {
  const tokens = readFileSync(new URL("src/styles/tokens.css", root), "utf8");

  assert.deepEqual(missingTokens(tokens, usedBySite()), []);
});

test("globals.css defines no --ph- token of its own", () => {
  // The --ph- names belong to the tokens file (phalcon/assets).
  assert.deepEqual([...definedTokens(globals)], []);
});

test("globals.css takes the --nb- colors of each mode from the tokens", () => {
  for (const [selector, mode] of [[":root", "light"], ['[data-mode="dark"]', "dark"]]) {
    const declarations = block(globals, selector);

    for (const [name, value] of modeColors(mode)) {
      assert.ok(declarations.includes(`${name}: ${value};`), `${selector} ${name}: ${value}`);
    }
  }

  assert.ok(block(globals, ":root").includes("--nb-font-sans: var(--ph-font-sans);"), "--nb-font-sans");
  assert.ok(block(globals, ":root").includes("--nb-font-mono: var(--ph-font-mono);"), "--nb-font-mono");
});

test("no source types a color", () => {
  // Colors come from src/styles/tokens.css (phalcon/assets), so a palette change is made once. A color of
  // Tailwind's palette (bg-gray-500) counts too; its black and white follow the tokens (see the next test). The
  // copy of common.css is not this site's source: phalcon/assets checks its colors, and its comments can name colors.
  const color =
    /#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch)\(|\bcolor\(|\b(?:bg|border|caret|decoration|divide|fill|from|outline|placeholder|ring|shadow|stroke|text|to|via)-(?:amber|blue|cyan|emerald|fuchsia|gray|green|indigo|lime|neutral|orange|pink|purple|red|rose|sky|slate|stone|teal|violet|yellow|zinc)-\d{2,3}\b/g;
  const typed = sourceFiles().filter((file) => file !== "src/styles/common.css").flatMap((file) =>
    readFileSync(new URL(file, root), "utf8")
      .split("\n")
      .flatMap((line, index) => [...line.matchAll(color)].map((match) => `${file}:${index + 1} ${match[0]}`)),
  );

  assert.deepEqual(typed, []);
});

test("the Tailwind black and white take their values from the tokens", () => {
  // bg-black/40 (the dialog backdrop) and text-white (a button) use Tailwind's palette, unless @theme maps them.
  const theme = /@theme\s*\{([^}]*)\}/.exec(globals)?.[1] ?? "";

  assert.match(theme, /--color-black:\s*var\(--ph-night-950\);/);
  assert.match(theme, /--color-white:\s*var\(--ph-white\);/);
});

test("the deploy workflow gets the design files before the tests", () => {
  // The tests and the build must see the files that the deploy publishes.
  const workflow = readFileSync(new URL(".github/workflows/deploy-documents.yml", root), "utf8");
  const step = workflow.indexOf("run: node scripts/update-tokens.mjs");

  assert.ok(step > 0, "the step is missing");
  assert.ok(step < workflow.indexOf("run: pnpm test"), "the step must come before the tests");
});

test("the deploy workflow and the refresh script read phalcon/assets from assets.phalcon.io", () => {
  // assets.phalcon.io is the CDN of the Phalcon sites. Cloudflare answers a
  // .html URL with a 308 to the URL without .html, so curl must follow it (-L).
  const workflow = readFileSync(new URL(".github/workflows/deploy-documents.yml", root), "utf8");
  const script = readFileSync(new URL("scripts/update-tokens.mjs", root), "utf8");

  assert.doesNotMatch(workflow, /raw\.githubusercontent\.com/, "deploy-documents.yml");
  assert.doesNotMatch(script, /raw\.githubusercontent\.com/, "update-tokens.mjs");
  assert.match(script, /const SOURCE = "https:\/\/assets\.phalcon\.io\/phalcon";/);
  assert.match(workflow, /curl -fsSL -o src\/fanart\.html \\\n\s+https:\/\/assets\.phalcon\.io\/phalcon\/fanart-fragment\.html/);
  assert.match(workflow, /curl -fsSL -o src\/sponsors\.json \\\n\s+https:\/\/assets\.phalcon\.io\/phalcon\/sponsors\.json/);
});

test("the deploy workflow gets the design tools first, and keeps the committed copy when a file is not valid", () => {
  // The tools come from assets.phalcon.io. The design files and the tests must use the tools that the build uses.
  const workflow = readFileSync(new URL(".github/workflows/deploy-documents.yml", root), "utf8");
  const step = workflow.indexOf("https://assets.phalcon.io/phalcon/tools/$file");

  assert.ok(step > 0, "the step is missing");
  assert.ok(step < workflow.indexOf("run: node scripts/update-tokens.mjs"), "the step must come before the design files");
  assert.match(workflow, /for file in design-checks\.mjs design-refresh\.mjs stars\.mjs; do/);
  assert.match(workflow, /new="src\/lib\/\$\{file%\.mjs\}\.new\.mjs"/);
  assert.match(workflow, /curl -fsSL --max-time 30 -o "\$new" "https:\/\/assets\.phalcon\.io\/phalcon\/tools\/\$file" && node --check "\$new"/);
});

test("the deploy workflow keeps the committed design tools when a new file lacks one of their exports", () => {
  // The site imports the functions by name: a new file with an export less would stop the refresh.
  const workflow = readFileSync(new URL(".github/workflows/deploy-documents.yml", root), "utf8");

  assert.match(workflow, /node --check "\$new" \\\n\s+&& node --input-type=module -e "\$EXPORTS" "\$new" "src\/lib\/\$file"; then/);
  assert.match(workflow, /Object\.keys\(last\)\.every\(\(name\) => name in next\)/);
});

test("the refresh script copies the shared files and checks each one", () => {
  // The shared nav and footer of the Phalcon sites (sites roadmap, Phase 5, D1) need common.css, footer.json and
  // repositories.json, as on the blog and the license site.
  const script = readFileSync(new URL("scripts/update-tokens.mjs", root), "utf8");
  const entries = [
    ["src/styles/tokens.css", "css/tokens.css"],
    ["src/styles/code-theme.json", "css/code-theme.json"],
    ["src/styles/common.css", "css/common.css"],
    ["src/footer.json", "footer.json"],
    ["src/repositories.json", "repositories.json"],
  ];

  for (const [copy, name] of entries) {
    assert.ok(script.includes(`copy: "${copy}",\n      name: "${name}",`), copy);
  }

  assert.ok(script.includes('problems: (text) => commonCssProblems(text, readFileSync("src/styles/tokens.css", "utf8")),'));
  assert.ok(script.includes("problems: footerProblems,"));
  // The tokens come first: the check of common.css must read the new tokens copy.
  assert.ok(script.indexOf('copy: "src/styles/tokens.css"') < script.indexOf('copy: "src/styles/common.css"'), "the tokens must come before common.css");
});

test("the refresh script copies the icons of phalcon/assets as bytes, and checks each one", () => {
  // An icon is an image: refresh() must read, compare and write its bytes (binary: true). The copies are at the root
  // of the site, where browsers and other clients ask for /favicon.ico. nimbus writes the SVG icon tag from
  // public/favicon.svg.
  const script = readFileSync(new URL("scripts/update-tokens.mjs", root), "utf8");
  const entries = [
    ["public/favicon.ico", "favicons/favicon.ico", "icoProblems"],
    ["public/favicon.svg", "favicons/favicon.svg", "svgProblems"],
    ["public/apple-touch-icon.png", "favicons/apple-touch-icon.png", "(bytes) => pngProblems(bytes, 180)"],
    ["public/android-chrome-192x192.png", "favicons/android-chrome-192x192.png", "(bytes) => pngProblems(bytes, 192)"],
    ["public/android-chrome-512x512.png", "favicons/android-chrome-512x512.png", "(bytes) => pngProblems(bytes, 512)"],
  ];

  for (const [copy, name, check] of entries) {
    assert.ok(script.includes(`binary: true,\n      copy: "${copy}",\n      name: "${name}",\n      problems: ${check},`), copy);
  }
});

test("the old icon of the MkDocs site is gone", () => {
  // The icons are at the root of public/, as copies of phalcon/assets. resources/nimbus/convert.py copies the images
  // of a MkDocs version into public/assets/images/, so a conversion can bring the old icon back.
  assert.ok(!existsSync(new URL("public/assets/images/favicon.ico", root)));
});

test("the committed footer.json has no problems", () => {
  // Footer.astro reads this copy at build time.
  assert.deepEqual(footerProblems(readFileSync(new URL("src/footer.json", root), "utf8")), []);
});

test("the committed repositories.json has a star count for cphalcon", () => {
  // The nav reads this copy at build time. The refresh replaces it only with a file that has a count.
  assert.notEqual(cphalconStars(readFileSync(new URL("src/repositories.json", root), "utf8")), null);
});

test("common.css has a rule for every ph- class that the nav and the footer use", () => {
  // A class that phalcon/assets renames would leave an element with no style. The tests run after the refresh,
  // so the deploy stops before it publishes.
  const css = readFileSync(new URL("src/styles/common.css", root), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const used = ["src/components/Header.astro", "src/components/Footer.astro"]
    .flatMap((file) => [...readFileSync(new URL(file, root), "utf8").matchAll(/class="([^"]*)"/g)])
    .flatMap((match) => match[1].split(/\s+/))
    .filter((name) => name.startsWith("ph-"));
  const missing = [...new Set(used)].filter((name) => !new RegExp(`\\.${name}(?![\\w-])`).test(css));

  assert.ok(used.length > 25, "the nav and the footer use the shared classes");
  assert.deepEqual(missing, []);
});

test("the nav and the drawer have the links of phalcon.io, with absolute addresses, from one list", async () => {
  // The docs are not on phalcon.io: a relative link of phalcon.io (/download) would point into the docs.
  const { download, github, links, menus } = await import("../src/lib/site-nav.mjs");
  const hrefs = [...links, ...menus.flatMap((menu) => menu.items)].map((link) => link.href).concat(download, github);

  assert.ok(hrefs.length >= 15, `${hrefs.length} links`);
  assert.deepEqual(hrefs.filter((href) => !href.startsWith("https://")), []);

  for (const file of ["src/components/Header.astro", "src/components/SiteLinks.astro"]) {
    assert.ok(readFileSync(new URL(file, root), "utf8").includes('from "../lib/site-nav.mjs";'), file);
  }
});

test("the nav has the order of the blog: Get Phalcon, the search, GitHub with the stars, Discord, then the docs controls", () => {
  // The order of the end group of common.css: the links, the Discord icon, the items of the site (roadmap Phase 9).
  // The search pill is in the links, as on the blog (the user's review, 2026-10-13). The links have names for screen
  // readers; the SVGs have none.
  const nav = readFileSync(new URL("src/components/Header.astro", root), "utf8");
  const order = ['class="ph-nav__end"', 'class="ph-nav__links', 'class="ph-nav__cta"', 'class="nav-search"', 'class="ph-nav__github"', 'class="ph-nav__discord', "<SearchTrigger", "<ThemeToggle />", "data-menu-btn"]
    .map((part) => nav.indexOf(part));
  const glyph = (name) => new RegExp(`class="ph-nav__${name}[^"]*"[^>]*>\\s*<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">\\s*<path fill="currentColor" d="([^"]+)"\\s*/>`).exec(nav)?.[1] ?? "";

  assert.ok(order.every((at, index) => at > (order[index - 1] ?? -1)), `the places: ${order.join(", ")}`);
  assert.match(nav, /<a href=\{github\} class="ph-nav__github" aria-label=\{`GitHub, \$\{stars\} stars`\}>/);
  assert.match(nav, /<a href="https:\/\/phalcon\.io\/discord" class="ph-nav__discord max-sm:hidden" aria-label="Discord">/);
  // The glyphs of Simple Icons 16.32.0 (CC0-1.0), the same on every site.
  assert.equal(createHash("sha256").update(glyph("github")).digest("hex"), "d82e21f6c9bfbfd889fed4b8d8604121be1d364ef75b7fe42cc9c0b8737ae529");
  assert.equal(createHash("sha256").update(glyph("discord")).digest("hex"), "6806ec0e2319eb7f7d9f5d02636a197d42903ff8f8e9bab0c267c8fabc1b03fe");
});

test("the docs have no burger: below 84rem the drawer of the docs navigation has the links of the nav", () => {
  // One menu button on a phone (sites roadmap, Phase 5, D2): the button of the drawer. With the docs controls, the
  // links of the nav fit from 1310px, so the nav shows them from 84rem (1344px), and below 84rem the drawer button
  // and the search button of the docs show. Below 40rem the Discord icon goes (Discord is in the drawer): on a phone
  // the search is more important (the user's review, 2026-10-13).
  const nav = readFileSync(new URL("src/components/Header.astro", root), "utf8");
  const layout = readFileSync(new URL("src/layouts/DocsLayout.astro", root), "utf8");
  const drawer = layout.slice(layout.indexOf("<dialog"), layout.indexOf("</dialog>"));

  assert.doesNotMatch(nav, /ph-nav__burger|nav-mobile|nav\.js/);
  assert.match(nav, /<div class="ph-nav__links max-\[84rem\]:hidden">/);
  assert.match(nav, /<SearchTrigger class="min-\[84rem\]:hidden" \/>/);
  assert.match(nav, /data-menu-btn\s+class="min-\[84rem\]:hidden/);
  assert.ok(drawer.includes("<SiteLinks />"), "the drawer has the links of the nav");
});

test("the nav has the name of the site in the name style of common.css, as on the blog and the license site", () => {
  // "Phalcon Blog", "Phalcon License", "Phalcon Docs": one line, so that the nav keeps its height.
  const nav = readFileSync(new URL("src/components/Header.astro", root), "utf8");

  assert.match(nav, /<span class="ph-nav__name">Phalcon Docs<\/span>/);
  assert.doesNotMatch(nav, /font-mono/);
  assert.match(block(globals, ".ph-nav__name"), /white-space: nowrap;/);
});

test("the version picker of the nav has the size and the weight of the links of the nav", () => {
  // The links of common.css are 0.875rem (text-sm), with the normal weight.
  const picker = readFileSync(new URL("src/components/ui/version-switcher/VersionSwitcher.astro", root), "utf8");
  const button = /<button[^>]*data-popover-trigger[^>]*class="([^"]*)"|<PopoverTrigger[^>]*class="([^"]*)"/.exec(picker);
  const classes = (button?.[1] ?? button?.[2] ?? "").split(/\s+/);

  assert.ok(classes.includes("text-sm"), classes.join(" "));
  assert.deepEqual(classes.filter((name) => name.startsWith("text-[") || name === "font-medium"), []);
});

test("the search of the nav is a pill with the look of the blog search", () => {
  // The blog search (public/css/site.css, .header__search): 172 x 30px, a pill, 12px, the mist color at 40%, white
  // text. On the docs it is a button that opens the search dialog (data-search-trigger).
  const nav = readFileSync(new URL("src/components/Header.astro", root), "utf8");
  const pill = block(globals, ".nav-search");

  assert.match(nav, /<button type="button" class="nav-search" data-search-trigger aria-label="Search documentation" aria-keyshortcuts="Control\+K">Search\.\.\.<\/button>/);

  for (const line of ["background-color: color-mix(in srgb, var(--ph-mist-100) 40%, transparent);", "border-radius: 100px;", "color: var(--ph-white);", "font-size: 12px;", "height: 30px;", "width: 172px;"]) {
    assert.ok(pill.includes(line), line);
  }
});

test("the nav is dark in both tones, and the docs controls in it take the dark colors", () => {
  // data-mode="dark" gives the nav the dark --nb- colors. @theme resolves the Tailwind colors on :root, so the
  // nav maps each of them again.
  const nav = readFileSync(new URL("src/components/Header.astro", root), "utf8");
  const theme = /@theme\s*\{([^}]*)\}/.exec(globals)?.[1] ?? "";
  const mapped = [...theme.matchAll(/--color-([a-z-]+): var\(--nb-\1\);/g)].map((match) => match[0]);

  assert.match(nav, /<nav class="ph-nav" data-mode="dark">/);
  assert.ok(mapped.length >= 15, `${mapped.length} colors`);
  assert.deepEqual(mapped.filter((line) => !block(globals, ".ph-nav").includes(line)), []);
});

test("common.css is in the Tailwind layer components, after the tokens", () => {
  // Without a layer, its resets of the nav (font, background, corners) win over the classes of the docs controls.
  // In the layer, the classes win, and common.css still wins over the base rules of Tailwind.
  const tokens = globals.indexOf('@import "./tokens.css";');
  const common = globals.indexOf('@import "./common.css" layer(components);');

  assert.ok(tokens >= 0 && common > tokens, `${tokens}, ${common}`);
});

test("the sticky parts of the layout follow the height of the shared nav", () => {
  // The desktop sidebar, the table of contents and the bar of the table of contents stay below the nav.
  const layout = readFileSync(new URL("src/layouts/DocsLayout.astro", root), "utf8");

  assert.doesNotMatch(layout, /top-14|3\.5rem/);
  assert.equal(layout.match(/top-\(--nb-header-height\)/g)?.length, 3);
  assert.equal(layout.match(/h-\[calc\(100vh-var\(--nb-header-height\)\)\]/g)?.length, 2);
  assert.match(block(globals, ":root"), /--nb-header-height: 69px;/);
  assert.match(block(globals, ".ph-nav__bar"), /min-height: calc\(var\(--nb-header-height\) - 1px\);/);
});

test("every page has the shared nav and the shared footer", () => {
  // The 404 page has no drawer, so its nav has no drawer button.
  const layout = readFileSync(new URL("src/layouts/DocsLayout.astro", root), "utf8");
  const missing = readFileSync(new URL("src/pages/404.astro", root), "utf8");

  assert.match(layout, /<Footer \/>/);
  assert.match(missing, /<Header showSidebar=\{false\} \/>/);
  assert.match(missing, /<Footer \/>/);
});

test("every page points to the card of its page name, which scripts/render-og-cards.mjs renders", () => {
  // One card for each page name, the same for every version (/og/<slug>.png). The template writes the routes.
  const line = "const socialImage = entry.data.socialImage ?? `/og/${entry.id}.png`;";
  const routes = readdirSync(new URL("src/pages/", root), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d+\.\d+$/.test(entry.name))
    .map((entry) => `src/pages/${entry.name}/[...slug].astro`);

  assert.ok(readFileSync(new URL("resources/nimbus/templates/slug.astro.tpl", root), "utf8").includes(line));
  assert.equal(routes.length, versions.length);
  assert.deepEqual(routes.filter((route) => !readFileSync(new URL(route, root), "utf8").includes(line)), []);
});

test("every Markdown version of a page writes the rows of the API pages with apiItemMarkdown", () => {
  // nimbus drops a component that has no Markdown renderer. The template writes the routes.
  const line = "const markdown = renderEntryAsMarkdown(entry, { componentMap: { ApiItem: apiItemMarkdown } });";
  const routes = readdirSync(new URL("src/pages/", root), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d+\.\d+$/.test(entry.name))
    .map((entry) => `src/pages/${entry.name}/[...slug]/index.md.ts`);

  assert.ok(readFileSync(new URL("resources/nimbus/templates/index.md.ts.tpl", root), "utf8").includes(line));
  assert.equal(routes.length, versions.length);
  assert.deepEqual(routes.filter((route) => !readFileSync(new URL(route, root), "utf8").includes(line)), []);
});

test("the cards of the nimbus template are gone: their routes, their config, their font and their packages", () => {
  for (const file of ["src/pages/og.png.ts", "src/pages/og/[...slug].ts", "src/pages/og/_og-card-config.ts", "public/fonts/Inter-Bold.ttf"]) {
    assert.ok(!existsSync(new URL(file, root)), file);
  }

  const { dependencies = {}, devDependencies = {} } = JSON.parse(readFileSync(new URL("package.json", root), "utf8"));

  assert.deepEqual(["astro-og-canvas", "canvaskit-wasm"].filter((name) => name in dependencies || name in devDependencies), []);
});

test("the deploy workflow renders the social cards after the build, and checks them before it publishes", () => {
  const workflow = readFileSync(new URL(".github/workflows/deploy-documents.yml", root), "utf8");
  const at = (text) => workflow.indexOf(text);

  assert.match(workflow, /ghcr\.io\/puppeteer\/puppeteer:25\.12\.0 node scripts\/render-og-cards\.mjs\n/);
  assert.match(workflow, /\n {8}run: node scripts\/check-og\.mjs\n/);
  assert.ok(at("run: pnpm build") > 0 && at("run: pnpm build") < at("- name: Render the social cards"));
  assert.ok(at("- name: Render the social cards") < at("- name: Check the social cards"));
  assert.ok(at("- name: Check the social cards") < at("- name: Publish to the deploy branch"));
});

test("the deploy workflow checks the icons after the build, and before it publishes", () => {
  const workflow = readFileSync(new URL(".github/workflows/deploy-documents.yml", root), "utf8");
  const at = (text) => workflow.indexOf(text);

  assert.match(workflow, /\n {8}run: node scripts\/check-icons\.mjs\n/);
  assert.ok(at("run: pnpm build") > 0 && at("run: pnpm build") < at("- name: Check the icons"));
  assert.ok(at("- name: Check the icons") < at("- name: Publish to the deploy branch"));
});

test("Built with Phalcon links to the page on phalcon.io", () => {
  // The page replaces builtwith.phalcon.io (2026-10-14). src/footer.json is the committed copy of phalcon/footer.json.
  for (const file of ["src/lib/site-nav.mjs", "src/footer.json"]) {
    const source = readFileSync(new URL(file, root), "utf8");

    assert.match(source, /["']Built with Phalcon["'], ["']?href["']?: ["']https:\/\/phalcon\.io\/built-with["']/, file);
    assert.doesNotMatch(source, /builtwith\.phalcon\.io/, file);
  }
});
