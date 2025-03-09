import { createClient } from "@libsql/client";
import { env } from "@packages/env";
import { drizzle } from "drizzle-orm/libsql";

const client = createClient({ url: env.DB_URL });
export const db = drizzle({ client });
