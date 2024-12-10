import { timestamps } from "@/db/schema/columns.helpers";
import { pgTable, integer, varchar } from "drizzle-orm/pg-core";
import admins from "./admin";

const categories = pgTable("categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  adminId: integer("admin_id")
    .references(() => admins.id)
    .notNull(),
  ...timestamps,
});

export default categories;
