"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export default function Portfolio({ isFullPage = false }) {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch Portfolio CPT
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(`${API}/portfolio?_embed`);
        const data = await res.json();

        console.log("✅ Portfolio:", data);
        setProjects(data);
      } catch (error) {
        console.error("❌ Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // ⏳ Loading
  if (loading) {
    return (
      <section className="section-padding text-center">
        <p>Loading portfolio...</p>
      </section>
    );
  }

  // ❌ No Data
  if (!projects || projects.length === 0) {
    return (
      <section className="section-padding text-center">
        <p>No portfolio items found</p>
      </section>
    );
  }
const getTitle = (item: any) => {
  // 1. WordPress title
  if (item?.title?.rendered && item.title.rendered !== "") {
    return item.title.rendered.replace(/<[^>]+>/g, "");
  }

  // 2. ACF title (your current case)
  if (item?.acf?.title && item.acf.title !== "") {
    return item.acf.title;
  }

  // 3. Fallback
  return "No Title";
};
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              OUR PORTFOLIO
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-dark">
              Case Studies of Our{" "}
              <span className="text-primary">Successful Projects</span>
            </h2>
          </div>

          {!isFullPage && (
            <Link
              href="/portfolio"
              className="btn-primary flex items-center"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          )}
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => {
            const image =
              item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
              "/images/fallback.jpg";

            const acf = item.acf || {};

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-xl h-[450px]"
              >
                {/* IMAGE */}
                <img
                  src={image}
                  alt={item.title.rendered}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* HOVER */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-6">

                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
                    <Plus className="text-primary w-6 h-6" />
                  </div>

                  <span className="text-white/80 text-xs uppercase tracking-widest">
                    {acf.subtitle || "Web Development"}
                  </span>

                <h3 className="text-xl font-bold text-white mt-2 mb-4">
  {getTitle(item)}
</h3>
             

                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="bg-white text-primary px-5 py-2 rounded-full text-sm font-semibold"
                  >
                    View Case Study
                  </Link>
                </div>

                {/* BOTTOM */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white/70 text-xs uppercase">
                    {acf.subtitle || "Web Development"}
                  </span>

                  <h3 className="text-lg font-bold text-white">
                    {getTitle(item)}
                  </h3>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}