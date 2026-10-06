import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

import { definedTokens, missingTokens } from "../src/lib/tokens.mjs";
import { sourceFiles, usedBySite } from "./token-sources.mjs";

const root = new URL("../", import.meta.url);
const globals = readFileSync(new URL("src/styles/globals.css", root), "utf8");

/** The declarations of the first rule with this exact selector at the start of a line. */
const block = (css, selector) => {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  return new RegExp(`(?:^|\\n)${escaped}\\s*\\{([^}]*)\\}`).exec(css)?.[1] ?? "";
};

/** The --nb- colors and the code background of one mode, as the table of spec Part 4 maps them. */
const modeColors = (mode) => {
  const role = (name) => `var(--ph-${mode}-${name})`;
  // No dark tone role is a hover surface (spec Decision 16).
  const hover = mode === "light" ? role("bg-alt") : "var(--ph-surface-800)";
  const tint =
    mode === "light"
      ? "color-mix(in srgb, var(--ph-light-accent) 9%, var(--ph-light-bg))"
      : "color-mix(in srgb, var(--ph-dark-accent) 14%, transparent)";
  const status = ["danger", "info", "success", "warning"].flatMap((name) => [
    [`--nb-${name}`, role(name)],
    [`--nb-${name}-foreground`, role(name)],
    [`--nb-${name}-muted`, role(`${name}-bg`)],
  ]);

  return [
    ["--code-bg", role("code-bg")],
    ["--nb-accent", hover],
    ["--nb-background", role("bg")],
    ["--nb-border", role("border")],
    ["--nb-border-strong", role("border-strong")],
    ["--nb-card", role("surface")],
    ["--nb-foreground", role("text")],
    ["--nb-muted", hover],
    ["--nb-muted-foreground", role("muted")],
    ["--nb-primary", role("accent")],
    ["--nb-primary-foreground", role("accent-contrast")],
    ["--nb-primary-hover", role("accent-hover")],
    ["--nb-primary-muted", tint],
    ["--nb-ring", role("ring")],
    ["--nb-selected", role("border-strong")],
    ...status,
  ];
};

test("the source scan covers the stylesheets, components, layouts and pages, not tests, content, the tokens file or the files of Decision 18", () => {
  // A token that only a component uses must count as used.
  const files = sourceFiles();

  for (const file of ["src/components/api/ApiItem.astro", "src/layouts/BaseLayout.astro", "src/pages/404.astro", "src/styles/api.css", "src/styles/globals.css"]) {
    assert.ok(files.includes(file), file);
  }

  for (const file of ["src/pages/og/_og-card-config.ts", "src/scripts/mermaid.ts", "src/styles/tokens.css"]) {
    assert.ok(!files.includes(file), file);
  }

  assert.ok(!files.some((file) => file.endsWith(".test.mjs") || file.startsWith("src/content/")));
});

test("the source scan leaves out the generated files: a link anchor in them is not a color", () => {
  // resources/nimbus/convert.py writes them (AGENT.md). An anchor such as #add in a sidebar must not fail a test.
  const files = sourceFiles();

  for (const file of ["src/content.config.ts", "src/pages/5.22/[...slug].astro", "src/redirects/5.22.mjs", "src/sidebar/5.22.mjs", "src/versions.generated.mjs"]) {
    assert.ok(!files.includes(file), file);
  }

  assert.ok(files.includes("src/pages/[...slug].astro"), "src/pages/[...slug].astro");
});

test("the tokens file defines every token that the docs use", () => {
  const tokens = readFileSync(new URL("src/styles/tokens.css", root), "utf8");

  assert.deepEqual(missingTokens(tokens, usedBySite()), []);
});

test("globals.css defines no --ph- token of its own", () => {
  // The --ph- names belong to the tokens file (phalcon/assets).
  assert.deepEqual([...definedTokens(globals)], []);
});

test("globals.css takes the --nb- colors of each mode from the tokens", () => {
  for (const [selector, mode] of [[":root", "light"], ['[data-mode="dark"]', "dark"]]) {
    const declarations = block(globals, selector);

    for (const [name, value] of modeColors(mode)) {
      assert.ok(declarations.includes(`${name}: ${value};`), `${selector} ${name}: ${value}`);
    }
  }

  assert.ok(block(globals, ":root").includes("--nb-font-sans: var(--ph-font-sans);"), "--nb-font-sans");
  assert.ok(block(globals, ":root").includes("--nb-font-mono: var(--ph-font-mono);"), "--nb-font-mono");
});

test("no source types a color", () => {
  // Colors come from src/styles/tokens.css (phalcon/assets), so a palette change is made once. A color of
  // Tailwind's palette (bg-gray-500) counts too; its black and white follow the tokens (see the next test).
  const color =
    /#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch)\(|\bcolor\(|\b(?:bg|border|caret|decoration|divide|fill|from|outline|placeholder|ring|shadow|stroke|text|to|via)-(?:amber|blue|cyan|emerald|fuchsia|gray|green|indigo|lime|neutral|orange|pink|purple|red|rose|sky|slate|stone|teal|violet|yellow|zinc)-\d{2,3}\b/g;
  const typed = sourceFiles().flatMap((file) =>
    readFileSync(new URL(file, root), "utf8")
      .split("\n")
      .flatMap((line, index) => [...line.matchAll(color)].map((match) => `${file}:${index + 1} ${match[0]}`)),
  );

  assert.deepEqual(typed, []);
});

test("the Tailwind black and white take their values from the tokens", () => {
  // bg-black/40 (the dialog backdrop) and text-white (a button) use Tailwind's palette, unless @theme maps them.
  const theme = /@theme\s*\{([^}]*)\}/.exec(globals)?.[1] ?? "";

  assert.match(theme, /--color-black:\s*var\(--ph-night-950\);/);
  assert.match(theme, /--color-white:\s*var\(--ph-white\);/);
});

test("the deploy workflow gets the design files before the tests", () => {
  // The tests and the build must see the files that the deploy publishes.
  const workflow = readFileSync(new URL(".github/workflows/deploy-documents.yml", root), "utf8");
  const step = workflow.indexOf("run: node scripts/update-tokens.mjs");

  assert.ok(step > 0, "the step is missing");
  assert.ok(step < workflow.indexOf("run: pnpm test"), "the step must come before the tests");
});
