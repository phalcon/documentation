/**
 * Checks the icons of the build: every page of dist/ (not a redirect stub) has
 * the icon tags of the Phalcon sites and the browser bar color of the tokens,
 * dist/site.webmanifest has the fields of the docs, the icons are files of
 * dist/, and the old icon of the MkDocs site is gone. Prints the count, then
 * each problem, and exits with 1 when there is a problem. The deploy workflow
 * runs it after "Check the social cards".
 *
 *   node scripts/check-icons.mjs [dist]
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { pathToFileURL } from "node:url";

import { resolveToken } from "../src/lib/design-checks.mjs";
import { SITE_DESCRIPTION, SITE_TITLE } from "../src/lib/site.mjs";

/** The icons of phalcon/assets: copies in public/, at the root of the site. */
export const ICONS = ["favicon.ico", "favicon.svg", "apple-touch-icon.png", "android-chrome-192x192.png", "android-chrome-512x512.png"];

/**
 * The icon tags of a page, in their order: each icon link, apple-touch icon,
 * manifest link, mask icon, theme-color and Windows tile tag, as its attributes
 * in sorted order (the attributes of a tag can come in any order).
 *
 * @param {string} html
 * @returns {string[]}
 */
export function iconTags(html) {
  const tags = /<link\b[^>]*\brel="(?:apple-touch-icon|icon|manifest|mask-icon|shortcut icon)"[^>]*>|<meta\b[^>]*\bname="(?:theme-color|msapplication-[^"]*)"[^>]*>/g;

  return [...html.matchAll(tags)].map(([tag]) =>
    [...tag.matchAll(/([a-z-]+)="([^"]*)"/g)]
      .map(([, name, value]) => `${name}=${value}`)
      .sort()
      .join(" "),
  );
}

/**
 * The icon tags that every page must have, in this order: nimbus writes the
 * SVG icon (from public/favicon.svg), and the head option of astro.config.ts
 * the others (iconHead() in src/lib/site.mjs).
 *
 * @param {string} color the browser bar color (--ph-dark-bg)
 * @returns {string[]}
 */
export function expectedTags(color) {
  return [
    "href=/favicon.svg rel=icon type=image/svg+xml",
    "href=/favicon.ico rel=icon sizes=32x32",
    "href=/apple-touch-icon.png rel=apple-touch-icon",
    "href=/site.webmanifest rel=manifest",
    `content=${color} name=theme-color`,
  ];
}

/**
 * The problems of the manifest of the docs: its fields (the name and the
 * description of src/lib/site.mjs), and the two icons of a home screen.
 *
 * @param {string} text the content of dist/site.webmanifest
 * @param {string} color the browser bar color (--ph-dark-bg)
 * @returns {string[]}
 */
export function manifestProblems(text, color) {
  let manifest;

  try {
    manifest = JSON.parse(text);
  } catch {
    return ["the manifest is not JSON"];
  }

  const fields = {
    name: SITE_TITLE,
    short_name: "Docs",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: color,
    theme_color: color,
  };
  const problems = Object.entries(fields)
    .filter(([key, value]) => manifest[key] !== value)
    .map(([key, value]) => `${key} is ${JSON.stringify(manifest[key])}, not ${JSON.stringify(value)}`);
  const icons = (manifest.icons ?? []).map((icon) => `${icon.src} ${icon.sizes} ${icon.type}`).join(", ");
  const want = "/android-chrome-192x192.png 192x192 image/png, /android-chrome-512x512.png 512x512 image/png";

  return icons === want ? problems : [...problems, `the icons are ${icons || "none"}, not ${want}`];
}

/**
 * The result of the check: the count of the pages that it checked, the
 * problems, and whether the build passes. A redirect stub (a meta refresh) has
 * no head of the site, and is left out. A build with no page to check fails:
 * then the check read nothing, and must not pass in silence.
 *
 * @param {{ html: string, page: string }[]} pages
 * @param {{ color: string, exists: (file: string) => boolean, manifest: string | null }} site
 * @returns {{ pages: number, problems: string[], ok: boolean }}
 */
export function checkSummary(pages, { color, exists, manifest }) {
  const checked = pages.filter(({ html }) => !/<meta\b[^>]*http-equiv="refresh"/i.test(html));
  const want = expectedTags(color).join(" | ");
  const problems = [
    ...checked.filter(({ html }) => iconTags(html).join(" | ") !== want).map(({ page }) => `${page}: the icon tags are not the set of the Phalcon sites`),
    ...(manifest === null ? ["dist/site.webmanifest is missing"] : manifestProblems(manifest, color)),
    ...ICONS.filter((file) => !exists(file)).map((file) => `dist/${file} is missing`),
    ...(exists("assets/images/favicon.ico") ? ["dist/assets/images/favicon.ico is the old icon of the MkDocs site"] : []),
  ];

  return { pages: checked.length, problems, ok: checked.length > 0 && problems.length === 0 };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dist = process.argv[2] ?? "dist";
  const read = (file) => (existsSync(join(dist, file)) ? readFileSync(join(dist, file), "utf8") : null);
  const files = readdirSync(dist, { recursive: true }).filter((file) => file.endsWith(".html"));
  const pages = files.map((file) => ({ html: readFileSync(join(dist, file), "utf8"), page: relative(dist, join(dist, file)) }));
  const color = resolveToken(readFileSync("src/styles/tokens.css", "utf8"), "--ph-dark-bg");
  const { pages: checked, problems, ok } = checkSummary(pages, {
    color,
    exists: (file) => existsSync(join(dist, file)),
    manifest: read("site.webmanifest"),
  });

  console.log(`pages ${checked}, problems ${problems.length}`);

  for (const problem of problems.slice(0, 20)) {
    console.log(problem);
  }

  process.exitCode = ok ? 0 : 1;
}
