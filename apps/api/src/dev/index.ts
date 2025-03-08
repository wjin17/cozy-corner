/**
 * Exposes server routes
 */

import { readFile } from "node:fs/promises";
import { Hono } from "hono";
import { Logger } from "@packages/lib/common/logger";

import { routes } from "../routes/index";

/**
 * Creates a dev server that serves the index.html file and the routes
 * @param indexPath - The path to the index.html file
 * @returns The dev server
 */
export async function createDevServer(indexPath: string) {
  const app = new Hono();

  Logger.info(`Loading index.html from ${indexPath}`);
  let html = await readFile(indexPath, "utf8");

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
    </head>`
  );

  // App routes
  return app.route("/api/v1", routes).get("/*", (c) => c.html(html));
}
