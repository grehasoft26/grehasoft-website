import type { Metadata } from "next";
import { getPage } from "@/lib/backend-api";
import { buildPageMetadata } from "@/lib/seo";
import React from "react";

async function getPageData() {
  const data = await getPage("contact-us");
  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData();

  if (!page) {
    return {
      title: "Contact Us | Grehasoft",
    };
  }

  return buildPageMetadata({
    path: "/contact-us",
    yoast: page?.yoast_head_json,
    fallbackTitle: "Contact Us | Grehasoft",
  });
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const page = await getPageData();

  return (
    <>
      {page?.acf?.schema_json && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: page.acf.schema_json,
          }}
        />
      )}

      {children}
    </>
  );
}