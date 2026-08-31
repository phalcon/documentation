/**
 * Sidebar tree of one documentation version.
 *
 * nimbus has one global `sidebar.items`; every version of these docs has
 * its own navigation (`src/sidebar/<version>.mjs`, generated from that
 * version's mkdocs.yml). This builds the tree that `Sidebar.astro` and
 * `getPrevNext()` consume from the version's items and the pages that the
 * version really has, so a page that does not exist in the version is not
 * listed.
 */

/**
 * @param {Array} items - Config items: bare slug, `{ label, link }`, or
 *   `{ label, items, collapsed }`.
 * @param {Array<{ entry: { id: string }, title: string, url: string }>} indexed -
 *   Indexed entries of the version's collection.
 * @param {string} currentSlug - Current path without trailing slash.
 * @returns {Array} nimbus `SidebarItem[]`.
 */
export function buildVersionSidebar(items, indexed, currentSlug) {
  const byId = new Map(indexed.map((item) => [item.entry.id, item]));
  const byUrl = new Map(indexed.map((item) => [routeKey(item.url), item]));
  const current = routeKey(currentSlug);
  let order = 0;

  const build = (configItems) => {
    const result = [];
    for (const item of configItems) {
      if (typeof item === "string") {
        const page = byId.get(item);
        if (!page) continue;
        result.push(link(page.title, page.url, current, order++));
      } else if ("items" in item) {
        const children = build(item.items);
        if (children.length === 0) continue;
        result.push({
          type: "group",
          label: item.label,
          order: order++,
          collapsed: item.collapsed,
          children,
        });
      } else if (/^[a-z]+:\/\//i.test(item.link)) {
        result.push({ type: "external", label: item.label, href: item.link, order: order++ });
      } else {
        if (!byUrl.has(routeKey(item.link))) continue;
        result.push(link(item.label, item.link, current, order++));
      }
    }
    return result;
  };

  return build(items);
}

function link(label, href, current, order) {
  return { type: "link", label, href, isCurrent: routeKey(href) === current, order };
}

function routeKey(path) {
  return path.replace(/\/+$/, "") || "/";
}
