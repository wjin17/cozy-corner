import type { Hono } from "hono";

// import { env } from "@packages/env";
import { apiReference } from "@scalar/hono-api-reference";
import { openAPISpecs } from "hono-openapi";

/**
 * Automatically generates docs for routes
 * @param pathPrefix - The path prefix for the docs
 * @param routes - The api routes
 * @returns The api routes with docs linked
 */
export function linkDocs(pathPrefix: string, routes: Hono) {
  return routes
    .get(
      `${pathPrefix}/openapi.json`,
      openAPISpecs(routes, {
        documentation: {
          info: {
            title: "Cozy Corner",
            version: "1.0.0",
            description: "Cozy Corner API",
          },
          servers: [
            {
              url: `http://localhost:${3000}`,
              description: "Local Server",
            },
          ],
        },
      })
    )
    .get(
      `${pathPrefix}/docs`,
      apiReference({
        pageTitle: "Cozy Corner API",
        theme: "solarized",
        spec: { url: "/api/v1/openapi.json" },
      })
    );
}
