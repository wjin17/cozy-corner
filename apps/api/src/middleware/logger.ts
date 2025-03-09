// create a logger middleware for hono
import type { Context } from "hono";

import { Logger } from "@packages/lib/common/logger";

export const logger = async (c: Context, next: () => Promise<void>) => {
  Logger.info(c.req.path);
  await next();
};
