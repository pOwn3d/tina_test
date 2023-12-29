import { Collection } from "tinacms";

export const ContentCollection: Collection =
  {
    name: "content",
    label: "Content",
    path: "content/contents",
    format: "md",
    ui: {
      router: ({ document }) => {
        return `/contentPage/${document._sys.filename}`
      },
    },
    fields: [
      { type: "string", name: "title", label: "title" },
      { type: "rich-text", name: "content", label: "content" }
    ],
  };

