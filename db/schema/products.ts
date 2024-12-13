import {
  timestamps,
  TProductColors,
  TProductImages,
  TProductSizes,
} from "@/db/schema/columns.helpers";
import { pgTable, integer, varchar, json, boolean } from "drizzle-orm/pg-core";
import customers from "./customers";

const products = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the product
  name: varchar("name", { length: 255 }).notNull(), // Product name (e.g., iPhone 12)
  shortName: varchar("short_name", { length: 255 }).notNull(), // Product short name (e.g., iPhone)
  description: varchar("description", { length: 255 }).notNull(), // Product description
  price: integer("price").notNull(), // Product price
  discountPrice: integer("discount_price"), // Product descount price
  discountValue: integer("discount_value"), // Product discount value
  quantity: integer("quantity").default(1), // Product quantity in stock (default 1)
  category: varchar("category", { length: 255 }).notNull(), // Product category (e.g., Electronics)
  images: varchar("images", { length: 255 }).notNull(), // Product image URLs (comma-separated)
  coverImage: varchar("cover_image", { length: 255 }).notNull(), // Product cover image URL (main image) customers view first
  ageGroup: varchar("age_group", { length: 255 }).notNull(), // Product age group (e.g., 20 - 30)
  isFeatured: boolean("is_featured").default(false), // Product featured status (e.g., true, false) for homepage display (default false)
  fastDelivery: boolean("fast_delivery").default(false), // Product fast delivery status (e.g., true, false) for quick delivery (default false)
  ...timestamps,
});

const reviews = pgTable("reviews", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the review
  productId: integer("product_id")
    .references(() => products.id)
    .notNull(), // Foreign key to products table
  customerId: integer("customer_id")
    .references(() => customers.id)
    .notNull(), // Foreign key to customers table
  rating: integer("rating").notNull(), // Review rating
  comment: varchar("comment", { length: 255 }).notNull(), // Review comment
  ...timestamps,
});

const productImages = pgTable("product_images", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the product image
  productId: integer("product_id")
    .references(() => products.id)
    .notNull(), // Foreign key to products table
  images: json("images").$type<TProductImages[]>(), // Product images (e.g., front, back, side)
  ...timestamps,
});

const productColors = pgTable("product_colors", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the product color
  productId: integer("product_id")
    .references(() => products.id)
    .notNull(), // Foreign key to products table
  colors: json("colors").$type<TProductColors[]>(), // Product colors (e.g., red, blue, green)
  ...timestamps,
});

const productSizes = pgTable("product_sizes", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(), // Primary key for the product size
  productId: integer("product_id")
    .references(() => products.id)
    .notNull(), // Foreign key to products table
  sizes: json("sizes").$type<TProductSizes[]>(), // Product sizes (e.g., S, M, L, XL)
  ...timestamps,
});
export { products, reviews, productImages, productColors, productSizes };
