import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";
import { apiReference } from "@scalar/hono-api-reference";

const port = process.env.PORT || 5173;

export function linkDocs(app: Hono) {
  app.get(
    "/api/v1/openapi.json",
    openAPISpecs(app, {
      documentation: {
        info: {
          title: "Cozy Corner",
          version: "1.0.0",
          description: "Cozy Corner API",
        },
        servers: [
          { url: `http://localhost:${port}`, description: "Local Server" },
        ],
      },
    }),
  );

  app.get(
    "/api/v1/docs",
    apiReference({
      pageTitle: "Cozy Corner API",
      theme: "solarized",
      spec: { url: "/api/v1/openapi.json" },
    }),
  );
  return app;
}
