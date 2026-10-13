// Root /llms.txt: the index for AI agents. It has one link for each version
// to the index of that version (/<version>/llms.txt, [section]/llms.txt.ts).
// nimbus copies this file to /index.md, because the site has no root page.
//
// It lists only the version collections, on purpose: the primary `docs`
// collection is empty and the site has no other collection. A new collection
// that is not a version gets its own /<slug>/llms.txt, but it needs its own
// line here too. There is no /llms-full.txt, on purpose: the index of each
// version and the Markdown copy of each page replace it.
import { getIndexedTopLevel } from "@cloudflare/nimbus-docs";
import { config } from "virtual:nimbus/config";
import { indexedVersions, llmsVersions } from "../lib/site.mjs";
import { versions } from "../versions.generated.mjs";

export const prerender = true;

export async function GET() {
  const { groups } = await getIndexedTopLevel();

  const lines = [
    `# ${config.title}`,
    "",
    `> ${config.description ?? "Documentation index for AI agents."}`,
    "",
    "Each version of the documentation has its own index of its pages.",
    "",
    "## Versions",
    "",
    ...llmsVersions(indexedVersions(versions, groups)).map(
      ({ version, label }) => `- [${label}](${new URL(`/${version}/llms.txt`, config.site).href})`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
