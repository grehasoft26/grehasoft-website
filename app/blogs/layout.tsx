import type { Metadata } from "next";
import { fetchWP } from "@/lib/api";
import React from "react";

async function getBlogsPage() {
  return await fetchWP<any>("/wp-json/wp/v2/pages/1276?acf_format=standard");
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getBlogsPage();

  if (!page) return {};

  const yoast = page?.yoast_head_json;

  return {
    title: yoast?.title || page?.title?.rendered || "Blogs | GrehaSoft",

    description:
      yoast?.description ||
      "Latest insights, technology updates, web development, SEO, digital marketing and business growth articles.",

    alternates: {
      canonical: yoast?.canonical,
    },

    openGraph: {
      title: yoast?.og_title || yoast?.title,
      description: yoast?.og_description || yoast?.description,
      url: yoast?.og_url,
      images:
        yoast?.og_image?.map((img: any) => ({
          url: img.url,
        })) || [],
    },

    twitter: {
      card: "summary_large_image",
      title: yoast?.twitter_title || yoast?.og_title,
      description:
        yoast?.twitter_description || yoast?.og_description,
      images:
        yoast?.og_image?.map((img: any) => img.url) || [],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const page = await getBlogsPage();

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