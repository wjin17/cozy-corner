import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver } from "hono-openapi/zod";
import { z } from "zod";

const responseSchema = z.object({
  message: z.string(),
  timestamp: z.number(),
});

const route = new Hono().get(
  "/",
  describeRoute({
    description: "Return a pong",
    responses: {
      200: {
        description: "Successful greeting response",
        content: {
          "text/json": {
            schema: resolver(responseSchema),
          },
        },
      },
    },
  }),
  (c) => c.json({ message: "pong", timestamp: Date.now() })
);

export default route;
