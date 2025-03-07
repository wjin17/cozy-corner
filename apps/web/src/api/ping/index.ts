import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver } from "hono-openapi/zod";
import { z } from "zod";

const app = new Hono().basePath("/ping");

const responseSchema = z.object({
  message: z.string(),
  timestamp: z.number(),
});

app.get(
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
  (c) => c.json({ message: "pong", timestamp: Date.now() }),
);

export default app;
