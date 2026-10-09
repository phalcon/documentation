/**
 * The social cards of the docs: one card for each page name, the same for every
 * version (/og/<slug>.png), and the site card (/og.png). The layout is the one of
 * the social cards of phalcon/assets (resources/og/card.html).
 * scripts/render-og-cards.mjs renders them into dist/ after the build, and
 * scripts/check-og.mjs checks that every page has its card.
 */

/** The text of the cards that is the same on each card. */
export const KICKER = "Phalcon · Documentation";
export const PILLS = ["docs.phalcon.io", "v5 · v6"];
export const TEXT = "The official documentation of the Phalcon Framework.";

/** The site card: the content of the GitHub card of this repository (cards.json of phalcon/assets). */
export const SITE_CARD = {
  address: "github.com/phalcon/documentation",
  file: "og.png",
  tagline: "learn and build with Phalcon.",
  title: "documentation",
};

/**
 * The page id of Astro for a file of a version folder: the path with no
 * extension; the index of a folder is the folder (`api/index.mdx` is `api`).
 *
 * @param {string} file The path of the file in its version folder.
 * @returns {string}
 */
export function pageSlug(file) {
  return file.replace(/\.mdx?$/, "").replace(/\/index$/, "");
}

/** The YAML escapes of a string in double quotes that are not the character itself. */
const ESCAPES = {
  0: "\0", L: " ", N: "\u0085", P: " ", _: " ", a: "\x07", b: "\b", e: "\x1b", f: "\f", n: "\n",
  r: "\r", t: "\t", v: "\v",
};

/**
 * A YAML scalar on one line: in double quotes (with its escapes), in single
 * quotes (`''` is a quote), or plain. A comment after it goes. Null when the
 * quotes do not close.
 *
 * @param {string} text
 * @returns {string | null}
 */
function yamlScalar(text) {
  if (text.startsWith('"')) {
    const inner = /^"((?:[^"\\]|\\.)*)"(?:\s+#.*)?$/.exec(text)?.[1];

    return inner === undefined
      ? null
      : inner.replace(/\\(x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8}|.)/g, (_match, code) => (
        /^[xuU]./.test(code) ? String.fromCodePoint(parseInt(code.slice(1), 16)) : ESCAPES[code] ?? code
      ));
  }

  if (text.startsWith("'")) {
    const inner = /^'((?:[^']|'')*)'(?:\s+#.*)?$/.exec(text)?.[1];

    return inner === undefined ? null : inner.replace(/''/g, "'");
  }

  return text.replace(/\s+#.*$/, "");
}

/**
 * The title of a page: the `title` of its front matter (a YAML scalar on one
 * line, in double or single quotes or plain), with no Markdown bold. Null when
 * there is none, or when the card list cannot read it.
 *
 * @param {string} source The text of the page file.
 * @returns {string | null}
 */
export function pageTitle(source) {
  const front = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source)?.[1] ?? "";
  const value = /^title:[ \t]*(.*?)[ \t]*\r?$/m.exec(front)?.[1] ?? "";
  const title = value === "" ? null : yamlScalar(value);

  return title === null ? null : title.replace(/\*\*/g, "");
}

/**
 * The text with the characters of HTML escaped.
 *
 * @param {string} text
 * @returns {string}
 */
export function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/**
 * The page of a card: resources/og/card.html with the fields of the card, the
 * tokens and the falcon. A class name can break after each backslash of its
 * namespace.
 *
 * @param {string} template The text of resources/og/card.html.
 * @param {{ address: string, tagline?: string, title: string }} card
 * @param {{ falcon: string, tokens: string }} design The tokens CSS and the falcon as a data URL.
 * @returns {string}
 */
export function cardPage(template, card, { falcon, tokens }) {
  return template
    .replace("{{tokens}}", () => tokens)
    .replace("{{falcon}}", () => falcon)
    .replace("{{kicker}}", () => escapeHtml(KICKER))
    .replace("{{name}}", () => escapeHtml(card.title).replace(/\\/g, "\\<wbr>"))
    .replace("{{tagline}}", () => escapeHtml(card.tagline ?? ""))
    .replace("{{text}}", () => escapeHtml(TEXT))
    .replace("{{pills}}", () => PILLS.map((pill) => `<span class="pill">${escapeHtml(pill)}</span>`).join(""))
    .replace("{{address}}", () => escapeHtml(card.address));
}

/**
 * The page cards: one for each page name. The title and the address come from
 * the stable version when it has the page (/latest/ leads to it), else from the
 * newest version that has it.
 *
 * @param {{ slug: string, title: string, version: string }[]} pages The pages of every version.
 * @param {string[]} order The versions, the newest first.
 * @param {string} stable The stable version.
 * @returns {{ address: string, file: string, title: string }[]} In the order of the files.
 */
export function pageCards(pages, order, stable) {
  const rank = (version) => (version === stable ? -1 : order.indexOf(version));
  const chosen = new Map();

  for (const page of pages) {
    const current = chosen.get(page.slug);

    if (current === undefined || rank(page.version) < rank(current.version)) {
      chosen.set(page.slug, page);
    }
  }

  return [...chosen.values()]
    .map(({ slug, title, version }) => ({
      address: `docs.phalcon.io/${version === stable ? "latest" : version}/${slug}`,
      file: `og/${slug}.png`,
      title,
    }))
    .sort((a, b) => (a.file < b.file ? -1 : 1));
}
