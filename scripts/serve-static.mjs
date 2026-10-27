import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(
  new URL("../frontend/.output/public/", import.meta.url),
);
const port = Number(process.argv[2] || process.env.PORT || 3000);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    let file = resolve(root, "." + pathname);
    if (file !== resolve(root) && !file.startsWith(resolve(root) + sep)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    const content = await readFile(file);
    response
      .writeHead(200, {
        "Content-Type": mime[extname(file)] || "application/octet-stream",
      })
      .end(content);
  } catch {
    let content;
    try {
      content = await readFile(resolve(root, "404.html"));
    } catch {
      content = "Not found. Run npm run generate first.";
    }
    response
      .writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
      .end(content);
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Portfolio: http://127.0.0.1:${port}`),
);
process.on("SIGINT", () => server.close(() => process.exit(0)));
