import { TPaymentDetails, timestamps } from "@/db/schema/columns.helpers";
import { pgTable, integer, varchar, json } from "drizzle-orm/pg-core";

type cartItem = {
  productId: number;
  quantity: number;
};
/**
 * @description This is the schema for the users table in the postgres database.
 * @type {Table} users - The users table
 * @property {Column} id - The id column
 * @property {Column} name - The name column
 * @property {Column} email - The email column
 * @property {Column} password - The password column
 * @property {Column} ordersId - The ordersId column
 * @property {Column} addressId - The addressId column
 * @property {Column} paymentDetails - The paymentDetails column
 * @property {Column} role - The role column
 * @property {Column} cart - The cart column
 * @property {Column} wishlist - The wishlist column
 * @property {Column} age - The age column
 * @property {column} gender - Customer gender column (optional)
 * @property {Column} reviewsId - The reviewsId column (optional)
 * @property {Column} createdAt - The createdAt column
 * @property {Column} updatedAt - The updatedAt column
 * @property {Column} deletedAt - The deletedAt column
 *
 */
const customers = pgTable("customers", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  paymentDetails: json("payment_details").$type<TPaymentDetails>(),
  role: varchar("role", { length: 50 }).notNull().default("customer"),
  cart: json("cart").$type<cartItem[]>().default([]),
  wishlist: integer("wishlist").array().default([]),
  age: integer("age"),
  gender: varchar("gender", { length: 10 }),
  refreshToken: varchar("refresh_token", { length: 255 }),
  ...timestamps,
});

export default customers;
