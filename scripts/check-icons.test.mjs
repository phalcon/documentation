import assert from "node:assert/strict";
import { test } from "node:test";

import { SITE_DESCRIPTION, SITE_TITLE } from "../src/lib/site.mjs";
import { checkSummary, ICONS, iconTags, manifestProblems } from "./check-icons.mjs";

const COLOR = "#000001";
const head = (...tags) => `<html><head>${tags.join("")}</head><body></body></html>`;

/** The icon tags of a page of the docs: the SVG of nimbus first, then the head option of astro.config.ts. */
const TAGS = [
  '<link rel="icon" type="image/svg+xml" href="/favicon.svg">',
  '<link rel="icon" href="/favicon.ico" sizes="32x32">',
  '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
  '<link rel="manifest" href="/site.webmanifest">',
  `<meta name="theme-color" content="${COLOR}">`,
];
const MANIFEST = JSON.stringify({
  name: SITE_TITLE,
  short_name: "Docs",
  description: SITE_DESCRIPTION,
  start_url: "/",
  display: "browser",
  background_color: COLOR,
  theme_color: COLOR,
  icons: [
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
});
const site = (changes = {}) => ({ color: COLOR, exists: (file) => ICONS.includes(file), manifest: MANIFEST, ...changes });

test("iconTags gives the icon tags of a page in their order, each with its attributes sorted", () => {
  const html = head('<link href="/favicon.ico" sizes="32x32" rel="icon">', '<link rel="stylesheet" href="/a.css">', `<meta content="${COLOR}" name="theme-color">`);

  assert.deepEqual(iconTags(html), ["href=/favicon.ico rel=icon sizes=32x32", `content=${COLOR} name=theme-color`]);
});

test("checkSummary passes a build with the icon tags on every page, the manifest and the icons", () => {
  assert.deepEqual(checkSummary([{ html: head(...TAGS), page: "5.23/di/index.html" }], site()), { pages: 1, problems: [], ok: true });
});

test("checkSummary finds a page with a missing icon tag, and a page with a tag of the old set", () => {
  const pages = [
    { html: head(...TAGS.slice(1)), page: "a/index.html" },
    { html: head(...TAGS, '<link rel="shortcut icon" href="/favicon.ico">'), page: "b/index.html" },
  ];

  assert.deepEqual(checkSummary(pages, site()).problems, [
    "a/index.html: the icon tags are not the set of the Phalcon sites",
    "b/index.html: the icon tags are not the set of the Phalcon sites",
  ]);
});

test("checkSummary leaves out a redirect stub, and fails a build with no page to check", () => {
  const stub = { html: head('<meta http-equiv="refresh" content="0;url=/5.23/di">'), page: "di/index.html" };

  assert.deepEqual(checkSummary([stub], site()), { pages: 0, problems: [], ok: false });
});

test("manifestProblems finds a wrong field, the wrong icons, and a file that is not JSON", () => {
  const manifest = JSON.stringify({ ...JSON.parse(MANIFEST), display: "standalone", icons: [] });

  assert.deepEqual(manifestProblems(manifest, COLOR), [
    'display is "standalone", not "browser"',
    "the icons are none, not /android-chrome-192x192.png 192x192 image/png, /android-chrome-512x512.png 512x512 image/png",
  ]);
  assert.deepEqual(manifestProblems("<html></html>", COLOR), ["the manifest is not JSON"]);
});

test("checkSummary finds a missing manifest, a missing icon and the old icon of the MkDocs site", () => {
  const exists = (file) => file !== "favicon.svg";

  assert.deepEqual(checkSummary([{ html: head(...TAGS), page: "a/index.html" }], site({ exists, manifest: null })).problems, [
    "dist/site.webmanifest is missing",
    "dist/favicon.svg is missing",
    "dist/assets/images/favicon.ico is the old icon of the MkDocs site",
  ]);
});
