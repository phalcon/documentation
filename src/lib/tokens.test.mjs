import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

import { definedTokens, missingTokens, resolveToken, tokensProblems, usedTokens } from "./tokens.mjs";

const css = `/* A comment: --ph-fake: #000000; var(--ph-ghost) */
:root {
  --ph-night-950: #070d0c;
  --ph-dark-bg: var(--ph-night-950);
  --ph-loop-a: var(--ph-loop-b);
  --ph-loop-b: var(--ph-loop-a);
}
`;

test("definedTokens lists the --ph- names that the rule defines", () => {
  assert.deepEqual([...definedTokens(css)].sort(), ["--ph-dark-bg", "--ph-loop-a", "--ph-loop-b", "--ph-night-950"]);
});

test("definedTokens ignores names in a comment", () => {
  assert.ok(!definedTokens(css).has("--ph-fake"));
});

test("usedTokens finds var() references, also with spaces and a fallback", () => {
  const text = "a { color: var(--ph-one); background: var( --ph-two , red); }";

  assert.deepEqual([...usedTokens(text)].sort(), ["--ph-one", "--ph-two"]);
});

test("usedTokens ignores references in a comment", () => {
  assert.deepEqual([...usedTokens(css)].sort(), ["--ph-loop-a", "--ph-loop-b", "--ph-night-950"]);
});

test("missingTokens lists the used names that are not defined, sorted", () => {
  assert.deepEqual(missingTokens(css, ["--ph-zeta", "--ph-dark-bg", "--ph-alpha"]), ["--ph-alpha", "--ph-zeta"]);
});

test("resolveToken follows var() references to the value", () => {
  assert.equal(resolveToken(css, "--ph-dark-bg"), "#070d0c");
  assert.equal(resolveToken(css, "--ph-night-950"), "#070d0c");
});

test("resolveToken returns null for an unknown name and for a loop", () => {
  assert.equal(resolveToken(css, "--ph-nope"), null);
  assert.equal(resolveToken(css, "--ph-loop-a"), null);
});

test("tokensProblems accepts a file that defines every used token", () => {
  assert.deepEqual(tokensProblems(css, ["--ph-dark-bg"]), []);
});

test("tokensProblems names each used token that is missing", () => {
  assert.deepEqual(tokensProblems(css, ["--ph-dark-bg", "--ph-light-bg"]), ["--ph-light-bg is missing"]);
});

test("tokensProblems names a reference that the file does not define", () => {
  const file = ":root { --ph-dark-bg: var(--ph-night-951); --ph-light-bg: #f7faf8; }";

  assert.deepEqual(tokensProblems(file, ["--ph-light-bg"]), ["--ph-night-951 is missing"]);
});

test("tokensProblems names each used token that has no value", () => {
  assert.deepEqual(tokensProblems(css, ["--ph-dark-bg", "--ph-loop-a"]), ["--ph-loop-a has no value"]);
});

test("tokensProblems rejects a file that is not a tokens file", () => {
  const page = "<!DOCTYPE html><html><body>Not found</body></html>";

  assert.deepEqual(tokensProblems(page, ["--ph-dark-bg"]), ["the file has no :root rule"]);
  assert.deepEqual(tokensProblems("", ["--ph-dark-bg"]), ["the file has no :root rule"]);
});

test("tokensProblems accepts the value forms of a tokens file: hex, rgb(), var() and a font stack", () => {
  const file = ':root {\n  --ph-a: #070d0c;\n  --ph-b: rgb(15 158 134 / 0.35);\n  --ph-c: var(--ph-a);\n  --ph-d: ui-monospace, "Liberation Mono",\n    monospace;\n}\n';

  assert.deepEqual(tokensProblems(file, ["--ph-b", "--ph-c", "--ph-d"]), []);
});

test("tokensProblems rejects a value that is not a color, a var() or a font stack", () => {
  // A downloaded file goes into every page: a url() or an expression must not come in with it.
  const file = ":root { --ph-a: #070d0c; --ph-b: url(https://example.com/t.png); }";

  assert.deepEqual(tokensProblems(file, ["--ph-a"]), [
    "--ph-b: url(https://example.com/t.png) is not a token with a color, a var() or a font stack",
  ]);
});

test("tokensProblems rejects a declaration that is not a --ph- token", () => {
  const file = ":root { --ph-a: #070d0c; color: red; }";

  assert.deepEqual(tokensProblems(file, ["--ph-a"]), ["color: red is not a token with a color, a var() or a font stack"]);
});

test("tokensProblems rejects a file with more than the :root rule, and a file that is cut", () => {
  for (const file of [
    ":root { --ph-a: #070d0c; }\nbody { display: none; }",
    '@import url("https://example.com/x.css");\n:root { --ph-a: #070d0c; }',
    ":root { --ph-a: #070d0c; --ph-b: #f7f",
  ]) {
    assert.deepEqual(tokensProblems(file, ["--ph-a"]), ["the file is not a single :root rule"], file);
  }
});

test("the committed copy is a tokens file: its backgrounds and syntax colors have a value", () => {
  // Only the shape: the values change in phalcon/assets, and the deploy must accept a new palette.
  const copy = readFileSync(new URL("../styles/tokens.css", import.meta.url), "utf8");

  for (const name of ["--ph-dark-bg", "--ph-light-bg", "--ph-dark-syntax-keyword"]) {
    assert.notEqual(resolveToken(copy, name), null, name);
  }

  assert.deepEqual(tokensProblems(copy, []), []);
});
