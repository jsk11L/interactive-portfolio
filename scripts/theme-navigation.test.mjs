import assert from "node:assert/strict";
import { test } from "node:test";
import { captureReadingPosition, pickNextTheme, restoreReadingPosition } from "../frontend/utils/themeReadingPosition.ts";
import routerOptions from "../frontend/app/router.options.ts";

test("random openings and shuffle can reach every other universe without repeating the last one", () => {
  const themes = ["dearly", "phantom", "bloodborne", "daydream", "animals", "ferment", "redroom", "eva", "edgerunner", "friend"];
  assert.equal(pickNextTheme(themes, undefined, 0), themes[0]);
  assert.equal(pickNextTheme(themes, undefined, .9999), themes.at(-1));
  for (const previous of themes) {
    const results = new Set(Array.from({ length: 9 }, (_, i) => pickNextTheme(themes, previous, (i + .5) / 9)));
    assert.equal(results.size, 9);
    assert.ok(!results.has(previous));
  }
});

test("changing only a universe query never asks the router to jump to a stale hash or the top", () => {
  for (const hash of ["", "#projects"]) {
    assert.equal(routerOptions.scrollBehavior({ path: "/", hash, query: { theme: "ferment" } }, { path: "/", hash, query: { theme: "eva" } }), false);
  }
  assert.deepEqual(routerOptions.scrollBehavior({ path: "/cv", hash: "" }, { path: "/", hash: "" }), { left: 0, top: 0, behavior: "instant" });
});

test("the current project row stays at the same screen position when sections reorder", () => {
  let rows = [
    { id: "intro", top: -1800 },
    { id: "projects", top: -300 },
    { key: "project-jamspace", top: 82 },
    { key: "project-loopmania", top: 210 },
  ];
  const scrolls = [];
  const oldDocument = globalThis.document;
  const oldWindow = globalThis.window;
  globalThis.document = { querySelectorAll: () => rows.map(row => ({ id: row.id || "", dataset: { readingAnchor: row.key }, getBoundingClientRect: () => ({ top: row.top }) })) };
  globalThis.window = { scrollY: 1800, scrollX: 0, scrollTo: value => scrolls.push(value) };
  try {
    const position = captureReadingPosition();
    assert.equal(position.anchor.key, "project-jamspace");
    rows = [{ id: "projects", top: 500 }, { key: "project-jamspace", top: 882 }];
    restoreReadingPosition(position);
    assert.deepEqual(scrolls.at(-1), { left: 0, top: 2600, behavior: "instant" });
    rows = [];
    restoreReadingPosition(position);
    assert.equal(scrolls.at(-1).top, 1800);
    rows = [{ id: "intro", top: 0 }];
    globalThis.window.scrollY = 0;
    const opening = captureReadingPosition();
    restoreReadingPosition(opening);
    assert.equal(scrolls.at(-1).top, 0);
  } finally {
    globalThis.document = oldDocument;
    globalThis.window = oldWindow;
  }
});
