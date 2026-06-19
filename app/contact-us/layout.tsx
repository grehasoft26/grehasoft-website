import type { Metadata } from "next";
import axios from "@/lib/axios";
import React from "react";

async function getPageData() {
  try {
    const res = await axios.get(
      "/wp-json/wp/v2/pages?slug=contact-us&_fields=acf,yoast_head_json"
    );

    return res.data?.[0] || null;
  } catch (error) {
    console.error("Contact page fetch failed:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageData();

  if (!page) {
    return {
      title: "Contact Us | Grehasoft",
    };
  }

  const yoast = page?.yoast_head_json;

  return {
    title: yoast?.title || "Contact Us | Grehasoft",
    description: yoast?.description || "",

    alternates: {
      canonical: yoast?.canonical,
    },

    openGraph: {
      title: yoast?.og_title || yoast?.title,
      description:
        yoast?.og_description || yoast?.description,
      url: yoast?.og_url,
      images:
        yoast?.og_image?.map(
          (img: { url: string }) => img.url
        ) || [],
    },
  };
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