import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(
  new URL("../frontend/.output/public/", import.meta.url),
);
const data = JSON.parse(
  await readFile(
    new URL("../frontend/data/portfolio.json", import.meta.url),
    "utf8",
  ),
);
const routes = [
  "",
  "contact",
  "cv",
  ...data.projects.map((project) => `projects/${project.id}`),
];
let assets = new Set();
for (const route of routes) {
  const html = await readFile(resolve(root, route, "index.html"), "utf8");
  assert.ok(html.includes("Javier"), `${route}: missing rendered content`);
  assert.ok(
    !html.includes("http://backend:8000") &&
      !html.includes("http://localhost:8000"),
    `${route}: backend dependency`,
  );
  for (const match of html.matchAll(
    /(?:src|href)="(\/[^"#?]*)(?:[?#][^"]*)?"/g,
  )) {
    if (!match[1].startsWith("//")) assets.add(match[1]);
  }
}
for (const asset of assets) {
  let path = resolve(root, "." + asset);
  if ((await stat(path)).isDirectory()) path = resolve(path, "index.html");
  assert.ok((await stat(path)).size > 0, `Empty asset: ${asset}`);
}
for (const project of data.projects) {
  for (const image of project.images)
    assert.ok(
      (await stat(resolve(root, "." + image))).size > 0,
      `Missing project art: ${project.id}`,
    );
}
for (const name of [
  "kh2-title",
  "bloodborne-night",
  "animals-factory",
  "ferment-portrait",
  "redroom-curtains",
  "edgerunner-city",
]) {
  assert.ok(
    (await stat(resolve(root, `images/artwork/${name}.webp`))).size > 0,
    `Missing universe art: ${name}`,
  );
}
const universes = await readFile(
  new URL("../frontend/data/universes.ts", import.meta.url),
  "utf8",
);
assert.equal(
  (universes.match(/id: ["'][\w-]+["']/g) || []).length,
  10,
  "The universe registry must contain ten themes",
);
const home = await readFile(resolve(root, "index.html"), "utf8");
for (const project of data.projects)
  assert.ok(home.includes(project.title), `Missing project: ${project.id}`);
assert.ok(
  home.includes("marzo de 2026"),
  "Month-only dates must not shift in the Santiago timezone",
);
const cv = await readFile(resolve(root, "cv/index.html"), "utf8");
for (const experience of data.experiences)
  assert.ok(
    cv.includes(experience.position),
    `Missing CV experience: ${experience.id}`,
  );
console.log(
  `Static verification passed: ${routes.length} pages, ${assets.size} rendered links/assets, ten universes, all project/scene images and CV experiences.`,
);
