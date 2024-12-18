import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
//  Sanity schema type for category documents
export const categoryType = defineType({
  name: "category", // name of the schema type
  title: "Category", // title of the schema type that will be displayed in the Studio
  type: "document", // type of the schema
  icon: TagIcon, // icon to be displayed in the Studio
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "ID",
      validation: (Rule) => Rule.required(),
    }), // field for the category ID (required)
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }), // field for the category title (required)
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }), // field for the category slug (auto-generated from the title)
    defineField({
      name: "description",
      type: "text",
    }), // field for the category description (optional)
    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      validation: (Rule) => Rule.required(),
    }), // field for the category creation date (required)
    defineField({
      name: "updatedAt",
      type: "datetime",
      title: "Updated At",
    }), // field for the category update date (optional)
  ],
  preview: {
    select: {
      title: "title",
      createdAt: "createdAt",
    },
    prepare({ title, createdAt }) {
      return {
        title,
        subtitle: `Created at: ${new Date(createdAt).toLocaleDateString()}`,
      };
    },
  },
});
