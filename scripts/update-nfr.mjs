/**
 * Refresh the "New Feature Request List" page of every version from the
 * reactions on the comments of cphalcon issue #14608.
 *
 *   pnpm run update-nfr          (GITHUB_TOKEN raises the API rate limit)
 *
 * Each comment becomes one table row: its 👍 count and its first line,
 * linked to the comment. Rows are sorted by votes, then by comment id.
 */
import { existsSync, writeFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";
import { versions } from "../src/versions.generated.mjs";

const COMMENTS_URL = "https://api.github.com/repos/phalcon/cphalcon/issues/14608/comments";

/** Escape a comment line for a Markdown table cell inside MDX. */
export function escapeCell(text) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/\|/g, "\\|")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/[{}]/g, (brace) => "\\" + brace)
    .replace(/</g, "&lt;");
}

/**
 * @param {Array<{ id: number, html_url: string, body: string, reactions?: { "+1"?: number } }>} comments
 * @returns {string} The MDX page.
 */
export function formatList(comments) {
  const rows = comments
    .map((comment) => {
      const votes = Number(comment.reactions?.["+1"] ?? 0);
      const line = (comment.body ?? "").split("\n")[0].replace(/\r/g, "");
      return { votes, id: comment.id, cell: `[${escapeCell(line)}](${comment.html_url})` };
    })
    .sort((a, b) => b.votes - a.votes || b.id - a.id);
  return [
    "---",
    'title: "New Feature Request List"',
    "---",
    "",
    "| Votes  | Description             |",
    "|--------|-------------------------|",
    ...rows.map((row) => `| ${String(row.votes).padStart(3, "0")} | ${row.cell} |`),
    "",
  ].join("\n");
}

export async function fetchComments(fetchImpl = fetch) {
  const headers = {
    Accept: "application/vnd.github.squirrel-girl-preview+json",
    "User-Agent": "Phalcon Agent",
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const comments = [];
  for (let page = 1; ; page++) {
    const response = await fetchImpl(`${COMMENTS_URL}?per_page=100&page=${page}`, { headers });
    if (!response.ok) throw new Error(`GitHub API: ${response.status} ${response.statusText}`);
    const data = await response.json();
    if (!Array.isArray(data)) break;
    comments.push(...data);
    console.log(`Got page ${page}`);
    if (data.length < 100) break;
  }
  return comments;
}

async function main() {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const comments = await fetchComments();
  const page = formatList(comments);
  // Every version that has the page gets the same, current list.
  for (const version of versions) {
    const target = join(root, "src", "content", `docs-${version}`, "new-feature-request-list.mdx");
    if (!existsSync(target)) continue;
    writeFileSync(target, page, "utf8");
    console.log(`Wrote ${comments.length} requests to ${target}`);
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
