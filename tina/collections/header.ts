import { Collection } from "tinacms";

export const HeaderCollection: Collection =
  {
    name: "header",
    label: "Header",
    path: "content/header",
    format: "md",
    ui: {
      allowedActions: {
        create: false,
        delete: false,
      },
      global: true,
    },
    fields: [
      { type: "string", name: "callUsNumber", label: "Call us phone number" },
      { type: "string", name: "openingTime", label: "Opening time" },
      { type: "string", name: "emailUs", label: "Email us email" }
    ],
  };

