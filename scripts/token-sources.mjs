/**
 * The design tokens that the docs' source uses. The source tests and
 * scripts/update-tokens.mjs use it: a tokens file must define all of them.
 */
import { readdirSync, readFileSync } from "node:fs";

import { usedTokens } from "../src/lib/design-checks.mjs";

const root = new URL("../", import.meta.url);

/** The files of src/ that are not sources: the tokens file, and the colors outside CSS (spec Decision 18). */
const OUTSIDE = new Set(["src/scripts/mermaid.ts", "src/styles/tokens.css"]);

/** The files that resources/nimbus/convert.py writes (AGENT.md). Their link anchors (#add) are not colors. */
const GENERATED = /^src\/(?:content\.config\.ts|versions\.generated\.mjs|sidebar\/|redirects\/|pages\/\d+\.\d+\/)/;

/**
 * The source files that can use a token or type a color: the stylesheets,
 * components, layouts, pages and modules in src/. Tests, the content, the
 * generated files and the files in OUTSIDE are not sources.
 *
 * @returns {string[]} paths relative to the repository root, sorted
 */
export function sourceFiles() {
  return readdirSync(new URL("src/", root), { recursive: true })
    .filter((file) => /\.(astro|css|mjs|ts)$/.test(file))
    .filter((file) => !file.endsWith(".test.mjs") && !file.startsWith("content/"))
    .map((file) => `src/${file}`)
    .filter((file) => !OUTSIDE.has(file) && !GENERATED.test(file))
    .sort();
}

/**
 * Every --ph- token that a source file uses in var(), or names in quotes (a
 * component can read a token by its name).
 *
 * @returns {Set<string>}
 */
export function usedBySite() {
  return new Set(
    sourceFiles().flatMap((file) => {
      const text = readFileSync(new URL(file, root), "utf8");
      const named = [...text.matchAll(/['"](--ph-[a-z0-9-]+)['"]/g)].map((match) => match[1]);

      return [...usedTokens(text), ...named];
    }),
  );
}
