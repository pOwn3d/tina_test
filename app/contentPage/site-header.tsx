import * as React from "react"
import { HeaderQuery } from "../../tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";

export function SiteHeader(props: HeaderQuery['header']) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <span
        data-tina-field={tinaField(props, "emailUs")}
      >
        emailUs: {props?.emailUs}
      </span>
      <span
        data-tina-field={tinaField(props, "callUsNumber")}
      >
        callUsNumber: {props?.callUsNumber}
      </span>
      <span
        data-tina-field={tinaField(props, "openingTime")}
      >
        openingTime: {props?.openingTime}
      </span>
    </header>
  )
}
