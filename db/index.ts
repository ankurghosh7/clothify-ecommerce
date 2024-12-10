import { drizzle } from "drizzle-orm/neon-http";
import * as schema1 from "./schema/index";
const db = drizzle({
  connection: process.env.DATABASE_URL!,
  schema: { ...schema1 },
});

export default db;
