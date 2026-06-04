'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Clock, Eye } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';

export default function BlogDetails() {
  const { slug } = useParams();

  const [postData, setPostData] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  // 🔥 Extract headings for Contents
  const extractHeadings = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html;

    const headings = Array.from(div.querySelectorAll('h2, h3'));

    return headings.map((el, i) => ({
      id: `section-${i}`,
      text: el.textContent,
    }));
  };

  const DEFAULT_POST_DETAIL = {
    title: "Insights & Technology Strategies",
    contentHtml: `
      <h2>Streamlining Operational Workflows</h2>
      <p>Operational efficiency is key to scaling any modern enterprise. By implementing standardized software pathways, API integrations, and robust database layers, organizations can eliminate latency, minimize operational friction, and support cross-functional collaboration.</p>
      <h3>Hardened Data Synchronization</h3>
      <p>Ensuring data integrity across distributed nodes requires transactional synchronization, safe retry layers, and cached state management. Utilizing caching tools like Redis alongside relational databases like MySQL represents a proven architecture for high-availability enterprise services.</p>
    `,
    contents: [
      { id: "section-0", text: "Streamlining Operational Workflows" },
      { id: "section-1", text: "Hardened Data Synchronization" }
    ],
    author: "Admin",
    date: "June 2026"
  };

  useEffect(() => {
    if (!slug) return;

    // ✅ FETCH CURRENT POST
    axios
      .get(
        `https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
      )
      .then((res) => {
        const post = res.data?.[0];
        if (!post) {
          setPostData(DEFAULT_POST_DETAIL);
          return;
        }

        const div = document.createElement('div');
        div.innerHTML = post.content?.rendered || '';

        const headings = div.querySelectorAll('h2, h3');

        headings.forEach((h, i) => {
          h.setAttribute('id', `section-${i}`);
        });

        const updatedHtml = div.innerHTML;

        setPostData({
          title: post.title?.rendered || "Insights & Technology Strategies",
          contentHtml: updatedHtml,
          contents: extractHeadings(updatedHtml),
          author: post._embedded?.author?.[0]?.name || 'Admin',
          date: post.date ? new Date(post.date).toDateString() : "June 2026",
        });
      })
      .catch((err) => {
        console.warn("Failed to fetch current post details:", err?.message || err);
        setPostData(DEFAULT_POST_DETAIL);
      });

    // ✅ FETCH ALL POSTS (for Prev / Next)
    axios
      .get(
        `https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/posts?per_page=50&_embed`
      )
      .then((res) => {
        if (Array.isArray(res.data)) {
          setAllPosts(res.data);
          const index = res.data.findIndex(
            (p: any) => p.slug === slug
          );
          setCurrentIndex(index);
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch all posts for navigation:", err?.message || err);
      });

    // ✅ RELATED POSTS
    axios
      .get(
        `https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/posts?per_page=3&_embed`
      )
      .then((res) => {
        if (Array.isArray(res.data)) {
          setRelatedPosts(res.data);
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch related posts:", err?.message || err);
      });

  }, [slug]);

  if (!postData) return <div className="p-10">Loading...</div>;

  // 🔥 PREV / NEXT LOGIC
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex !== -1 && currentIndex < allPosts.length - 1
      ? allPosts[currentIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <PageHeader
        title="Blog Details"
        description="Explore insights and updates"
        breadcrumb={[
          { name: 'Blogs', href: '/blog' },
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

          <div className="flex items-center gap-6 text-sm text-text-gray border-b pb-6">
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
              <div className="sticky top-32 bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-bold mb-4">Contents</h3>

                {postData.contents?.map((item: any) => (
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
                    href={`/blog/${prevPost.slug}`}
                    className="text-dark font-medium hover:text-primary"
                  >
                    ← Prev blog
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    href={`/blog/${nextPost.slug}`}
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

              {relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="mb-6 cursor-pointer group">
                    <img
                      src={
                        post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                        '/fallback.jpg'
                      }
                      className="rounded-xl mb-3"
                    />
                    <p
                      className="font-semibold text-sm group-hover:text-primary"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
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

      <CTA />
      <Footer />

    </main>
  );
}