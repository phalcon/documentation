import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

import { codeThemeProblems, definedCodeRoles } from "./design-checks.mjs";

// The checks are tested in phalcon/assets (tests/design-checks.test.mjs). Here: the docs' own files.

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");
const globals = read("../styles/globals.css");
const copy = read("../styles/code-theme.json");

/** The declarations of the first rule with this exact selector at the start of a line. */
const block = (css, selector) => {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return new RegExp(`(?:^|\\n)${escaped}\\s*\\{([^}]*)\\}`).exec(css)?.[1] ?? "";
};

test("the committed copy is a code theme that the docs can use", () => {
  // Only the shape: the rules change in phalcon/assets, and the deploy must accept them.
  assert.deepEqual(codeThemeProblems(copy, definedCodeRoles(globals)), []);
});

test("globals.css maps every --code- variable of the theme to the syntax token of each mode", () => {
  const roles = new Set([...copy.matchAll(/var\(--code-([a-z0-9-]+)\)/g)].map((match) => match[1]));

  for (const [selector, mode] of [[":root", "light"], ['[data-mode="dark"]', "dark"]]) {
    const declarations = block(globals, selector);

    for (const role of roles) {
      const token = role === "bg" ? `--ph-${mode}-code-bg` : `--ph-${mode}-syntax-${role}`;

      assert.match(declarations, new RegExp(`--code-${role}:\\s*var\\(${token}\\);`), `${selector} --code-${role}`);
    }
  }
});

test("the API signatures color their parts with the code roles of the theme", () => {
  // The same colors as the code blocks, in both modes, with no rule for each mode.
  const api = read("../styles/api.css");
  const item = read("../components/api/ApiItem.astro");
  const parts = [
    ["sf", "api-fn", "function"],
    ["st", "api-type-token", "constant"],
    ["sv", "api-var", "parameter"],
    ["sc", "api-const", "constant"],
  ];

  for (const [sig, name, role] of parts) {
    assert.match(api, new RegExp(`\\.sig \\.${sig} \\{\\s*color: var\\(--code-${role}\\);`), `api.css .${sig}`);
    assert.match(item, new RegExp(`\\.${name} \\{ color: var\\(--code-${role}\\); \\}`), `ApiItem.astro .${name}`);
  }
});
