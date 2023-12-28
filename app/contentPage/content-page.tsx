"use client"

import { ContentAndHeaderQuery } from "../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { SiteHeader } from "./site-header";

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
        data-tina-field={tinaField(data.content, "title")}
      >
        content.title: {data.content.title}
      </p>
      <p
        data-tina-field={tinaField(data.content, "content")}
      >
        content.content: {data.content.content}
      </p>
    </main>
  )
}
