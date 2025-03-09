import { env } from "@packages/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/schema.ts",
  dbCredentials: {
    url: env.DB_URL,
  },
  out: "./migrations",
});
