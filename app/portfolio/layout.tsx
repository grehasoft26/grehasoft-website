import type { Metadata } from "next";
import axios from "@/lib/axios";
import React from "react";

async function getPageData() {
  const res = await axios.get(
    "/wp-json/wp/v2/pages?slug=portfolio"
  );

  return res.data?.[0];
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await getPageData();

    if (!page) return {};

    const yoast = page?.yoast_head_json;

    return {
      title: yoast?.title,
      description: yoast?.description,

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