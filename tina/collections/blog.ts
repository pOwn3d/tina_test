import { Collection } from "tinacms";
import { seoPageProps } from "@pcode-at/tinacms-seo";

export const BlogCollection: Collection = {
  name: "blog",
  label: "Blog",
  path: "content/blog",
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/blog/${document._sys.filename}`;
    },
    filename: ({
      slugify: (values) => {
        return `${values?.title
          ?.toLowerCase()
          .replace(/ /g, "-")}`;
      }
    })
  },
  fields: [
    seoPageProps,
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true
    }
  ]
};
