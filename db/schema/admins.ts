import { timestamps } from "@/db/schema/columns.helpers";
import { sql, SQL } from "drizzle-orm";
import {
  pgTable,
  integer,
  varchar,
  json,
  boolean,
  AnyPgColumn,
} from "drizzle-orm/pg-core";

const admins = pgTable("admins", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the admin
  name: varchar("name", { length: 255 }).notNull(), // Name for the admin account (e.g., John Doe)
  email: varchar("email", { length: 255 }).notNull(), // Email for the admin account (unique)
  password: varchar("password", { length: 255 }).notNull(), // Password for the admin account (hashed)
  role: varchar("role", { length: 50 }).notNull().default("admin"), // Role for the admin account (e.g., admin, superadmin)
  permissions: json("permissions")
    .array()
    .default([
      "products:read",
      "orders:read",
      "coupons:read",
      "customers:read",
      "categorys:read",
    ]), // Permissions for the admin
  active: boolean("active").default(true), // Active status for the admin

  ...timestamps,
});

// custom lower function
export function lower(email: AnyPgColumn): SQL {
  return sql`lower(${email})`;
}
export default admins;
