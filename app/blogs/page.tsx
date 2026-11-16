import type { Metadata } from 'next';
import { getCategoriesStrict, getLatestPostsStrict, getPage } from '@/lib/backend-api';
import { buildPageMetadata } from '@/lib/seo';
import { trimPostCards } from '@/lib/wp-props';
import BlogIndex from '@/components/blog/BlogIndex';

// Real posts are rendered on the server so they are in the initial HTML.
// A backend failure throws (ISR keeps the last good page) instead of
// rendering an empty or placeholder blog.
export const revalidate = 300;

async function getBlogsPage() {
  return await getPage('1276');
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getBlogsPage();

  if (!page) return {};

  return {
    ...buildPageMetadata({
      path: '/blogs',
      yoast: page?.yoast_head_json,
      fallbackTitle: page?.title?.rendered || 'Blogs | Grehasoft',
      fallbackDescription:
        'Latest insights, technology updates, web development, SEO, digital marketing and business growth articles.',
    }),

    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function BlogPage() {
  const [page, posts, categories] = await Promise.all([
    getBlogsPage(),
    getLatestPostsStrict(10),
    getCategoriesStrict(),
  ]);

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

      <BlogIndex
        posts={trimPostCards(posts)}
        categories={categories.map((c: any) => ({ id: c.id, name: c.name, slug: c.slug }))}
      />
    </>
  );
}
