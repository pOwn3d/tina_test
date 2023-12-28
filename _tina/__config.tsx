import {
  TinaUserCollection, UsernamePasswordAuthJSProvider
} from "tinacms-authjs/dist/tinacms";
import { defineConfig, LocalAuthProvider } from "tinacms";
import { PageCollection } from "./collections/page";


const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
console.log(  isLocal
  ? "Yes"
  : "No")
export default defineConfig({
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),
  schema: {
    collections: [
      TinaUserCollection,
      PageCollection
    ],
  },
  // contentApiUrlOverride: "/api/tina/gql",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
      static: true,
    },
  },
  // schema: {
  //   collections: [TinaUserCollection, PageCollection],
  // },
});
