import { client } from "../../../tina/__generated__/databaseClient";

import { ContentPageComponent } from "../content-page";

export default async function defaultPage({
  params,
}: {
  params: { slug: string }
}) {
  const res = await client.queries.contentAndHeader({
    relativePath: `${params.slug}.md`,
  })
  return <ContentPageComponent       data={JSON.parse(JSON.stringify(res.data))}
                                     query={res.query}
                                     variables={res.variables} />
}
