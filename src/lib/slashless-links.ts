// Nimbus hast plugin: drop the trailing slash from internal links in the
// rendered body, so a page's own prose points at the same slashless URLs
// the chrome does (`trailingSlash: "never"` in astro.config.ts, plus the
// `toBrowserHref` patch in patches/ for the sidebar, breadcrumbs,
// pagination and canonical).
//
// The content keeps its MkDocs-era `/5.20/logger/` hrefs — they come from
// resources/nimbus/convert.py and are regenerated whenever a version is
// converted, so rewriting them in place would not survive the next run.
// Normalizing here is the one place that does.
//
// Shape follows nimbus's own plugins (see tableScroll in
// @cloudflare/nimbus-docs/markdown): { name, element: { filter, visit } }.
import type { tableScroll } from "@cloudflare/nimbus-docs/markdown";
import { slashlessHref } from "./slashless-href.mjs";

// The framework's plugin type (HastPluginDefinition) lives in the transitive
// `satteri` package, which pnpm's strict layout can't type-import directly —
// borrow it from a framework plugin factory instead.
type HastPlugin = ReturnType<typeof tableScroll>;

type HastNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

export function slashlessLinks(): HastPlugin {
  return {
    name: "phalcon:slashless-links",
    element: {
      filter: ["a"],
      visit(node: HastNode): HastNode | undefined {
        const href = node.properties?.["href"];
        if (typeof href !== "string") return undefined;
        const next = slashlessHref(href);
        if (next === href) return undefined;
        return { ...node, properties: { ...node.properties, href: next } };
      },
    },
  } as unknown as HastPlugin;
}
