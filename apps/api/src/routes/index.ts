// index.ts
import { Hono } from "hono";

import { linkDocs } from "../docs";
import ping from "./ping";

const v1 = new Hono().route("/ping", ping);
export const routes = linkDocs("/v1", v1);
export type AppType = typeof routes;
