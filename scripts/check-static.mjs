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
    html.includes('lang="en"'),
    `${route}: initial language must be English`,
  );
  assert.ok(
    html.includes("Change language / Cambiar idioma"),
    `${route}: floating language control missing`,
  );
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
  "ferment-perspective-v3",
  "javier-manga-v3",
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
assert.ok(home.includes('id="skills"'), "Home needs a prominent skills section");
assert.ok(home.includes('class="reading-world"'), "The universe treatment must continue below the title scene");
assert.ok(home.includes('class="universe-shuffle"'), "Random universe needs a direct button beside the palette");
assert.ok(home.includes('class="home-summary content-shell"'), "Home needs a short professional introduction");
assert.ok(home.indexOf('class="home-summary') < home.indexOf('id="skills"'), "The introduction must precede skills");
assert.ok(home.indexOf('id="skills"') < home.indexOf('class="portfolio-composition'), "Skills must precede the longer portfolio composition");
assert.ok(!home.includes('class="profile-intro"'), "Do not repeat the long introduction on home");
const { technologyIcons } = await import("../frontend/data/technologyIcons.ts");
for (const name of data.skills.filter(s => s.category !== "Habilidades Blandas").flatMap(s => s.items)) {
  assert.ok(technologyIcons[name], `Missing skill logo mapping: ${name}`);
  assert.ok(home.includes(`/images/technologies/${technologyIcons[name]}.svg`), `Missing visible skill icon: ${name}`);
}
for (const slug of new Set(Object.values(technologyIcons))) {
  const svg = await readFile(resolve(root, `images/technologies/${slug}.svg`), "utf8");
  assert.ok(svg.includes("<svg"), `Invalid technology SVG: ${slug}`);
  assert.ok(!/<script|<foreignObject|onload=/i.test(svg), `Unsafe technology SVG: ${slug}`);
}
for (const project of data.projects) {
  assert.equal(project.images[0], `/images/projects/marks/${project.id}.svg`);
  const html = await readFile(resolve(root, `projects/${project.id}/index.html`), "utf8");
  assert.ok(html.includes(`identity-${project.id}`), `Project identity missing: ${project.id}`);
  assert.ok(html.includes('class="detail-highlights"'), `Detailed project evidence missing: ${project.id}`);
}
for (const project of data.projects)
  assert.ok(home.includes(project.title), `Missing project: ${project.id}`);
assert.ok(
  home.includes("March 2026"),
  "Month-only dates must not shift in the Santiago timezone",
);
const cv = await readFile(resolve(root, "cv/index.html"), "utf8");
const englishPositions = [
  "Programming Assistant · SimulaPUCV",
  "Research Assistant",
  "Teaching Assistant",
  "Security Guard · Monitoring Center",
];
for (const position of englishPositions)
  assert.ok(cv.includes(position), `Missing CV experience: ${position}`);
const { compositions } = await import("../frontend/data/compositions.ts");
assert.equal(
  new Set(Object.values(compositions).map((item) => item.layout)).size,
  10,
  "Each theme needs a distinct composition",
);
for (const item of Object.values(compositions)) {
  assert.equal(item.catalog, "record", "Every universe must start with the project list");
  assert.deepEqual(
    [...item.order].sort(),
    ["about", "experience", "projects"],
    "Each composition must retain the complete CV sections",
  );
  assert.ok(["record", "gallery"].includes(item.catalog));
}
for (const theme of Object.keys(compositions)) {
  const svg = await readFile(resolve(root, `images/reading/${theme}.svg`), "utf8");
  assert.ok(svg.includes("<svg"), `Missing reading ornament: ${theme}`);
  assert.ok(!/<script|<foreignObject|onload=/i.test(svg), `Unsafe reading ornament: ${theme}`);
}
assert.ok((await readFile(resolve(root, "images/cursors/friend-eye.svg"), "utf8")).includes('<svg'), "Manga cursor missing");
assert.ok((await stat(resolve(root, "images/artwork/eva-hangar-v5.webp"))).size > 0, "Evangelion backdrop missing");
for (const route of routes) {
  const html = await readFile(resolve(root, route, "index.html"), "utf8");
  assert.ok(!html.includes("✳"), `${route}: unexplained asterisk decoration`);
  assert.ok(!/[—–]/u.test(html), `${route}: long dash remains in generated content`);
}
assert.ok(
  (await stat(resolve(root, "images/artwork/candle-flame-v3.png"))).size > 0,
  "Photographic flame missing",
);
console.log(
  `Static verification passed: ${routes.length} pages, ${assets.size} rendered links/assets, ten universes, all project/scene images and CV experiences.`,
);
