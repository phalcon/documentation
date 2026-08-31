import { test } from "node:test";
import assert from "node:assert/strict";
import { buildVersionSidebar } from "./version-sidebar.mjs";

const indexed = [
  { entry: { id: "introduction" }, title: "Introduction", url: "/5.9/introduction/" },
  { entry: { id: "acl" }, title: "Access Control Lists (ACL)", url: "/5.9/acl/" },
  { entry: { id: "application-micro" }, title: "Micro Applications", url: "/5.9/application-micro/" },
];

const items = [
  { label: "Home", collapsed: true, items: ["introduction", "quill"] },
  {
    label: "Core",
    collapsed: true,
    items: [
      { label: "Micro", link: "/5.9/application-micro/" },
      { label: "ADR", collapsed: true, items: ["adr", "adr-actions"] },
      { label: "Datamapper", link: "/5.9/datamapper/" },
    ],
  },
  "acl",
  { label: "Blog", link: "https://blog.phalcon.io/" },
];

test("pages the version does not have are dropped, empty groups too", () => {
  const tree = buildVersionSidebar(items, indexed, "/5.9/acl");
  assert.deepEqual(
    tree.map((item) => [item.type, item.label]),
    [["group", "Home"], ["group", "Core"], ["link", "Access Control Lists (ACL)"], ["external", "Blog"]],
  );
  assert.deepEqual(tree[0].children.map((c) => c.label), ["Introduction"]);
  assert.deepEqual(tree[1].children.map((c) => [c.type, c.label]), [["link", "Micro"]]);
});

test("the current page is marked and groups keep their collapsed flag", () => {
  const tree = buildVersionSidebar(items, indexed, "/5.9/application-micro/");
  assert.equal(tree[1].collapsed, true);
  assert.equal(tree[1].children[0].isCurrent, true);
  assert.equal(tree[2].isCurrent, false);
  assert.equal(tree[2].href, "/5.9/acl/");
});
