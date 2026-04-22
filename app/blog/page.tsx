'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'motion/react';
import Link from 'next/link';
import {
  User, Clock, Eye, Send, ArrowRight,
  ChevronRight, ChevronLeft, Settings, Box, Zap, Cloud
} from 'lucide-react';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/posts?_embed")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const featuredPost = posts[0];

  const industryUpdates = posts.slice(1, 4).map((post: any) => ({
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
    author: post._embedded?.author?.[0]?.name || "Admin",
    date: new Date(post.date).toDateString(),
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/fallback.jpg",
    slug: post.slug
  }));

  const catchUpPosts = posts.slice(4, 7).map((post: any) => ({
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
    category: "Blog",
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/fallback.jpg",
    slug: post.slug
  }));

  const categories = [
    "Data Analytics","Press Release","Agentic AI","People and Culture","UI/UX",
    "Software Quality Assurance","DevSecOps","Software Development","Digital Marketing",
    "Web Application","Social Media","Web Design","Digital Transformation","Artificial Intelligence"
  ];

  const insiderTips = [
    { title: "Efficiency Enhancements", description: "Automation tips", isFeatured: true, icon: Settings },
    { title: "Inventory Management", description: "Better decisions", isFeatured: false, icon: Box },
    { title: "Enterprise Security", description: "Security tips", isFeatured: false, icon: Zap },
    { title: "Cloud Performance", description: "Cloud optimization", isFeatured: false, icon: Cloud }
  ];

  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title="Our Blog"
        description="Stay updated with the latest trends and insights"
        breadcrumb={[{ name: 'Blogs', href: '/blog' }]}
      />

      {/* ================= FEATURED ================= */}
      {featuredPost && (
        <section className="section-padding">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">

            <img
              src={featuredPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
              className="rounded-2xl"
            />

            <div>
              <h2
                className="text-4xl font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: featuredPost.title.rendered }}
              />
              <p
                dangerouslySetInnerHTML={{ __html: featuredPost.excerpt.rendered }}
              />
              <Link href={`/blog/${featuredPost.slug}`} className="text-primary font-bold">
                Read More →
              </Link>
            </div>

          </div>
        </section>
      )}

      {/* ================= RECENT ================= */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">

          <div className="flex justify-between mb-12">
            <h2 className="text-4xl font-bold">Our Recent Articles</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industryUpdates.map((post, i) => (
              <ArticleCard key={i} post={post} />
            ))}
          </div>

        </div>
      </section>

      {/* ================= CATEGORY ================= */}
      <section className="section-padding">
        <div className="container-custom flex flex-wrap gap-3 justify-center">
          {categories.map((cat, i) => (
            <Link key={i} href="#" className="px-4 py-2 border rounded-full">
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* ================= TRENDING ================= */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12">

          <div>
            <h2 className="text-4xl font-bold mb-6">Trending Articles</h2>
            <p>Latest trending blogs</p>
          </div>

          <div className="space-y-8">
            {catchUpPosts.map((post, i) => (
              <TrendingArticleCard key={i} post={post} />
            ))}
          </div>

        </div>
      </section>

      {/* ================= INSIDER ================= */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom grid md:grid-cols-4 gap-6">
          {insiderTips.map((tip, i) => (
            <TipCard key={i} tip={tip} />
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="section-padding text-center">
        <h2 className="text-4xl font-bold mb-4">Subscribe</h2>
        <input className="border p-3 rounded-full w-96" placeholder="Email" />
      </section>

      <CTA />
      <Footer />
    </main>
  );
}


/* ================= COMPONENTS ================= */

function ArticleCard({ post }: any) {
  return (
    <div>
      <img src={post.image} className="rounded-xl mb-4" />
      <h3 className="font-bold">{post.title}</h3>
      <Link href={`/blog/${post.slug}`}>Read More →</Link>
    </div>
  );
}

function TrendingArticleCard({ post }: any) {
  return (
    <div className="flex gap-4">
      <img src={post.image} className="w-32 h-20 object-cover rounded" />
      <div>
        <h4>{post.title}</h4>
        <Link href={`/blog/${post.slug}`}>Read More</Link>
      </div>
    </div>
  );
}

function TipCard({ tip }: any) {
  return (
    <div className="p-6 border rounded-xl">
      <h3>{tip.title}</h3>
      <p>{tip.description}</p>
    </div>
  );
}

