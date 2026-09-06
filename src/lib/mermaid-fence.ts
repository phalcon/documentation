// Nimbus hast plugin: turn Shiki-rendered ```mermaid fences back into the
// `<pre class="mermaid">` form the mermaid client script (src/scripts/mermaid.ts)
// renders. The fence arrives here already highlighted and wrapped in
// `<figure class="nb-code-figure" data-nb-lang="mermaid">`; we recover the
// plain source text from the nested text nodes and replace the whole figure.
//
// Shape follows nimbus's own plugins (see tableScroll in
// @cloudflare/nimbus-docs/markdown): { name, element: { filter, visit } }.
import type { tableScroll } from "@cloudflare/nimbus-docs/markdown";

// The framework's plugin type (HastPluginDefinition) lives in the transitive
// `satteri` package, which pnpm's strict layout can't type-import directly —
// borrow it from a framework plugin factory instead.
type HastPlugin = ReturnType<typeof tableScroll>;

// Minimal structural hast types — `hast` is a transitive dependency and not
// resolvable as a type import under pnpm's strict node_modules layout.
type HastNode = {
  type: string;
  value?: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

function textOf(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  return (node.children ?? [])
    .map((c) => (c.type === "text" || c.type === "element" ? textOf(c) : ""))
    .join("");
}

export function mermaidFence(): HastPlugin {
  return {
    name: "phalcon:mermaid-fence",
    element: {
      filter: ["figure"],
      visit(node: HastNode): HastNode | undefined {
        const props = node.properties ?? {};
        const lang = props["dataNbLang"] ?? props["data-nb-lang"];
        if (lang !== "mermaid") return undefined;
        return {
          type: "element",
          tagName: "pre",
          properties: { className: ["mermaid"] },
          children: [{ type: "text", value: textOf(node).trim() }],
        };
      },
    },
  } as unknown as HastPlugin;
}
