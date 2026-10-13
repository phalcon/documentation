/**
 * The values of one `<ApiItem>` row of an API page, read once for the HTML row
 * (src/components/api/ApiItem.astro) and the Markdown row (api-item-markdown.mjs).
 *
 * Astro gives `params` as an array (JSX reads the expression); nimbus gives
 * the JSON text of it. Each value is a string with no whitespace at the start
 * or the end. An empty string means "absent": the templates of quill cannot
 * leave an attribute out, and a parameter with no default has `null`.
 *
 * @typedef {{ type: string, name: string, default: string }} ApiParameter
 * @typedef {{
 *   kind: string, href: string, visibility: string, name: string, type: string,
 *   returnType: string, default: string, params: ApiParameter[]
 * }} ApiRow
 *
 * @param {Record<string, unknown>} attrs
 * @returns {ApiRow}
 */
export function readApiItem(attrs) {
  const text = (value) => String(value ?? "").trim();
  const params = typeof attrs.params === "string" ? JSON.parse(attrs.params.trim() || "[]") : (attrs.params ?? []);

  return {
    kind: text(attrs.kind),
    href: text(attrs.href),
    visibility: text(attrs.visibility),
    name: text(attrs.name),
    type: text(attrs.type),
    returnType: text(attrs.returnType),
    default: text(attrs.default),
    params: params.map((param) => ({ type: text(param.type), name: text(param.name), default: text(param.default) })),
  };
}
