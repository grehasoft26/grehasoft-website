'use client';

import { useEffect, useState, useRef } from 'react';
import { getPosts, getCategories } from '@/lib/backend-api';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Settings, Box, Zap, Cloud } from 'lucide-react';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const DEFAULT_POSTS = [
  {
    id: 1,
    slug: "efficiency-enhancements",
    title: { rendered: "How to Boost Enterprise Operational Efficiency" },
    excerpt: { rendered: "Discover key strategies and tools to streamline workflows, eliminate bottlenecks, and improve collaboration across teams." },
    date: "2026-06-01",
    _embedded: {
      author: [{ name: "Admin" }],
      "wp:featuredmedia": [{ source_url: "/images/logo.png" }],
      "wp:term": [[{ name: "Strategy" }]]
    }
  },
  {
    id: 2,
    slug: "inventory-management",
    title: { rendered: "Hardened Inventory and Warehousing Systems" },
    excerpt: { rendered: "Learn how modern inventory tracking databases optimize stock levels, prevent loss, and streamline logistics operations." },
    date: "2026-05-28",
    _embedded: {
      author: [{ name: "Admin" }],
      "wp:featuredmedia": [{ source_url: "/images/logo.png" }],
      "wp:term": [[{ name: "Logistics" }]]
    }
  },
  {
    id: 3,
    slug: "cloud-performance",
    title: { rendered: "Cloud Scaling & Performance Tuning" },
    excerpt: { rendered: "A deep dive into high-availability cloud setups, load balancing, and secure infrastructure deployment patterns." },
    date: "2026-05-20",
    _embedded: {
      author: [{ name: "Admin" }],
      "wp:featuredmedia": [{ source_url: "/images/logo.png" }],
      "wp:term": [[{ name: "Cloud" }]]
    }
  },
  {
    id: 4,
    slug: "rpa-automation",
    title: { rendered: "Robotic Process Automation for Small Businesses" },
    excerpt: { rendered: "How small businesses can leverage RPA to automate repetitive tasks, reduce manual errors, and save administrative hours." },
    date: "2026-05-15",
    _embedded: {
      author: [{ name: "Admin" }],
      "wp:featuredmedia": [{ source_url: "/images/logo.png" }],
      "wp:term": [[{ name: "Automation" }]]
    }
  },
  {
    id: 5,
    slug: "custom-api-sync",
    title: { rendered: "Best Practices for Custom API Integrations" },
    excerpt: { rendered: "A comprehensive guide to constructing safe, high-speed API synchronizations between distributed database environments." },
    date: "2026-05-10",
    _embedded: {
      author: [{ name: "Admin" }],
      "wp:featuredmedia": [{ source_url: "/images/logo.png" }],
      "wp:term": [[{ name: "API Integration" }]]
    }
  },
  {
    id: 6,
    slug: "enterprise-security",
    title: { rendered: "Enterprise Cybersecurity Shield Patterns" },
    excerpt: { rendered: "Essential security guidelines to protect corporate databases, user credentials, and communication channels." },
    date: "2026-05-05",
    _embedded: {
      author: [{ name: "Admin" }],
      "wp:featuredmedia": [{ source_url: "/images/logo.png" }],
      "wp:term": [[{ name: "Security" }]]
    }
  },
  {
    id: 7,
    slug: "saas-architecture",
    title: { rendered: "Constructing Multi-Tenant SaaS Platforms" },
    excerpt: { rendered: "Architectural insights on designing database schemas, permission controls, and billing integrations for SaaS products." },
    date: "2026-05-01",
    _embedded: {
      author: [{ name: "Admin" }],
      "wp:featuredmedia": [{ source_url: "/images/logo.png" }],
      "wp:term": [[{ name: "SaaS" }]]
    }
  }
];

const DEFAULT_CATEGORIES = [
  { id: 1, name: "Strategy", slug: "strategy" },
  { id: 2, name: "Logistics", slug: "logistics" },
  { id: 3, name: "Cloud", slug: "cloud" },
  { id: 4, name: "Automation", slug: "automation" },
  { id: 5, name: "Security", slug: "security" }
];

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  /* 🔥 SCROLL REF */
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPosts({ perPage: 10 })
      .then(({ posts }) => {
        setPosts(posts);
      })
      .catch((err) => console.warn("Failed to fetch posts:", err?.message || err));

    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.warn("Failed to fetch categories:", err?.message || err));
  }, []);

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

  const displayPosts = posts.length > 0 ? posts : DEFAULT_POSTS;
  const displayCategories = categories.length > 0 ? categories : DEFAULT_CATEGORIES;

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
              className="rounded-2xl"
            />

            <div>
              <h2
                className="text-4xl font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: featuredPost.title?.rendered || "" }}
              />
              <p dangerouslySetInnerHTML={{ __html: featuredPost.excerpt?.rendered || "" }} />

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
         <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Side: Headline & Decorative Graphic */}
              <div className="lg:col-span-5 sticky top-32">
                <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Trending</span>
                <h2 className="text-5xl font-bold text-dark mb-8 leading-tight">
                  Trending Articles You Need To Read
                </h2>
                <p className="text-text-gray font-medium mb-12 leading-relaxed">
                  Stay Ahead of the Curve and Dive Deep into the Must-Read Trending Articles that Keep You Informed and Inspired.
                </p>
                
                {/* Decorative Connectivity Graphic */}
                <div className="relative w-full aspect-square max-w-[400px] mx-auto opacity-20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <div 
                      key={deg}
                      className="absolute top-1/2 left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
                      style={{ transform: `rotate(${deg}deg) translateX(40px)` }}
                    />
                  ))}
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <div 
                      key={deg}
                      className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full border-2 border-primary/20 origin-left"
                      style={{ transform: `rotate(${deg}deg) translateX(180px) translateY(-8px)` }}
                    />
                  ))}
                </div>
              </div>

            {/* Right Side: Vertical List */}
             <div className="lg:col-span-7 flex flex-col gap-12">
                {catchUpPosts.map((post, i) => (
                  <TrendingArticleCard key={i} post={post} index={i} />
                ))}
              </div>
</div>
          </div>
        </div>
      </section>

      {/* INSIDER */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom grid md:grid-cols-4 gap-6">
          {insiderTips.map((tip, i) => (
            <TipCard key={i} tip={tip} />
          ))}
        </div>
      </section>

      <CTA />
     
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
      className="group transition-all duration-500 hover:-translate-y-2"
    >
      <div className="aspect-[1.4] rounded-3xl overflow-hidden mb-6">
        <img
          src={post.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="flex justify-between mb-2">
        <span className="text-primary font-bold text-sm">{post.author}</span>
        <span className="text-text-gray text-sm">{post.date}</span>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-primary">
        {post.title}
      </h3>

      <p className="text-text-gray mb-4 line-clamp-3">{post.description}</p>

     <Link
  href={`/blogs/${post.categorySlug}/${post.slug}`}
  className="text-primary font-bold flex items-center gap-2"
>
  Read More <ArrowRight size={16} />
</Link>
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
      <div className="md:col-span-5 aspect-[1.4] rounded-3xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500">
        <img 
          src={post.image} 
          alt={post.title}
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
    <div className="p-6 border rounded-xl hover:shadow-lg transition">
      <Icon className="mb-3" />
      <h3 className="font-bold mb-2">{tip.title}</h3>
      <p>{tip.description}</p>
    </div>
  );
}