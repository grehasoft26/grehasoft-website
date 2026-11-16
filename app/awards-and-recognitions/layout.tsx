import type { Metadata } from "next";
import { getPage } from "@/lib/backend-api";
import { buildPageMetadata } from "@/lib/seo";
import React from "react";

async function getPageData() {
  const data = await getPage("awards");
  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await getPageData();

    if (!page) return {};

    return buildPageMetadata({
      path: "/awards-and-recognitions",
      yoast: page?.yoast_head_json,
      fallbackTitle: page?.title?.rendered,
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

  const schemaJson = page?.acf?.schema_json;

  return (
    <>
      {schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schemaJson,
          }}
        />
      )}

      {children}
    </>
  );
}