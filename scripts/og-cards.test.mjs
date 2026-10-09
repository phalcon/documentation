import assert from "node:assert/strict";
import { test } from "node:test";

import { cardPage, pageCards, pageSlug, pageTitle } from "./og-cards.mjs";

const ORDER = ["6.0", "5.22", "5.21", "3.4"];
const page = (version, slug, title) => ({ slug, title, version });

test("pageTitle reads the title of the front matter", () => {
  assert.equal(pageTitle('---\ntitle: "Dependency Injection / Service Location"\n---\n\nText.\n'), "Dependency Injection / Service Location");
});

test("pageTitle decodes the escapes of the YAML string and drops the Markdown bold", () => {
  assert.equal(pageTitle('---\ntitle: "Abstract class **Phalcon\\\\Acl**"\n---\n'), "Abstract class Phalcon\\Acl");
});

test("pageTitle gives null for a page with no title", () => {
  assert.equal(pageTitle("---\ndescription: \"No title\"\n---\n"), null);
  assert.equal(pageTitle("No front matter.\n"), null);
});

test("pageCards takes the title and the address of the stable version, also when a newer version has the page", () => {
  const pages = [page("6.0", "di", "DI (6.0)"), page("5.22", "di", "Dependency Injection"), page("5.21", "di", "DI (5.21)")];

  assert.deepEqual(pageCards(pages, ORDER, "5.22"), [
    { address: "docs.phalcon.io/latest/di", file: "og/di.png", title: "Dependency Injection" },
  ]);
});

test("pageCards takes the newest version that has the page when the stable version does not", () => {
  const pages = [page("3.4", "volt", "Volt (3.4)"), page("6.0", "volt", "Volt (6.0)"), page("3.4", "old", "Old")];

  assert.deepEqual(pageCards(pages, ORDER, "5.22"), [
    { address: "docs.phalcon.io/3.4/old", file: "og/old.png", title: "Old" },
    { address: "docs.phalcon.io/6.0/volt", file: "og/volt.png", title: "Volt (6.0)" },
  ]);
});

test("pageCards gives one card for each page name, in the order of the files, also in a folder", () => {
  const pages = [page("5.22", "api/phalcon_acl", "Phalcon\\Acl"), page("5.21", "api/phalcon_acl", "Acl"), page("5.22", "acl", "ACL")];

  assert.deepEqual(pageCards(pages, ORDER, "5.22").map((card) => card.file), ["og/acl.png", "og/api/phalcon_acl.png"]);
});

test("pageSlug gives the page id of Astro: the file with no extension, and a folder for its index", () => {
  assert.equal(pageSlug("di.mdx"), "di");
  assert.equal(pageSlug("api/phalcon_acl.md"), "api/phalcon_acl");
  assert.equal(pageSlug("api/index.mdx"), "api");
});

test("pageTitle reads a plain title and a title in single quotes", () => {
  // AGENT.md shows a plain title; YAML allows each of the three forms.
  assert.equal(pageTitle("---\ntitle: My page\n---\n"), "My page");
  assert.equal(pageTitle("---\ntitle: 'It''s here'\n---\n"), "It's here");
});

test("pageTitle reads a title with spaces after it, and a file with CRLF line ends", () => {
  assert.equal(pageTitle('---\r\ntitle: "My page"  \r\n---\r\n'), "My page");
});

test("pageTitle decodes the YAML escapes of a title in double quotes", () => {
  assert.equal(pageTitle('---\ntitle: "A \\x41 \\u00e9 \\"q\\""\n---\n'), 'A A é "q"');
});

test("cardPage puts the fields into the template, with the characters of HTML escaped", () => {
  const template = "{{kicker}}|{{name}}|{{tagline}}|{{text}}|{{pills}}|{{address}}|{{tokens}}|{{falcon}}";
  const card = { address: "docs.phalcon.io/latest/a", title: 'A & B <C> "D" Phalcon\\E' };

  assert.equal(
    cardPage(template, card, { falcon: "F", tokens: "T" }),
    'Phalcon · Documentation|A &amp; B &lt;C&gt; &quot;D&quot; Phalcon\\<wbr>E||The official documentation of the Phalcon Framework.|'
      + '<span class="pill">docs.phalcon.io</span><span class="pill">v5 · v6</span>|docs.phalcon.io/latest/a|T|F',
  );
});
