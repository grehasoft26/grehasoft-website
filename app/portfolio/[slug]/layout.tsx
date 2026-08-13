import type { Metadata } from "next";
import { getPortfolioProject } from "@/lib/backend-api";
import Script from "next/script";
import React from "react";

async function getPortfolio(slug: string) {
  const data = await getPortfolioProject(slug);
  return data?.[0] || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const portfolio = await getPortfolio(slug);

  if (!portfolio) return {};

  const yoast = portfolio.yoast_head_json;

  return {
    title: yoast?.title || portfolio.title?.rendered,
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
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const portfolio = await getPortfolio(slug);

  const schemaJson = portfolio?.acf?.schema_json;

  return (
    <>
      {schemaJson && (
        <Script
          id="portfolio-schema"
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