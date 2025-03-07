// index.ts
import { Hono } from "hono";
import ping from "./ping";

const app = new Hono();

const routes = app.route("/ping", ping);

export default routes;
