import { UsernamePasswordAuthJSProvider, TinaUserCollection } from "tinacms-authjs/dist/tinacms";
import { defineConfig, LocalAuthProvider } from "tinacms";

import { PageCollection } from "./collections/page";
import { HeaderCollection } from "./collections/header";
import { ContentCollection } from "./collections/content";
import { BlogCollection } from "./collections/blog";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
const branch = process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    contentApiUrlOverride: "/api/tina/gql",
    // @ts-ignore
    authProvider: isLocal ? new LocalAuthProvider() : new
    UsernamePasswordAuthJSProvider(),
    branch,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
            static: true,
        },
    },
    schema: {
        collections: [
            TinaUserCollection,
            PageCollection,
            ContentCollection,
            HeaderCollection,
            BlogCollection
        ]
    }
});
