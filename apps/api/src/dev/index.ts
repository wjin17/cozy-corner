/**
 * Exposes server routes
 */

import { Hono } from "hono";

import { routes } from "../routes/index";

export const dev = new Hono().route("/api", routes);
