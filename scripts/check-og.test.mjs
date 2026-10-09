import assert from "node:assert/strict";
import { test } from "node:test";

import { cardPaths, checkSummary, missingCards } from "./check-og.mjs";

const head = (...tags) => `<html><head>${tags.join("")}</head><body></body></html>`;

test("cardPaths gives the site path of the og:image and the twitter:image, once", () => {
  const html = head(
    '<meta property="og:image" content="https://docs.phalcon.io/og/di.png">',
    '<meta name="twitter:image" content="https://docs.phalcon.io/og/di.png">',
  );

  assert.deepEqual(cardPaths(html), ["/og/di.png"]);
});

test("cardPaths takes a path of the site, and leaves out another host", () => {
  const html = head(
    '<meta property="og:image" content="/og.png">',
    '<meta name="twitter:image" content="https://assets.phalcon.io/phalcon/social/github.phalcon.docs.png">',
  );

  assert.deepEqual(cardPaths(html), ["/og.png"]);
});

test("cardPaths gives nothing for a page with no image", () => {
  assert.deepEqual(cardPaths(head('<meta http-equiv="refresh" content="0;url=/5.22/di/">')), []);
});

test("missingCards lists each card of a page that is not a file", () => {
  const pages = [
    { html: head('<meta property="og:image" content="https://docs.phalcon.io/og/di.png">'), page: "5.22/di/index.html" },
    { html: head('<meta property="og:image" content="https://docs.phalcon.io/og/acl.png">'), page: "5.22/acl/index.html" },
  ];

  assert.deepEqual(missingCards(pages, (path) => path === "/og/di.png"), [{ page: "5.22/acl/index.html", path: "/og/acl.png" }]);
});

test("cardPaths reads the attributes of a meta tag in any order", () => {
  assert.deepEqual(cardPaths(head('<meta content="https://docs.phalcon.io/og/di.png" property="og:image">')), ["/og/di.png"]);
});

test("cardPaths drops the query and the fragment of an address: a card can have a version", () => {
  // A platform keeps a preview image by its address; a version (?v=2) makes it fetch a new card.
  assert.deepEqual(cardPaths(head('<meta property="og:image" content="https://docs.phalcon.io/og/di.png?v=2#top">')), ["/og/di.png"]);
});

test("checkSummary fails when no page has a card, so a check that reads nothing does not pass", () => {
  assert.deepEqual(checkSummary([{ html: head(), page: "index.html" }], () => true), { cards: 0, missing: [], ok: false });
});

test("checkSummary passes when every card of every page is a file", () => {
  const pages = [{ html: head('<meta property="og:image" content="/og.png">'), page: "404.html" }];

  assert.deepEqual(checkSummary(pages, () => true), { cards: 1, missing: [], ok: true });
});
