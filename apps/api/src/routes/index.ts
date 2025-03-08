// index.ts
import { Hono } from "hono";
import ping from "./ping";
import { linkDocs } from "../docs";

const v1 = new Hono().route("/ping", ping);
export const routes = linkDocs("/api/v1", v1);
export type AppType = typeof routes;
