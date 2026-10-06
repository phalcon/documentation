/**
 * Updates the design files from phalcon/assets: src/styles/tokens.css (from
 * phalcon/css/tokens.css) and src/styles/code-theme.json (from
 * phalcon/css/code-theme.json). The deploy workflow runs it before the tests
 * and the build. It does not commit: the committed copies are the default.
 *
 *   node scripts/update-tokens.mjs             download the files from assets.phalcon.io
 *   node scripts/update-tokens.mjs --from DIR  read DIR/tokens.css and DIR/code-theme.json instead
 *
 * The checks and the refresh are the shared design tools of phalcon/assets:
 * src/lib/design-checks.mjs and src/lib/design-refresh.mjs are copies that the
 * deploy workflow gets again first. A file that cannot be read, or that has a
 * problem, keeps its committed copy and prints a GitHub Actions warning.
 */
import { readFileSync } from "node:fs";

import { codeThemeProblems, definedCodeRoles, tokensProblems } from "../src/lib/design-checks.mjs";
import { fromArgument, refresh } from "../src/lib/design-refresh.mjs";
import { usedBySite } from "./token-sources.mjs";

const SOURCE = "https://assets.phalcon.io/phalcon/css";

await refresh({
  files: [
    {
      copy: "src/styles/tokens.css",
      name: "tokens.css",
      problems: (text) => tokensProblems(text, usedBySite()),
    },
    {
      copy: "src/styles/code-theme.json",
      name: "code-theme.json",
      problems: (text) => codeThemeProblems(text, definedCodeRoles(readFileSync("src/styles/globals.css", "utf8"))),
    },
  ],
  from: fromArgument(process.argv.slice(2)),
  source: SOURCE,
});
