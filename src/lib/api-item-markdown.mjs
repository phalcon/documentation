import { readApiItem } from "./api-item.mjs";

/**
 * The Markdown form of one `<ApiItem>` row of an API page: a constant, a
 * property or a method of a summary (src/components/api/ApiItem.astro).
 *
 * nimbus drops a component that has no Markdown renderer, and it converts a
 * component tag in the output of a renderer again. Thus each row becomes one
 * list item: the declaration in a code span, then the description.
 *
 *   - `public getActiveAccess(): string|null` — Returns the access …
 *   - `protected string|null $documentTitle = ""`
 *   - `const string OPTION_CLOSE = "</option>"`
 *
 * The attributes are strings, and `params` is the JSON text of the parameters.
 * readApiItem (api-item.mjs) reads them, as for ApiItem.astro: an empty string
 * means "absent".
 *
 * @param {{ attrs: Record<string, string | boolean>, children: string }} context
 * @returns {string}
 */
export function apiItemMarkdown({ attrs, children }) {
  const row = readApiItem(attrs);
  const withDefault = (declaration, value) => (value === "" ? declaration : `${declaration} = ${value}`);
  const words = (...parts) => parts.filter((part) => part !== "").join(" ");

  let declaration;
  if (row.kind === "constant") {
    declaration = withDefault(words("const", row.type, row.name), row.default);
  } else if (row.kind === "property") {
    declaration = withDefault(words(row.visibility, row.type, `$${row.name}`), row.default);
  } else {
    const params = row.params.map((param) => withDefault(words(param.type, `$${param.name}`), param.default));
    const returnType = row.returnType === "" ? "" : `: ${row.returnType}`;
    declaration = `${words(row.visibility, row.name)}(${params.join(", ")})${returnType}`;
  }

  // A code span needs a run of backticks that is longer than each run in it.
  const longest = Math.max(0, ...(declaration.match(/`+/g) ?? []).map((run) => run.length));
  const fence = "`".repeat(longest + 1);
  const pad = declaration.startsWith("`") || declaration.endsWith("`") ? " " : "";
  const code = `${fence}${pad}${declaration}${pad}${fence}`;

  // The lines after the first line of the description stay in the list item.
  const description = children.trim().replace(/\n(?=.)/g, "\n  ");

  return description === "" ? `- ${code}` : `- ${code} — ${description}`;
}
