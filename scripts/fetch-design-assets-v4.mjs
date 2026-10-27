// Refresh only the public, reviewed design assets used by this portfolio.
import { mkdir, writeFile } from "node:fs/promises";
const icons = ["typescript", "go", "python", "c", "csharp", "cplusplus", "java", "matlab", "react", "vuejs", "nuxtjs", "angular", "nextjs", "nodejs", "nestjs", "fastapi", "postgresql", "mongodb", "supabase", "docker", "git", "github", "unity", "tailwindcss", "javascript", "sqlite", "prisma", "capacitor", "pandas", "matplotlib", "discordjs", "gradle"];
const root = new URL("../frontend/public/images/technologies/", import.meta.url);
await mkdir(root, { recursive: true });
for (let offset = 0; offset < icons.length; offset += 6) {
  await Promise.all(icons.slice(offset, offset + 6).map(async name => {
    const base = `https://raw.githubusercontent.com/devicons/devicon/master/icons/${name}/${name}`;
    let response = await fetch(`${base}-original.svg`);
    if (response.status === 404) response = await fetch(`${base}-plain.svg`);
    if (!response.ok) throw new Error(`${name}: ${response.status}`);
    const svg = await response.text();
    if (!svg.includes("<svg") || /<script|<foreignObject|onload=/i.test(svg)) throw new Error(`Invalid SVG: ${name}`);
    await writeFile(new URL(`${name}.svg`, root), svg);
    console.log(name);
  }));
}
const license = await fetch("https://raw.githubusercontent.com/devicons/devicon/master/LICENSE");
if (!license.ok) throw new Error(`Devicon license: ${license.status}`);
await writeFile(new URL("LICENSE.txt", root), await license.text());
