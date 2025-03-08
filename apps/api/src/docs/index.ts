import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";
import { apiReference } from "@scalar/hono-api-reference";

const port = process.env.PORT || 5173;

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
            { url: `http://localhost:${port}`, description: "Local Server" },
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
