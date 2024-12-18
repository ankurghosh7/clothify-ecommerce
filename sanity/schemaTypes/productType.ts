import { TrolleyIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
// Create a new schema type for products with the following fields:
export const productType = defineType({
  name: "products", // The name of the schema type
  title: "Products", // The title of the schema type
  type: "document", // The type of the schema
  icon: TrolleyIcon, // The icon to display in the Sanity Studio
  fields: [
    defineField({
      name: "id",
      title: "Product ID",
      type: "string",
      options: {
        search: { weight: 8 },
      },
      validation: (Rule) => Rule.required(),
    }), // The ID of the product (required) - used to identify the product
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      options: {
        search: { weight: 10 },
      },
      validation: (Rule) => Rule.required(),
    }), // The name of the product (required)
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }), // The slug of the product (required) - used for SEO purposes and to create the URL for the product
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }), // The main image of the product required show on the product page and in the product list
    defineField({
      name: "price",
      type: "number",
      title: "Price",

      validation: (Rule) => Rule.required().min(0),
    }), // The price of the product (required) - used to display the price of the product
    defineField({
      name: "salePrice",
      type: "number",
      title: "Sale Price",
      validation: (Rule) => Rule.required(),
    }), // The sale price of the product (required) - used to display the sale price of the product
    defineField({
      name: "sku",
      type: "string",
      title: "SKU",
      validation: (Rule) => Rule.required(),
    }), // The SKU of the product (required) - used to track the product in the inventory system and to identify the product
    defineField({
      name: "weight",
      type: "number",
      title: "Weight",
      validation: (Rule) => Rule.required().min(0),
    }), // The weight of the product (required) - used to calculate the shipping cost of the product and to determine the shipping method
    defineField({
      name: "stock",
      type: "number",
      title: "Stock",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required(),
    }), // The description of the product (required) - used to describe the product and its features to the customer
    defineField({
      name: "options", // The options of the product (required) - used to provide the customer with different options for the product
      type: "object", // The type of the field
      title: "Select Options", // The title of the field
      fields: [
        defineField({
          name: "color",
          type: "string",
          title: "Color",
          validation: (Rule) => Rule.required(),
        }), // The color of the product (required) - used to provide the customer with different color options for the product
        defineField({
          name: "colorImage",
          title: "Color Image",
          type: "image",
        }), // The color image of the product (required) - used to display the color of the product
        defineField({
          name: "size",
          type: "string",
          title: "Size",
          validation: (Rule) => Rule.required(),
        }), // The size of the product (required) - used to provide the customer with different size options for the product
        defineField({
          name: "images",
          type: "array",
          of: [defineArrayMember({ type: "image" })],
          title: "Images",
        }), // The images of the product with the color and size (required) - used to display additional images of the product
      ],
    }), // The options of the product (required) - used to provide the customer with different options for the product
    defineField({
      name: "currency",
      type: "string",
      title: "Currency",
      validation: (Rule) => Rule.required(),
    }), // The currency of the product  (required) - used to display the currency of the product
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }), // The categories of the product (required) - used to categorize the product and to display the product in the category page

    defineField({
      name: "sizes",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: [
          { title: "XS", value: "xs" },
          { title: "S", value: "s" },
          { title: "M", value: "m" },
          { title: "L", value: "l" },
          { title: "XL", value: "xl" },
          { title: "XXL", value: "xxl" },
        ],
      },
    }), // The sizes of the product (required) - used to provide the customer with different size options for the product
    defineField({
      name: "relatedColors",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }), // The related colors of the product available (required) - used to filter and  display the related colors of the product
    defineField({
      name: "tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }), // The tags of the product (required) - used to filter and display the related products
    defineField({
      name: "publishedAt",
      type: "datetime",
    }), // The date and time when the product was published (required) - used to display the product in the product list
  ],
  preview: {
    select: {
      title: "name",
      media: "mainImage",
      subtitle: "price",
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
        subtitle: selection.subtitle,
      };
    },
  },
});
