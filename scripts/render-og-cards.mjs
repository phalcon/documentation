/**
 * Renders the social cards of the docs into dist/ after the build: dist/og.png
 * (the site card) and dist/og/<slug>.png (one card for each page name, the same
 * for every version). The cards and their text are in scripts/og-cards.mjs, the
 * layout in resources/og/card.html. Fails when a title does not fit beside the
 * falcon (two lines, or three lines at 56px and less).
 *
 * Run in the Puppeteer image, at the root of the repository, after the build:
 *
 *   docker run --rm --shm-size=2g -u "$(id -u):$(id -g)" -e HOME=/docs/node_modules/.cache/og \
 *     -e TMPDIR=/docs/node_modules/.cache/og -e PUPPETEER_CACHE_DIR=/home/pptruser/.cache/puppeteer \
 *     -v "$PWD:/docs" -w /docs ghcr.io/puppeteer/puppeteer:25.12.0 node scripts/render-og-cards.mjs
 */
import { mkdirSync, readdirSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

import { STABLE_VERSIONS } from "../src/lib/site.mjs";
import { versions } from "../src/versions.generated.mjs";
import { SITE_CARD, cardPage, pageCards, pageSlug, pageTitle } from "./og-cards.mjs";

const require = createRequire("/home/pptruser/package.json");
const puppeteer = require("puppeteer");

/** The pages of every version: the folder src/content/docs-<version>/ and the title of each page. */
const pages = versions.flatMap((version) => {
  const folder = `src/content/docs-${version}`;

  return readdirSync(folder, { recursive: true })
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => ({
      slug: pageSlug(file),
      title: pageTitle(readFileSync(join(folder, file), "utf8")),
      version,
    }));
});
const untitled = pages.filter((page) => page.title === null);

if (untitled.length > 0) {
  const list = untitled.map((page) => `${page.version}/${page.slug}`).join(", ");

  throw new Error(`pages with no title, or a title that the card list cannot read (one line: "…", '…' or plain): ${list}`);
}

const cards = [{ ...SITE_CARD }, ...pageCards(pages, versions, STABLE_VERSIONS[0])];
const template = readFileSync("resources/og/card.html", "utf8");
const design = {
  falcon: `data:image/svg+xml;base64,${readFileSync("public/assets/images/falcon.svg").toString("base64")}`,
  tokens: readFileSync("src/styles/tokens.css", "utf8"),
};

// Chrome keeps its profile in TMPDIR: a folder of the repository, not /tmp.
if (process.env.TMPDIR) {
  mkdirSync(process.env.TMPDIR, { recursive: true });
}

const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
const tab = await browser.newPage();

await tab.setViewport({ deviceScaleFactor: 1, height: 630, width: 1200 });

for (const card of cards) {
  const file = join("dist", card.file);

  await tab.setContent(cardPage(template, card, design), { waitUntil: "load" });

  // The script of the template makes a long name smaller; at its smallest size the name must fit too.
  const box = await tab.evaluate(() => {
    const name = document.querySelector("h1 .name");

    return { height: name.offsetHeight, size: parseFloat(getComputedStyle(name).fontSize), width: name.scrollWidth };
  });

  if (box.width > 600 || box.height > Math.ceil(box.size * 1.05 * (box.size > 56 ? 2 : 3))) {
    throw new Error(`${card.file}: the title does not fit (${box.width}x${box.height}px at ${box.size}px)`);
  }

  mkdirSync(dirname(file), { recursive: true });
  await tab.screenshot({ path: file });
}

await browser.close();
console.log(`cards ${cards.length}`);
