import { serve } from "@hono/node-server";
import { env } from "@packages/env";
import { Logger } from "@packages/lib/common/logger";
import { Hono } from "hono";

import { routes } from "./routes/index";
import { serveStatic } from "@hono/node-server/serve-static";
import path from "node:path";

const app = new Hono();

app.route("/api", routes);

app.use("*", serveStatic({ root: path.join(__dirname, "web") }));

// Start the server
Logger.info(`NODE_ENV: ${env.NODE_ENV}`);
serve(
  {
    fetch: app.fetch,
    port: Number(env.PORT),
  },
  (info) => {
    Logger.info(`Server started on http://localhost:${info.port}`);
  }
);
