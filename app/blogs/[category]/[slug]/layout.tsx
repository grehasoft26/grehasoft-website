import type { Metadata } from "next";
import { getPost } from "@/lib/backend-api";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const res = await getPost(slug);

    const post = res?.[0];

    if (!post) return {};

    const yoast = post?.yoast_head_json;

    return {
      title: yoast?.title || post?.title?.rendered,
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
  } catch (error) {
    console.error(error);
    return {};
  }
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    category: string;
    slug: string;
  }>;
}) {
  const { slug } = await params;

  let schemaJson = "";

  try {
    const res = await getPost(slug);

    const post = res?.[0];

    schemaJson = post?.acf?.schema_json || "";
  } catch (error) {
    console.error("Schema Error:", error);
  }

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