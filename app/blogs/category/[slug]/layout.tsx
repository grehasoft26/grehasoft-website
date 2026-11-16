import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import { getCategoriesStrict } from '@/lib/backend-api';
import { buildPageMetadata, decodeEntities } from '@/lib/seo';

// The category page itself is a client component (search and tag filters);
// this server layout gives it metadata and returns a real 404 for categories
// that do not exist. A backend failure throws instead of becoming a 404.

async function getCategory(slug: string) {
  const categories = await getCategoriesStrict();
  return categories.find((c: any) => c.slug === slug.toLowerCase()) || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) return {};

  return buildPageMetadata({
    path: `/blogs/category/${category.slug}`,
    yoast: category.yoast_head_json,
    fallbackTitle: decodeEntities(category.name || ''),
  });
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(await getCategory(slug))) {
    notFound();
  }

  return <>{children}</>;
}
