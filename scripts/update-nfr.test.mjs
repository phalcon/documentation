import { test } from "node:test";
import assert from "node:assert/strict";
import { escapeCell, fetchComments, formatList } from "./update-nfr.mjs";

test("cells are safe for a Markdown table inside MDX", () => {
  assert.equal(escapeCell("a | b [c] {d} <e> \\f"), "a \\| b \\[c\\] \\{d\\} &lt;e> \\\\f");
});

test("rows are sorted by votes then id, with the first line linked", () => {
  const page = formatList([
    { id: 1, html_url: "https://x/1", body: "Low\r\nmore", reactions: { "+1": 2 } },
    { id: 3, html_url: "https://x/3", body: "High", reactions: { "+1": 10 } },
    { id: 2, html_url: "https://x/2", body: "Also low", reactions: { "+1": 2 } },
    { id: 4, html_url: "https://x/4", body: "None" },
  ]);
  assert.match(page, /^---\ntitle: "New Feature Request List"\n---\n/);
  assert.deepEqual(
    page.split("\n").filter((line) => /^\| \d/.test(line)),
    [
      "| 010 | [High](https://x/3) |",
      "| 002 | [Also low](https://x/2) |",
      "| 002 | [Low](https://x/1) |",
      "| 000 | [None](https://x/4) |",
    ],
  );
});

test("comments are fetched page by page until a short page", async () => {
  const calls = [];
  const fake = async (url) => {
    calls.push(url);
    const page = Number(new URL(url).searchParams.get("page"));
    const size = page === 1 ? 100 : 3;
    return { ok: true, json: async () => Array.from({ length: size }, (_, i) => ({ id: page * 1000 + i })) };
  };
  const comments = await fetchComments(fake);
  assert.equal(comments.length, 103);
  assert.equal(calls.length, 2);
});
