import { TCartItem, timestamps } from "@/db/schema/columns.helpers";
import {
  pgTable,
  integer,
  varchar,
  json,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

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
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the customer
  name: varchar("name", { length: 255 }).notNull(), // Customer name (e.g., John Doe)
  email: varchar("email", { length: 255 }).notNull(), // Customer email address (e.g., example@example.com)
  password: varchar("password", { length: 255 }).notNull(), // Customer password (e.g., password123)
  role: varchar("role", { length: 50 }).notNull().default("customer"), // Customer role (e.g., customer, admin)
  age: integer("age"), // Customer age (optional)
  gender: varchar("gender", { length: 10 }), // Customer gender (optional)
  refreshToken: varchar("refresh_token", { length: 255 }), // Refresh token for JWT authentication
  ...timestamps,
});

export default customers;

const paymentMethods = pgTable("payment_methods", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the payment method
  customerId: integer("customer_id")
    .references(() => customers.id)
    .notNull(), // Foreign key to users table
  type: varchar("type", { length: 50 }).notNull(), // Payment method type (e.g., credit_card, paypal)
  provider: varchar("provider", { length: 100 }).notNull(), // Payment provider (e.g., Visa, Mastercard)
  details: text("details"), // Optional JSON string for additional details (expiry date, etc.)
  createdAt: timestamp("created_at").defaultNow(), // Timestamp for when the payment method was added
});

const addresses = pgTable("addresses", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the address
  customerId: integer("customer_id")
    .references(() => customers.id)
    .notNull(), // Foreign key to users table
  address: text("address").notNull(), // Address string
  city: varchar("city", { length: 100 }).notNull(), // City name
  state: varchar("state", { length: 100 }).notNull(), // State name
  country: varchar("country", { length: 100 }).notNull(), // Country name
  zipCode: varchar("zip_code", { length: 10 }).notNull(), // Zip code
  phone: varchar("phone", { length: 15 }).notNull(), // Phone number
  secoundPhone: varchar("secound_phone", { length: 15 }), // Optional second phone number
  createdAt: timestamp("created_at").defaultNow(), // Timestamp for when the address was added
});

const customersCart = pgTable("customers_cart", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the cart
  customerId: integer("customer_id")
    .references(() => customers.id)
    .notNull(), // Foreign key to users table
  items: json("items").$type<TCartItem[]>().default([]), // JSON array of cart
  createdAt: timestamp("created_at").defaultNow(), // Timestamp for when the cart was added
});

const customersWishlist = pgTable("customers_wishlist", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the wishlist
  customerId: integer("customer_id")
    .references(() => customers.id)
    .notNull(), // Foreign key to users table
  items: json("items").$type<string[]>().default([]), // JSON array of wishlist items
  createdAt: timestamp("created_at").defaultNow(), // Timestamp for when the wishlist was added
});

export { paymentMethods, addresses, customersCart, customersWishlist };
