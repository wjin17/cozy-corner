import "dotenv/config";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "sqlite",
  schema: "./src/schema.ts",
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
});
