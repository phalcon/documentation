import { test } from "node:test";
import assert from "node:assert/strict";
import { googleAnalytics, versionBanner, versionTag } from "./site.mjs";

test("analytics head elements carry the measurement id", () => {
  const head = googleAnalytics("G-TEST");
  assert.equal(head.length, 2);
  assert.equal(head[0].attrs.src, "https://www.googletagmanager.com/gtag/js?id=G-TEST");
  assert.match(head[1].content, /gtag\('config', 'G-TEST'\)/);
  assert.deepEqual(googleAnalytics(""), []);
});

test("stable versions have no banner; others point to the stable release", () => {
  const prereleases = { "6.0": "beta" };
  assert.equal(versionBanner("5.20", ["5.20"], prereleases), null);
  const older = versionBanner("5.19", ["5.20"], prereleases);
  assert.equal(older.type, "caution");
  assert.match(older.content, /The current stable release is <a href="\/5.20\/">5.20<\/a>/);
  const beta = versionBanner("6.0", ["5.20"], prereleases);
  assert.equal(beta.type, "caution");
  assert.match(beta.content, /6.0<\/strong> \(beta\)\. <a href="\/5.20\/">5.20<\/a> remains/);
});

test("with two stable releases, an older 5.x points to 5.20 and nothing shows on either stable", () => {
  const stable = ["6.0", "5.20"];
  assert.equal(versionBanner("6.0", stable, {}), null);
  assert.equal(versionBanner("5.20", stable, {}), null);
  assert.match(versionBanner("5.19", stable, {}).content, /<a href="\/5.20\/">5.20<\/a>/);
  assert.match(versionBanner("4.2", stable, {}).content, /<a href="\/6.0\/">6.0<\/a>/);
});

test("picker tags: latest for the first stable, stable for the others, the pre-release tag otherwise", () => {
  const stable = ["6.0", "5.20"];
  assert.equal(versionTag("6.0", stable, {}), "latest");
  assert.equal(versionTag("5.20", stable, {}), "stable");
  assert.equal(versionTag("5.19", stable, {}), undefined);
  assert.equal(versionTag("7.0", stable, { "7.0": "alpha" }), "alpha");
});
