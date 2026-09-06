/**
 * The site's URL form: no trailing slash (`trailingSlash: "never"` in
 * astro.config.ts). Every place that receives a URL from outside the site's
 * own routing — the converted MkDocs content, the generated redirect maps,
 * the Pagefind index — passes it through here.
 *
 * `/5.20/logger/` → `/5.20/logger`, `/5.20/logger/#write` → `/5.20/logger#write`.
 * Left alone: the site root, anything with a scheme or protocol-relative
 * (`https:`, `mailto:`, `//cdn…`), in-page anchors, and anything that does
 * not end in a slash.
 *
 * @param {string} href
 * @returns {string}
 */
export function slashlessHref(href) {
  if (href === "/" || href.startsWith("#")) return href;
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) return href;

  const cut = href.search(/[#?]/);
  const path = cut === -1 ? href : href.slice(0, cut);
  const suffix = cut === -1 ? "" : href.slice(cut);
  if (!path.endsWith("/") || path === "/") return href;

  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? `/${suffix}` : `${trimmed}${suffix}`;
}
