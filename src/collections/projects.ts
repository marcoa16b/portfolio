import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  admin: {
    useAsTitle: "title",
    group: "Content",
    defaultColumns: ["title", "year", "featured", "status", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "order",
      type: "number",
      admin: {
        position: "sidebar",
        description: "Display order (lower = first)",
      },
    },
    {
      name: "title",
      type: "text",
      localized: true,
      required: true,
    },
    {
      name: "slug",
      type: "text",
      localized: true,
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      type: "textarea",
      localized: true,
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      localized: true,
    },
    {
      name: "gallery",
      type: "array",
      localized: true,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "alt",
          type: "text",
        },
      ],
    },
    {
      name: "year",
      type: "number",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "role",
      type: "text",
      localized: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Completed", value: "completed" },
        { label: "In Progress", value: "in-progress" },
        { label: "Maintenance", value: "maintenance" },
      ],
      defaultValue: "completed",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "technologies",
      type: "text",
      hasMany: true,
    },
    {
      name: "links",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "challenge",
      type: "richText",
      localized: true,
    },
    {
      name: "solution",
      type: "richText",
      localized: true,
    },
    {
      name: "results",
      type: "richText",
      localized: true,
    },
    {
      name: "content",
      type: "richText",
      localized: true,
    },
    {
      name: "testimonial",
      type: "group",
      localized: true,
      fields: [
        {
          name: "quote",
          type: "textarea",
        },
        {
          name: "author",
          type: "text",
        },
        {
          name: "role",
          type: "text",
        },
      ],
    },
  ],
};
