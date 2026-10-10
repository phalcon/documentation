import { test } from "node:test";
import assert from "node:assert/strict";
import { apiItemMarkdown } from "./api-item-markdown.mjs";

test("a method row gives its visibility, name, parameters and return type", () => {
  const attrs = {
    href: "#acladapterabstractadapter-getactiveaccess",
    visibility: "public",
    name: "getActiveAccess",
    returnType: "string|null",
    params: "[]",
  };

  assert.equal(
    apiItemMarkdown({ attrs, children: "Returns the access which the list is checking if a role can access it" }),
    "- `public getActiveAccess(): string|null` — Returns the access which the list is checking if a role can access it",
  );
});

test("a method row gives the default of a parameter, and no return type when it has none", () => {
  const attrs = {
    href: "#adrapplication-__construct",
    visibility: "public",
    name: "__construct",
    returnType: "",
    params: '[{"type":"Container|null","name":"container","default":"null"},{"type":"","name":"options","default":null}]',
  };

  assert.equal(
    apiItemMarkdown({ attrs, children: "Constructor." }),
    "- `public __construct(Container|null $container = null, $options)` — Constructor.",
  );
});

test("a property row gives its visibility, type, name and default", () => {
  const attrs = { kind: "property", visibility: "protected", name: "documentTitle", type: "string|null", default: '""' };

  assert.equal(apiItemMarkdown({ attrs, children: "" }), '- `protected string|null $documentTitle = ""`');
});

test("a property row with no default gives no default", () => {
  const attrs = { kind: "property", visibility: "protected", name: "container", type: "DiInterface", default: "" };

  assert.equal(apiItemMarkdown({ attrs, children: "" }), "- `protected DiInterface $container`");
});

test("a constant row gives its type, name and value", () => {
  const attrs = { kind: "constant", name: "OPTION_CLOSE", type: "string", default: '"</option>"' };

  assert.equal(apiItemMarkdown({ attrs, children: "" }), '- `const string OPTION_CLOSE = "</option>"`');
});

test("a value with a backtick gets a longer code span", () => {
  const attrs = {
    href: "#dbdialect-getcheckclause",
    visibility: "protected",
    name: "getCheckClause",
    returnType: "string",
    params: '[{"type":"CheckInterface","name":"check","default":null},{"type":"string","name":"escapeChar","default":"\\"`\\""}]',
  };

  assert.equal(
    apiItemMarkdown({ attrs, children: "" }),
    '- ``protected getCheckClause(CheckInterface $check, string $escapeChar = "`"): string``',
  );
});

test("the lines after the first line of a description stay in the list item", () => {
  const attrs = { kind: "property", visibility: "protected", name: "activeRole", type: "string|null", default: "" };

  assert.equal(
    apiItemMarkdown({ attrs, children: "Role which the list is checking\ncomponent/access\n\nA second paragraph" }),
    "- `protected string|null $activeRole` — Role which the list is checking\n  component/access\n\n  A second paragraph",
  );
});
