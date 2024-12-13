import {
  pgTable,
  integer,
  decimal,
  varchar,
  json,
  timestamp,
} from "drizzle-orm/pg-core";
import customers, { addresses, paymentMethods } from "./customers";
import { orderStatusEnum } from "./columns.helpers";
import admins from "./admins";

const orders = pgTable("orders", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the order
  productIds: json("product_ids").$type<number[]>().notNull(), // Array of product IDs in the order (foreign key to products table)
  customerId: integer("customer_id")
    .references(() => customers.id)
    .notNull(), // Foreign key to customers table
  paymentMethodId: integer("payment_method_id")
    .references(() => paymentMethods.id)
    .notNull(), // Foreign key to payment_methods table
  customerAddressId: integer("customer_address_id")
    .references(() => addresses.id)
    .notNull(), // Foreign key to addresses table

  status: orderStatusEnum().default("pending"), // Order status (e.g., pending, shipped, delivered)
  location: varchar("location", { length: 255 }), // Location for the order
  totalPrice: decimal("total_price").notNull(), // Total amount for the order
  discount: decimal("discount"), // Disconnected status for the order
  coponCode: varchar("copon_code", { length: 255 }), // Copon code for the order
  trackingId: varchar("tracking_id", { length: 255 }), // Tracking ID for the order
  transactionID: varchar("transaction_id", { length: 255 }), // Transaction ID for the order
  invoice: varchar("invoice", { length: 255 }), // Invoice number for the order
  updatedAt: timestamp("updated_at"), // Timestamp for when the order was last updated
  createdAt: timestamp("created_at").defaultNow().notNull(), // Timestamp for when the order was created
});

const copons = pgTable("copons", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the copon
  coponCode: varchar("copon_code", { length: 255 }).notNull(), // Copon code
  discount: decimal("discount").notNull(), // Copon discount
  expiryDate: timestamp("expiry_date").notNull(), // Copon expiry date
  createdAt: timestamp("created_at").defaultNow().notNull(), // Timestamp for when the copon was created
  updatedAt: timestamp("updated_at"), // Timestamp for when the copon was last updated
  adminId: integer("admin_id")
    .references(() => admins.id)
    .notNull(), // Foreign key to admins table
});
export { orders, copons };
