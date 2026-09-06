import { test } from "node:test";
import assert from "node:assert/strict";
import { slashlessHref } from "./slashless-href.mjs";

test("the trailing slash comes off an internal path", () => {
  assert.equal(slashlessHref("/5.20/logger/"), "/5.20/logger");
  assert.equal(slashlessHref("/5.20/api/phalcon_logger/"), "/5.20/api/phalcon_logger");
  assert.equal(slashlessHref("/5.20/logger"), "/5.20/logger");
});

test("a hash or a query keeps its place after the path", () => {
  assert.equal(slashlessHref("/5.20/logger/#write"), "/5.20/logger#write");
  assert.equal(slashlessHref("/5.20/logger/?q=1"), "/5.20/logger?q=1");
  assert.equal(slashlessHref("#write"), "#write");
});

test("what is not an internal path is left alone", () => {
  assert.equal(slashlessHref("/"), "/");
  assert.equal(slashlessHref("https://phalcon.io/"), "https://phalcon.io/");
  assert.equal(slashlessHref("mailto:team@phalcon.io"), "mailto:team@phalcon.io");
  assert.equal(slashlessHref("//cdn.example.com/x/"), "//cdn.example.com/x/");
  assert.equal(slashlessHref("/assets/images/falcon.svg"), "/assets/images/falcon.svg");
});
