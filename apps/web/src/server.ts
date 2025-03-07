import { serve } from "@hono/node-server";

import app from "./api/index";

import { Logger } from "./utils/logger";

const port = process.env.PORT || 3000;

// Start the server
Logger.info(`NODE_ENV: ${process.env.NODE_ENV}`);
serve(
  {
    fetch: app.fetch,
    port: Number(port),
  },
  (info) => {
    Logger.info(`Server started on http://localhost:${info.port}`);
  },
);
