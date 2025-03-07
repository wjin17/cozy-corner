/**
 * Exposes server routes
 */

import path from "path";
import { fileURLToPath } from "url";
import { Hono } from "hono";
import { readFile } from "node:fs/promises";
import { serveStatic } from "@hono/node-server/serve-static";
import { Logger } from "../utils/logger";

const isProd = process.env["NODE_ENV"] === "production";
const app = new Hono();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webDir = path.join(__dirname, "..", "web");

const devIndex = path.join(__dirname, "..", "..", "index.html");
const prodIndex = path.join(webDir, "index.html");
let html = await readFile(isProd ? prodIndex : devIndex, "utf8");

if (isProd) {
  Logger.info(`Serving assets from web at ${webDir}`);
  app.use("/assets/*", serveStatic({ root: path.join("dist", "web") }));
} else {
  Logger.info("Loading preamble script");
  html = html.replace(
    "</head>",
    `<script type="module">
        import RefreshRuntime from '/@react-refresh'
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
      </script>
      <script type="module" src="/@vite/client"></script>
      </head>`,
  );
}

// This catch-all route handles application routes after static files are checked
app.get("/*", (c) => c.html(html));

export default app;
