"use client"

import { ContentAndHeaderQuery } from "../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { SiteHeader } from "../site-header";
import client from "../../tina/__generated__/client";

export function ContentPageComponent(props: {
  data: ContentAndHeaderQuery
  variables: object;
  query: string
}) {
  const { data } = useTina(props)
  return (
    <main>
      <SiteHeader {...data?.header} />
      <p
        data-tina-field={tinaField(data?.content, "title")}
      >
        content.title: {data?.content.title}
      </p>
      <p
        data-tina-field={tinaField(data?.content, "content")}
      >
        content.content: {data?.content.content}
      </p>
    </main>
  )
}

//
// export const getStaticPaths = async () => {
//   let  headerData  = await client.queries.headerConnection();
//   let contentData = await client.queries.contentConnection();
//   // @ts-ignore
//   const paths = headerData.data.headerConnection.edges.map((x) => {
//     // @ts-ignore
//     return { params: { slug: x.node._sys.filename } };
//   });
//   // @ts-ignore
//   const paths2 = contentData.data.contentConnection.edges.map((x) => {
//     // @ts-ignore
//     return { params: { slug: x.node._sys.filename } };
//   });
//
//   return {
//     paths,
//     paths2,
//     fallback: "blocking",
//   };
// };
//
// export const getStaticProps = async (ctx) => {
//   const { data, query, variables } = await client.queries.contentAndHeader({
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
