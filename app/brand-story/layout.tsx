import type { Metadata } from "next";
import { getPage } from "@/lib/backend-api";
import React from "react";

async function getPageData() {
  const data = await getPage("brand-story");
  return data;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await getPageData();

    if (!page) return {};

    const yoast = page?.yoast_head_json;

    return {
      title: yoast?.title || page?.title?.rendered,
      description: yoast?.description || "",

      alternates: {
        canonical: yoast?.canonical,
      },

      openGraph: {
        title: yoast?.og_title,
        description: yoast?.og_description,
        url: yoast?.og_url,
        images:
          yoast?.og_image?.map(
            (img: any) => img.url
          ) || [],
      },

      twitter: {
        card: "summary_large_image",
        title: yoast?.twitter_title,
        description: yoast?.twitter_description,
        images:
          yoast?.og_image?.map(
            (img: any) => img.url
          ) || [],
      },
    };
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