"use client";

import { useState, useEffect } from "react";
import axios from "@/lib/axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ChevronDown, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { use } from "react";

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
  }
];

const DEFAULT_CATEGORIES = [
  { id: 1, name: "Strategy", slug: "strategy" },
  { id: 2, name: "Logistics", slug: "logistics" },
  { id: 3, name: "Cloud", slug: "cloud" },
  { id: 4, name: "Automation", slug: "automation" },
  { id: 5, name: "Security", slug: "security" }
];

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = use(params);

  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);

  // ✅ pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  /* ================= FETCH ================= */
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // categories
        let allCats = [];
        try {
          const catRes = await axios.get("/wp-json/wp/v2/categories?per_page=100");
          allCats = catRes.data;
          setCategories(allCats);
        } catch (catErr: any) {
          console.warn("Failed to fetch categories client-side:", catErr.message);
          allCats = DEFAULT_CATEGORIES;
          setCategories(DEFAULT_CATEGORIES);
        }

        const currentCategory = allCats.find((c: any) => c.slug === slug);
        if (!currentCategory) {
          setLoading(false);
          return;
        }

        let categoryIds: number[] = [currentCategory.id];

        if (activeTags.length > 0) {
          const selected = allCats
            .filter((c: any) => activeTags.includes(c.name))
            .map((c: any) => c.id);

          categoryIds = selected;
        }

        // ✅ API URL with pagination
        let url = `/wp-json/wp/v2/posts?_embed&per_page=6&page=${page}`;

        if (categoryIds.length > 0) {
          url += `&categories=${categoryIds.join(",")}`;
        }

        if (search) {
          url += `&search=${search}`;
        }

        try {
          const postRes = await axios.get(url);
          setPosts(postRes.data);
          setTotalPages(parseInt(postRes.headers["x-wp-totalpages"]) || 1);
        } catch (postErr: any) {
          console.warn("Failed to fetch posts client-side:", postErr.message);
          setPosts(DEFAULT_POSTS);
          setTotalPages(1);
        }

      } catch (err: any) {
        console.warn("FETCH ERROR:", err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug, activeTags, search, page]);

  /* ================= TAG TOGGLE ================= */
  const toggleTag = (tag: string) => {
    setPage(1); // reset pagination
    setActiveTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const pageTitle =
    categories.find((c: any) => c.slug === slug)?.name || "Category";

  return (
    <main className="min-h-screen bg-white">

      <PageHeader
        title={pageTitle}
        description={`Explore the latest insights in ${pageTitle}`}
        breadcrumb={[
          { name: "Blogs", href: "/blog" },
          { name: pageTitle, href: "#" }
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">

          {/* ================= SEARCH ================= */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={search}
                onChange={(e) => {
                  setPage(1);
                  setSearch(e.target.value);
                }}
                className="w-full pl-14 pr-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-primary outline-none"
              />
            </div>

            <div className="min-w-[200px]">
              <div className="px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 flex justify-between">
                Newest <ChevronDown />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* ================= SIDEBAR ================= */}
            <aside className="lg:col-span-3 space-y-12">

              <div>
                <h3 className="text-xl font-bold mb-6">Tags</h3>

                <div className="flex flex-col gap-4">
                  {categories.map((cat: any) => (
                    <label
                      key={cat.id}
                      onClick={() => toggleTag(cat.name)}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                        activeTags.includes(cat.name)
                          ? "bg-primary border-primary"
                          : "border-gray-300"
                      }`}>
                        {activeTags.includes(cat.name) && (
                          <Check className="w-3 text-white" />
                        )}
                      </div>

                      <span className={`font-medium ${
                        activeTags.includes(cat.name)
                          ? "text-primary"
                          : "text-text-gray"
                      }`}>
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>

              </div>

            </aside>

            {/* ================= POSTS ================= */}
            <div className="lg:col-span-9 flex flex-col gap-10">

              {/* ✅ LOADING */}
              {loading && <p className="text-gray-500">Loading...</p>}

              {/* ❌ EMPTY */}
              {!loading && posts.length === 0 && (
                <p className="text-gray-500">No posts found.</p>
              )}

              {posts.map((post: any, i: number) => {

                const image =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/fallback.jpg";

                const postCats =
                  post._embedded?.["wp:term"]?.[0]
                    ?.filter((t: any) => t.taxonomy === "category")
                    ?.map((t: any) => t.name) || [];

                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="grid md:grid-cols-12 gap-8 group cursor-pointer"
                  >

                    <div className="md:col-span-4 rounded-2xl overflow-hidden">
                      <img
                        src={image}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    <div className="md:col-span-8">

                      <div className="flex flex-wrap gap-2 mb-4">
                        {postCats.map((cat: string, j: number) => (
                          <span key={j} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                            {cat}
                          </span>
                        ))}
                      </div>

                      <h2
                        className="text-2xl font-bold mb-4 group-hover:text-primary"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />

                      <p
                        className="text-text-gray mb-6 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />

                      <Link href={`/blog/${post.slug}`} className="text-primary font-bold">
                        Read More →
                      </Link>

                    </div>

                  </motion.div>
                );
              })}

              {/* ================= PAGINATION ================= */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-3 mt-10">

                  <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                  >
                    Prev
                  </button>

                  <span className="px-4 py-2">
                    {page} / {totalPages}
                  </span>

                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                  >
                    Next
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}