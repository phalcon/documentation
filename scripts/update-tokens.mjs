/**
 * Updates the design files from phalcon/assets: src/styles/tokens.css (from
 * phalcon/css/tokens.css), src/styles/code-theme.json (from
 * phalcon/css/code-theme.json), src/styles/common.css (the shared nav and
 * footer, from phalcon/css/common.css), src/footer.json (the footer links,
 * from phalcon/footer.json) and src/repositories.json (the GitHub stars of the
 * nav, from phalcon/repositories.json). The deploy workflow runs it before the
 * tests and the build. It does not commit: the committed copies are the
 * default.
 *
 *   node scripts/update-tokens.mjs             download the files from assets.phalcon.io
 *   node scripts/update-tokens.mjs --from DIR  read them from DIR (the phalcon folder of phalcon/assets)
 *
 * The checks, the refresh and the star count are the shared design tools of
 * phalcon/assets: src/lib/design-checks.mjs, src/lib/design-refresh.mjs and
 * src/lib/stars.mjs are copies that the deploy workflow gets again first. A
 * file that cannot be read, or that has a problem, keeps its committed copy
 * and prints a GitHub Actions warning.
 */
import { readFileSync } from "node:fs";

import { codeThemeProblems, commonCssProblems, definedCodeRoles, footerProblems, tokensProblems } from "../src/lib/design-checks.mjs";
import { fromArgument, refresh } from "../src/lib/design-refresh.mjs";
import { cphalconStars } from "../src/lib/stars.mjs";
import { usedBySite } from "./token-sources.mjs";

const SOURCE = "https://assets.phalcon.io/phalcon";

await refresh({
  files: [
    {
      copy: "src/styles/tokens.css",
      name: "css/tokens.css",
      problems: (text) => tokensProblems(text, usedBySite()),
    },
    {
      copy: "src/styles/code-theme.json",
      name: "css/code-theme.json",
      problems: (text) => codeThemeProblems(text, definedCodeRoles(readFileSync("src/styles/globals.css", "utf8"))),
    },
    {
      copy: "src/styles/common.css",
      name: "css/common.css",
      problems: (text) => commonCssProblems(text, readFileSync("src/styles/tokens.css", "utf8")),
    },
    {
      copy: "src/footer.json",
      name: "footer.json",
      problems: footerProblems,
    },
    {
      copy: "src/repositories.json",
      name: "repositories.json",
      problems: (text) => (cphalconStars(text) === null ? ["the file has no star count for phalcon/cphalcon"] : []),
    },
  ],
  from: fromArgument(process.argv.slice(2)),
  source: SOURCE,
});
