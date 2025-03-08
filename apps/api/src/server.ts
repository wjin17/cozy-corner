import { serve } from "@hono/node-server";

import { routes } from "./routes/index";

import { Logger } from "@packages/lib/common/logger";

const port = process.env.PORT || 3000;

// Start the server
Logger.info(`NODE_ENV: ${process.env.NODE_ENV}`);
serve(
  {
    fetch: routes.fetch,
    port: Number(port),
  },
  (info) => {
    Logger.info(`Server started on http://localhost:${info.port}`);
  }
);
