"use client";

import { BlogQuery } from "../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { SiteHeader } from "../site-header";


export function BlogComponent(props: {
  data: BlogQuery;
  variables: object;
  query: string
}) {
  const { data } = useTina(props);
  return (
    <>
      {/* @ts-ignore */}
      <SiteHeader {...data?.header} />
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-3xl">
                <h1
                  className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                  data-tina-field={tinaField(data?.blog, "title")}>{data?.blog?.title}
                </h1>
                <TinaMarkdown content={props.data?.blog.body} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
