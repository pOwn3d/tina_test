import { client } from "../../../tina/__generated__/databaseClient";
import { BlogComponent } from "../../../components/app/blog-component";

export default async function defaultPage({ params }: {
  params: { slug: string }
}) {
  const res = await client.queries.blog({
    relativePath: `${params.slug}.md`
  });

  return <BlogComponent
    data={JSON.parse(JSON.stringify(res.data))}
    query={res.query}
    variables={res.variables} />;
}

