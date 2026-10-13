import { test } from "node:test";
import assert from "node:assert/strict";
import { readApiItem } from "./api-item.mjs";

test("the attributes of nimbus and the props of Astro give the same row", () => {
  const parameters = [
    { type: "Container|null", name: "container", default: "null" },
    { type: "array", name: "options", default: null },
  ];
  const attrs = {
    href: "#adrapplication-__construct",
    visibility: "public",
    name: "__construct",
    returnType: "static",
  };

  assert.deepEqual(readApiItem({ ...attrs, params: JSON.stringify(parameters) }), readApiItem({ ...attrs, params: parameters }));
  assert.deepEqual(readApiItem({ ...attrs, params: parameters }), {
    kind: "",
    href: "#adrapplication-__construct",
    visibility: "public",
    name: "__construct",
    type: "",
    returnType: "static",
    default: "",
    params: [
      { type: "Container|null", name: "container", default: "null" },
      { type: "array", name: "options", default: "" },
    ],
  });
});

test("an empty or a missing attribute is an empty string", () => {
  assert.deepEqual(readApiItem({ kind: "property", name: "container", type: "DiInterface", default: "" }), {
    kind: "property",
    href: "",
    visibility: "",
    name: "container",
    type: "DiInterface",
    returnType: "",
    default: "",
    params: [],
  });
  assert.deepEqual(readApiItem({ name: "run", params: "" }).params, []);
});

test("a parameter default of null or of an empty string is absent", () => {
  const params = [
    { type: "string", name: "first", default: null },
    { type: "string", name: "second", default: "" },
    { type: "string", name: "third" },
  ];

  assert.deepEqual(readApiItem({ params }).params.map((parameter) => parameter.default), ["", "", ""]);
});

test("the values have no whitespace at the start or the end", () => {
  const row = readApiItem({
    kind: " constant ",
    name: " OPTION_CLOSE",
    type: "string ",
    default: ' "</option>" ',
    params: [{ type: " int", name: "type ", default: " self::HTML5 " }],
  });

  assert.equal(row.kind, "constant");
  assert.equal(row.name, "OPTION_CLOSE");
  assert.equal(row.type, "string");
  assert.equal(row.default, '"</option>"');
  assert.deepEqual(row.params, [{ type: "int", name: "type", default: "self::HTML5" }]);
});
