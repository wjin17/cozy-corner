import { serve } from "@hono/node-server";
import { env } from "@packages/env";
import { Logger } from "@packages/lib/common/logger";
import { Hono } from "hono";

import { routes } from "./routes/index";

const app = new Hono();

app.route("/api", routes);

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
