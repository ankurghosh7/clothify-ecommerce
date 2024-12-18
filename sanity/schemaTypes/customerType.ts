import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
// Create a new schema type for the customer document type in the Sanity Studio schema builder
export const customerType = defineType({
  name: "customer", // The machine-readable name of the schema type
  title: "Customer", // The human-readable name of the schema type
  type: "document", // The type of the schema type
  icon: UserIcon, // The icon to display for the schema type in the Studio
  fields: [
    defineField({
      name: "id",
      title: "Customer Id",
      type: "string",
      options: {
        search: { weight: 10 },
      },
      validation: (Rule) => Rule.required(),
    }), // Define a field for the customer ID in the schema type  with search options and validation
    defineField({
      name: "name",
      type: "string",
    }), // Define a field for the customer name in the schema type
    defineField({
      name: "email",
      type: "string",
      options: {
        search: { weight: 10 },
      },
    }), // Define a field for the customer email in the schema type with search options
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }), // Define a field for the customer profile image in the schema type with hotspot options
    defineField({
      name: "address",
      type: "object",
      fields: [
        defineField({
          name: "name",
          type: "string",
        }),
        defineField({
          name: "phone",
          type: "string",
        }),

        defineField({
          name: "street",
          type: "string",
        }),
        defineField({
          name: "city",
          type: "string",
        }),
        defineField({
          name: "zip",
          type: "string",
        }),

        defineField({
          name: "state",
          type: "string",
        }),
        defineField({
          name: "nearestLandmark",
          type: "string",
        }),
        defineField({
          name: "country",
          type: "string",
        }),
        defineField({
          name: "active",
          type: "boolean",
        }),
      ],
    }), // Define a field for the customer address in the schema type as an object with multiple fields for the address details
    defineField({
      name: "age",
      type: "number",
    }), // Define a field for the customer age in the schema type for more detailed customer information
    defineField({
      name: "gender",
      type: "string",
      options: {
        list: [
          { title: "women", value: "women" },
          { title: "Men", value: "men" },
          { title: "Other", value: "other" },
        ],
      },
    }), // Define a field for the customer gender in the schema type with a list of options for more detailed customer information for suggestions and send notifications of new products
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
