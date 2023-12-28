"use client"

import { BlogQuery } from "../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/databaseClient";

export function BlogComponent(props: {
  data: BlogQuery;
  variables: object;
  query: string
}) {
  const { data } = useTina(props)
  return (
    <main>
      <p
        data-tina-field={tinaField(data?.blog, "title")}
      >
        content.title: {data?.blog?.title}
      </p>
      <p
        data-tina-field={tinaField(data?.blog, "body")}
      >
        content.BODY: {data?.blog?.body}
      </p>
    </main>
  )
}
//
// export const generateStaticParams = async () => {
//   const pages = ['toto'];
//   return pages.map((page) => ({ slug: page }));
// }
//
// // @ts-ignore
// export const getStaticPaths = async () => {
//   const { data } = await client.queries.blogConnection();
//   // @ts-ignore
//   const paths = data.blogConnection.edges.map((x) => {
//     // @ts-ignore
//     return { params: { slug: x.node._sys.filename } };
//   });
//
//   return {
//     paths,
//     fallback: "blocking",
//   };
// };
//
// // @ts-ignore
// export const getStaticProps = async (ctx) => {
//   const { data, query, variables } = await client.queries.blog({
//     relativePath: ctx.params.slug + ".md",
//   });
//
//   return {
//     props: {
//       data,
//       query,
//       variables,
//     },
//   };
// };
//
