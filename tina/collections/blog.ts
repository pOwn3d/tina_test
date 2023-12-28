import { Collection } from "tinacms";
import { defaultSeoPageProps, seoPageProps } from "@pcode-at/tinacms-seo";

export const BlogCollection: Collection = {
  name: "blog",
  label: "Blog",
  path: "content/blog",
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/blog/${document._sys.filename}`
    },
  },
  fields: [
    seoPageProps,
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "body",
      label: "Body",
      isBody: true,
    },
  ],
};
