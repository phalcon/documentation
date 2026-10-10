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
 * The attributes are strings. An empty string means "absent", as in
 * ApiItem.astro. `params` is the JSON text of the parameters.
 *
 * @param {{ attrs: Record<string, string | boolean>, children: string }} context
 * @returns {string}
 */
export function apiItemMarkdown({ attrs, children }) {
  const text = (name) => String(attrs[name] ?? "").trim();
  const withDefault = (declaration, value) => (value === "" ? declaration : `${declaration} = ${value}`);
  const words = (...parts) => parts.filter((part) => part !== "").join(" ");

  let declaration;
  if (text("kind") === "constant") {
    declaration = withDefault(words("const", text("type"), text("name")), text("default"));
  } else if (text("kind") === "property") {
    declaration = withDefault(words(text("visibility"), text("type"), `$${text("name")}`), text("default"));
  } else {
    const params = JSON.parse(text("params") || "[]").map((param) =>
      withDefault(words(param.type ?? "", `$${param.name}`), param.default ?? ""),
    );
    const returnType = text("returnType") === "" ? "" : `: ${text("returnType")}`;
    declaration = `${words(text("visibility"), text("name"))}(${params.join(", ")})${returnType}`;
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
