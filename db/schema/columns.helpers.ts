import { timestamp, pgEnum } from "drizzle-orm/pg-core";

export const timestamps = {
  updatedAt: timestamp("updated_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  deletedAt: timestamp("deleted_at"),
};

export type TPaymentMethods = {
  card?: {
    type: string;
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    name: string;
    billingAddress: string;
    default: boolean;
  };
  netBanking?: {
    type: string;
    customerId: string;
    bankName: string;
    password: string;
    default: boolean;
  };
};
export type TCartItem = {
  productId: number;
  quantity: number;
};

export const orderStatusEnum = pgEnum("order_status", [
  "pending",
  "shipped",
  "delivered",
  "cancelled",
  "returned",
  "refunded",
  "processing",
  "on_hold",
  "payment_failed",
  "payment_pending",
]);

enum ProductSizesEnum {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}
export type TProductSizes = {
  size: ProductSizesEnum;
  quantity: number;
  imageId: number;
};

export type TProductImages = {
  image: string;
  sizeId: number;
  colorId: number;
  quantity: number;
};

export type TProductColors = {
  colorName: string;
  colorBg: string;
  referenceColor: string;
  quantity: number;
};
