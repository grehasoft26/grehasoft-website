import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, Eye } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CTABottomSection from '@/components/CTABottomSection';
import { getAllPostsStrict, getPostStrict } from '@/lib/backend-api';
import { postCategories, postPath } from '@/lib/internal-href';
import { SITE_URL, absoluteUrl, buildPageMetadata, decodeEntities, plainTextExcerpt, serializeJsonLd } from '@/lib/seo';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// ISR, like the service routes: rendered on first request, regenerated at most
// every 5 minutes. Only a post the backend reports as missing, or a category
// the post does not belong to, produces notFound(); backend failures throw so
// they are never cached as a 404.
export const revalidate = 300;

export async function generateStaticParams() {
  return [];
}

/** The post, when it exists and the URL category is one of its categories. */
async function getPostForRoute(category: string, slug: string) {
  const post = await getPostStrict(slug);
  if (!post) return null;
  const inCategory = postCategories(post).some((c) => c.slug === category.toLowerCase());
  return inCategory ? post : null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await getPostForRoute(category, slug);

  if (!post) return {};

  return buildPageMetadata({
    // A post listed in several categories is canonical under its first one.
    path: postPath(post),
    yoast: post.yoast_head_json,
    fallbackTitle: decodeEntities(post.title?.rendered || ''),
    fallbackDescription: plainTextExcerpt(post.excerpt?.rendered || ''),
    type: 'article',
    publishedTime: post.date_gmt ? `${post.date_gmt}Z` : undefined,
    modifiedTime: post.modified_gmt ? `${post.modified_gmt}Z` : undefined,
  });
}

/** Adds section ids to h2/h3 headings and lists them for the Contents box. */
function prepareContent(html: string) {
  const contents: { id: string; text: string }[] = [];
  const contentHtml = html.replace(/<(h[23])\b([^>]*)>([\s\S]*?)<\/\1>/gi, (_match, tag: string, attrs: string, inner: string) => {
    const id = `section-${contents.length}`;
    contents.push({ id, text: decodeEntities(inner.replace(/<[^>]*>/g, '')).trim() });
    return `<${tag}${attrs.replace(/\s+id\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/i, '')} id="${id}">${inner}</${tag}>`;
  });
  return { contentHtml, contents };
}

/** The post's own ACF schema when it is valid JSON, otherwise BlogPosting built from the post. */
function postSchema(post: any): string {
  const acfSchema = post.acf?.schema_json;
  if (typeof acfSchema === 'string' && acfSchema.trim()) {
    try {
      JSON.parse(acfSchema);
      return acfSchema;
    } catch {
      console.warn(`[Blog] Invalid ACF schema_json on post ${post.slug}; using generated BlogPosting.`);
    }
  }

  const url = absoluteUrl(postPath(post));
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return serializeJsonLd({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    url,
    headline: decodeEntities(post.title?.rendered || ''),
    ...(post.excerpt?.rendered ? { description: plainTextExcerpt(post.excerpt.rendered, 300) } : {}),
    ...(image ? { image } : {}),
    ...(post.date_gmt ? { datePublished: `${post.date_gmt}Z` } : {}),
    ...(post.modified_gmt ? { dateModified: `${post.modified_gmt}Z` } : {}),
    // Posts are published from the company's own WordPress account.
    author: { '@type': 'Organization', name: 'Grehasoft', url: `${SITE_URL}/` },
    publisher: { '@type': 'Organization', name: 'Grehasoft', url: `${SITE_URL}/` },
  });
}

const featuredImage = (post: any) => post?._embedded?.['wp:featuredmedia']?.[0]?.source_url;

export default async function BlogDetails({ params }: PageProps) {
  const { category, slug } = await params;

  const post = await getPostForRoute(category, slug);
  if (!post) {
    notFound();
  }

  // Prev / Next and related posts are secondary: if the list cannot be loaded
  // the article still renders without them.
  let allPosts: any[] = [];
  try {
    allPosts = await getAllPostsStrict();
  } catch (error) {
    console.warn('Failed to fetch posts for navigation:', error);
  }

  const { contentHtml, contents } = prepareContent(post.content?.rendered || '');
  const postData = {
    title: post.title?.rendered || '',
    contentHtml,
    contents,
    author: post._embedded?.author?.[0]?.name || 'Admin',
    date: post.date ? new Date(post.date).toDateString() : '',
  };

  // 🔥 PREV / NEXT LOGIC
  const currentIndex = allPosts.findIndex((p: any) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex !== -1 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;
  const relatedPosts = allPosts.slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: postSchema(post) }}
      />

      {/* HEADER */}
      <PageHeader
        title="Blog Details"
        description="Explore insights and updates"
        titleTag="p"
        breadcrumb={[
          { name: 'Blogs', href: '/blogs' },
          { name: 'Details', href: '#' },
        ]}
      />

      {/* TITLE SECTION */}
      <section className="section-padding">
        <div className="container-custom">

          <h1
            className="text-5xl font-bold text-dark mb-6"
            dangerouslySetInnerHTML={{ __html: postData.title }}
          />
           <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium capitalize">
    {category.replace(/-/g, ' ')}
  </span>
          <div className="flex items-center gap-6 text-sm text-text-gray border-b pb-6 mt-3">
            <span>{postData.author}</span>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              3 min read
            </div>

            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              --
            </div>

            <span className="ml-auto font-medium">{postData.date}</span>
          </div>

        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="section-padding pt-0">
        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* LEFT - CONTENTS */}
            <div className="lg:col-span-3">
              <div className="sticky top-32 bg-gray-50 p-6 rounded-box-lg">
                <h3 className="font-bold mb-4">Contents</h3>

                {postData.contents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm py-2 text-gray-600 hover:text-primary"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>

            {/* CENTER - CONTENT */}
            <div className="lg:col-span-6">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />

              {/* 🔥 PREV / NEXT */}
              <div className="flex justify-between mt-12">

                {prevPost ? (
                  <Link
  href={postPath(prevPost)}
  className="text-dark font-medium hover:text-primary"
>
  ← Prev blog
</Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    href={postPath(nextPost)}
                    className="text-dark font-medium hover:text-primary"
                  >
                    Next blog →
                  </Link>
                ) : (
                  <div />
                )}

              </div>
            </div>

            {/* RIGHT - RELATED */}
            <div className="lg:col-span-3">
              <h3 className="font-bold mb-6">Related Insights</h3>

              {relatedPosts.map((related) => (
    <Link
      key={related.id}
      href={postPath(related)}
    >
                  <div className="mb-6 cursor-pointer group">
                    <img
                      src={featuredImage(related) || '/fallback.jpg'}
                      alt={decodeEntities(related.title?.rendered || '')}
                      className="rounded-box-sm mb-3"
                    />
                    <p
                      className="font-semibold text-sm group-hover:text-primary"
                      dangerouslySetInnerHTML={{
                        __html: related.title?.rendered || '',
                      }}
                    />
                    <span className="text-primary text-sm">Read More →</span>
                  </div>
                </Link>
              ))}

            </div>

          </div>

        </div>
      </section>

      <CTABottomSection />

    </main>
  );
}
