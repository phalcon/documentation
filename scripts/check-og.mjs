/**
 * Checks that every page of the build has its social card: each og:image and
 * twitter:image of each HTML page of dist/ is a file of dist/. Prints the count,
 * then each missing card, and exits with 1 when a card is missing. The deploy
 * workflow runs it after "Render the social cards".
 *
 *   node scripts/check-og.mjs [dist]
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { pathToFileURL } from "node:url";

/** The address of the site: an image there is a file of dist/. */
export const SITE = "https://docs.phalcon.io";

/**
 * The image addresses of a page (og:image, twitter:image) as paths of the site,
 * each once, with no query and no fragment (a card can have a version, ?v=2).
 * The attributes of a meta tag can come in any order. An image on another host
 * is left out.
 *
 * @param {string} html
 * @returns {string[]}
 */
export function cardPaths(html) {
  const paths = new Set();

  for (const [tag] of html.matchAll(/<meta\b[^>]*>/g)) {
    const image = /\b(?:property|name)="(?:og:image|twitter:image)"/.test(tag);
    const address = /\bcontent="([^"]*)"/.exec(tag)?.[1] ?? "";
    const path = address.startsWith(`${SITE}/`) ? address.slice(SITE.length) : address;

    if (image && path.startsWith("/")) {
      paths.add(path.replace(/[?#].*$/, ""));
    }
  }

  return [...paths];
}

/**
 * The cards of the pages that are not files.
 *
 * @param {{ html: string, page: string }[]} pages
 * @param {(path: string) => boolean} exists
 * @returns {{ page: string, path: string }[]}
 */
export function missingCards(pages, exists) {
  return pages.flatMap(({ html, page }) => cardPaths(html).filter((path) => !exists(path)).map((path) => ({ page, path })));
}

/**
 * The result of the check: the count of the different cards, the missing ones,
 * and whether the build passes. A build with no card at all fails: then the
 * check read nothing (for example, a new form of the meta tags), and must not
 * pass in silence.
 *
 * @param {{ html: string, page: string }[]} pages
 * @param {(path: string) => boolean} exists
 * @returns {{ cards: number, missing: { page: string, path: string }[], ok: boolean }}
 */
export function checkSummary(pages, exists) {
  const cards = new Set(pages.flatMap(({ html }) => cardPaths(html))).size;
  const missing = missingCards(pages, exists);

  return { cards, missing, ok: cards > 0 && missing.length === 0 };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dist = process.argv[2] ?? "dist";
  const files = readdirSync(dist, { recursive: true }).filter((file) => file.endsWith(".html"));
  const pages = files.map((file) => ({ html: readFileSync(join(dist, file), "utf8"), page: relative(dist, join(dist, file)) }));
  const { cards, missing, ok } = checkSummary(pages, (path) => existsSync(join(dist, decodeURIComponent(path))));

  console.log(`pages ${pages.length}, cards ${cards}, missing ${missing.length}`);

  if (cards === 0) {
    console.log("no card: no page has an og:image or a twitter:image that the check can read");
  }

  for (const { page, path } of missing.slice(0, 20)) {
    console.log(`missing ${path} (${page})`);
  }

  process.exitCode = ok ? 0 : 1;
}
