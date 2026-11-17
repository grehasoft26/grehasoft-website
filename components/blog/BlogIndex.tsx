'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Settings, Box, Zap, Cloud } from 'lucide-react';

import PageHeader from '@/components/PageHeader';
import CTABottomSection from '@/components/CTABottomSection';
import Footer from '@/components/Footer';

/** Featured image alt text from the WordPress Media Library; '' (decorative) when unset. */
const featuredImageAlt = (post: any): string =>
  post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text || "";

// Posts are fetched on the server (app/blogs/page.tsx) so they are in the initial HTML.
export default function BlogIndex({ posts, categories }: { posts: any[]; categories: any[] }) {

  /* 🔥 SCROLL REF */
  const scrollRef = useRef<HTMLDivElement>(null);

  /* 🔥 AUTO SCROLL */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      container.scrollBy({ top: 250, behavior: 'smooth' });

      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const displayPosts = posts;
  const displayCategories = categories;

  const featuredPost = displayPosts[0];

  const industryUpdates = displayPosts.slice(1, 4).map((post: any) => ({
  title: post.title?.rendered || "Untitled Article",
  description: (post.excerpt?.rendered || "").replace(/<[^>]+>/g, ''),
  author: post._embedded?.author?.[0]?.name || "Admin",
  date: post.date
    ? new Date(post.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "June 2026",
  image:
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/logo.png",
  imageAlt: featuredImageAlt(post),
  slug: post.slug,
  categorySlug:
    post._embedded?.["wp:term"]?.[0]
      ?.find((t: any) => t.taxonomy === "category")
      ?.slug || "uncategorized",
}));

  const catchUpPosts = displayPosts.slice(4, 7).map((post: any) => ({
  title: post.title?.rendered || "Untitled Article",
  description: (post.excerpt?.rendered || "").replace(/<[^>]+>/g, ''),
  image:
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/logo.png",
  imageAlt: featuredImageAlt(post),
  slug: post.slug,
  category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog",
  categorySlug:
    post._embedded?.["wp:term"]?.[0]
      ?.find((t: any) => t.taxonomy === "category")
      ?.slug || "uncategorized",
}));

  const insiderTips = [
    { title: "Efficiency Enhancements", description: "Automation tips", icon: Settings },
    { title: "Inventory Management", description: "Better decisions", icon: Box },
    { title: "Enterprise Security", description: "Security tips", icon: Zap },
    { title: "Cloud Performance", description: "Cloud optimization", icon: Cloud }
  ];
const featuredCategory =
  featuredPost?._embedded?.["wp:term"]?.[0]
    ?.find((t: any) => t.taxonomy === "category")
    ?.slug || "uncategorized";


    
  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Grehasoft Blog - IT & Digital Marketing Insights"
        description="Stay updated with the latest SEO, web development, and 
technology trends from our team in Kochi"
        breadcrumb={[{ name: 'Blogs', href: '/blogs' }]}
      />

      {/* FEATURED */}
      {featuredPost && (
        <section className="section-padding">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">

            <img
              src={featuredPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/logo.png"}
              alt={featuredImageAlt(featuredPost)}
              className="rounded-box-lg"
            />

            <div>
              <h2
                className="text-4xl font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: featuredPost.title?.rendered || "" }}
              />
              {/* div, not p: WordPress excerpts contain their own <p>. */}
              <div dangerouslySetInnerHTML={{ __html: featuredPost.excerpt?.rendered || "" }} />

              <Link href={`/blogs/${featuredCategory}/${featuredPost.slug}`} className="text-primary font-bold">
                Read More →
              </Link>
            </div>

          </div>
        </section>
      )}

      {/* RECENT */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">

          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Recent Articles</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industryUpdates.map((post, i) => (
              <ArticleCard key={i} post={post} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* CATEGORY */}
      {/* <section className="section-padding">
        <div className="container-custom flex flex-wrap gap-3 justify-center">
          {displayCategories.map((cat: any) => (
            <Link
              key={cat.id}
              href={`/blogs/category/${cat.slug}`}
              className="px-6 py-2.5 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section> */}

      {/* TRENDING */}
      <section className="section-padding bg-white">
         <div className="container-custom">
         <div className="mb-16 md:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Side: Headline & Decorative Graphic */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Trending</span>
                <h2 className="text-5xl font-bold text-dark mb-8 leading-tight">
                  Trending Articles You Need To Read
                </h2>
                <p className="text-text-gray font-medium mb-12 leading-relaxed">
                  Stay Ahead of the Curve and Dive Deep into the Must-Read Trending Articles that Keep You Informed and Inspired.
                </p>
                
                {/* Decorative Illustration */}
                <Image
                  src="/images/blogs-trending-illustration.webp"
                  alt=""
                  width={1254}
                  height={1254}
                  sizes="(min-width: 768px) 400px, 320px"
                  className="w-full max-w-[320px] md:max-w-[400px] h-auto mx-auto object-contain"
                />
              </div>

            {/* Right Side: Vertical List */}
             <div className="lg:col-span-7 flex flex-col gap-12">
                {catchUpPosts.map((post, i) => (
                  <TrendingArticleCard key={i} post={post} index={i} />
                ))}
              </div>
</div>
          </div>

          {/* INSIDER */}
          <div className="grid md:grid-cols-4 gap-6 pb-2 md:pb-0">
            {insiderTips.map((tip, i) => (
              <TipCard key={i} tip={tip} />
            ))}
          </div>
        </div>
      </section>

      <CTABottomSection />
     
    </main>
  );
}

/* ================= COMPONENTS ================= */

function ArticleCard({ post, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-box-lg shadow-[0_4px_20px_rgba(5,4,74,0.06)] transition-all duration-500 hover:-translate-y-2"
    >
      <div className="aspect-[1.4] rounded-box-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col flex-grow p-6">
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 mb-2">
          <span className="text-primary font-bold text-sm">{post.author}</span>
          <span className="text-text-gray text-sm whitespace-nowrap">{post.date}</span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-primary">
          {post.title}
        </h3>

        <p className="text-text-gray mb-4 line-clamp-3">{post.description}</p>

        <Link
          href={`/blogs/${post.categorySlug}/${post.slug}`}
          className="mt-auto text-primary font-bold flex items-center gap-2"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

function TrendingArticleCard({ post, index }: { post: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center group cursor-pointer"
    >
      <div className="md:col-span-5 aspect-[1.4] rounded-box-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500">
        <img 
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="md:col-span-7">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4 uppercase tracking-wider">
          {post.category}
        </span>
        <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-text-gray text-sm mb-6 line-clamp-2 leading-relaxed">
          {post.description}
        </p>
        <Link   href={`/blogs/${post.categorySlug}/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
function TipCard({ tip }: any) {
  const Icon = tip.icon;
  return (
    <div className="p-6 border rounded-box-lg hover:shadow-lg transition">
      <Icon className="mb-3" />
      <h3 className="font-bold mb-2">{tip.title}</h3>
      <p>{tip.description}</p>
    </div>
  );
}