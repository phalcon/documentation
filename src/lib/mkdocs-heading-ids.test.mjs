import { test } from "node:test";
import assert from "node:assert/strict";
import mkdocsHeadingIds, { reserveTitle, slugify, unique } from "./mkdocs-heading-ids.mjs";

test("the page title takes its id first, like the MkDocs H1", () => {
  const used = new Set();
  reserveTitle(used, "Cache");
  assert.equal(unique("cache", used), "cache_1");
  reserveTitle(used, "");
  assert.equal(used.size, 2);
});

test("slugify matches Python-Markdown", () => {
  assert.equal(slugify("Single - Multi Module"), "single-multi-module");
  assert.equal(slugify("toArray / toJson"), "toarray-tojson");
  assert.equal(slugify("Linux (DEB) - Ondřej Surý"), "linux-deb-ondrej-sury");
  assert.equal(slugify("Acl\\AbstractElement"), "aclabstractelement");
  assert.equal(slugify("Mission 🚀"), "mission");
  assert.equal(slugify("PHP 8.1"), "php-81");
  assert.equal(slugify("get_shared"), "get_shared");
});

test("duplicates get _1, _2 and an empty id becomes _1", () => {
  const used = new Set();
  assert.equal(unique("methods", used), "methods");
  assert.equal(unique("methods", used), "methods_1");
  assert.equal(unique("methods", used), "methods_2");
  assert.equal(unique("", used), "_1");
});

test("the visitor replaces automatic ids and resets per document", () => {
  const heading = (text) => ({ type: "element", tagName: "h2", properties: { id: "auto" }, text });
  const ctx = {
    textContent: (node) => node.text,
    setProperty: (node, key, value) => {
      node.properties[key] = value;
    },
  };
  const factory = mkdocsHeadingIds();
  const first = factory();
  const nodes = [heading("Constants"), heading("Constants"), heading("Creating - Updating")];
  for (const node of nodes) first.element.visit(node, ctx);
  assert.deepEqual(
    nodes.map((node) => node.properties.id),
    ["constants", "constants_1", "creating-updating"],
  );
  const second = factory();
  const again = heading("Constants");
  second.element.visit(again, ctx);
  assert.equal(again.properties.id, "constants");
  assert.deepEqual(first.element.filter, ["h1", "h2", "h3", "h4", "h5", "h6"]);
});
