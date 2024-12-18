import { TrolleyIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "products",
  title: "Products",
  type: "document",
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: "orderId",
      title: "Order Id",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              type: "reference",
              title: "Product Bought",
              to: [{ type: "products" }],
            }),
            defineField({
              name: "quantity",
              type: "number",
              title: "Quantity",
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              product: "product.name",
              quantity: "quantity",
              image: "product.mainImage",
              price: "product.price",
              currency: "product.currency",
            },
            prepare({ product, quantity, image, price, currency }) {
              return {
                title: `${product} - ${quantity}`,
                subtitle: `${price * quantity}`,
                media: image,
              };
            },
          },
        }),
      ],
    }),

    defineField({
      name: "customerDetails",
      title: "Customer Details",
      type: "reference",
      to: [{ type: "customer" }],
    }),
    defineField({
      name: "customerAddressId",
      type: "string",
      title: "Customer Address Id",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "paymentMethod",
      type: "string",
      title: "Payment Method",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Card", value: "card" },
          { title: "online", value: "online" },
          { title: "COD", value: "cod" },
          { title: "Bank Transfer", value: "bankTransfer" },
        ],
      },
    }),
    defineField({
      name: "paymentStatus",
      type: "string",
      title: "Payment Status",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Failed", value: "failed" },
          { title: "Refunded", value: "refunded" },
          { title: "Canceled", value: "canceled" },
        ],
      },
    }),
    defineField({
      name: "shippingStatus",
      type: "string",
      title: "Shipping Status",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
        ],
      },
    }),
    defineField({
      name: "shippingMethod",
      type: "string",
      title: "Shipping Method",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shippingCost",
      type: "number",
      title: "Shipping Cost",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "taxs",
      type: "array",
      title: "Taxs",
      of: [defineArrayMember({ type: "number" })],
    }),
    defineField({
      name: "discounts",
      type: "number",
      title: "Discounts",
    }),
    defineField({
      name: "totalPrice",
      type: "number",
      title: "Total",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "orderStatus",
      type: "string",
      title: "Order Status",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Completed", value: "completed" },
          { title: "Canceled", value: "canceled" },
          { title: "Refunded", value: "refunded" },
          { title: "Failed", value: "failed" },
        ],
      },
    }),
    defineField({
      name: "asGift",
      type: "boolean",
      title: "As Gift",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "trackingNumber",
      type: "string",
      title: "Tracking Number",
    }),
    defineField({
      name: "orderDate",
      type: "datetime",
      title: "Order Date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "updatedAt",
      type: "datetime",
      title: "Updated At",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "orderId",
      subtitle: "totalPrice",
      media: "products.0.product.mainImage",
    },
  },
});
