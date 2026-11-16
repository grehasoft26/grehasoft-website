import type { Metadata } from "next";
import { getPage } from "@/lib/backend-api";
import { buildPageMetadata } from "@/lib/seo";
import React from "react";

async function getPageData() {
  const data = await getPage("pms");
  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await getPageData();

    if (!page) return {};

    return buildPageMetadata({
      path: "/products/pms",
      yoast: page?.yoast_head_json,
    });
  } catch {
    return {};
  }
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