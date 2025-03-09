import "dotenv/config";
import { Logger } from "@packages/lib/common/logger";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z.number().default(8008),
  DB_URL: z.string(),
});

// Function to check and log environment variables
export function checkEnvVariables() {
  // eslint-disable-next-line node/no-process-env
  const parsedEnv = envSchema.safeParse(process.env);
  if (!parsedEnv.success) {
    Logger.error("The following env variables are invalid:");
    for (const err of parsedEnv.error.errors) {
      Logger.error(`   ❌ ${err.path.join(".")} - ${err.message}`);
    }
    process.exit(1);
  } else {
    Logger.info("✅ Loaded environment Variables");
    return parsedEnv.data;
  }
}

export const env = checkEnvVariables();
