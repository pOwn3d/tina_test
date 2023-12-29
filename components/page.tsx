"use client";

import { PageQuery } from "../tina/__generated__/types";
import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);

  return (
    <main >
      <div >
        <p
          data-tina-field={tinaField(data?.page, "header")}

        >
          {data?.page.header}
        </p>

        <a

          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"

            width={100}
            height={24}
            priority
          />
        </a>

      </div>

      <div
        // @ts-ignore
        data-tina-field={tinaField(data?.page.logo, "url")}

      >
        <Image

          src={data?.page.logo?.url || "/next.svg"}
          alt={data?.page.logo?.alt || ""}
          width={180}
          height={37}
          priority
        />
      </div>

      <div >
        {data?.page.links?.map((link) => {
          return (
            <a
              key={link?.url}
              href={link?.url || ""}

              target="_blank"
              rel="noopener noreferrer"
            >
              <h2
                // @ts-ignore
                data-tina-field={tinaField(link, "header")}

              >
                {link?.header}{" "}

              </h2>
              <p
                // @ts-ignore
                data-tina-field={tinaField(link, "description")}

              >
                {link?.description}
              </p>
            </a>
          );
        })}
      </div>

    </main>
  );
}
