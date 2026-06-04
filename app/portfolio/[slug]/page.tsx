"use client";

import { use, useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, CheckCircle2 } from "lucide-react";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import ConsultationPopup from "@/components/ConsultationPopup";
import Footer from "@/components/Footer";
import axiosInstance from "@/lib/axios";

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export default function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  // ✅ FIX FOR NEXTJS LATEST
  const { slug } = use(params);

  const [data, setData] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);

  // 🔥 FETCH SINGLE PROJECT
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/wp-json/wp/v2/portfolio?slug=${slug}&_embed`);
        const json = res.data;

        console.log("✅ Project:", json);

        // ✅ FIX 404
        if (!json || json.length === 0) {
          setData(null);
          return;
        }

        setData(json[0]);

        // 🔥 RELATED PROJECTS
        const res2 = await axiosInstance.get(`/wp-json/wp/v2/portfolio?_embed`);
        const json2 = res2.data;

        setRelated(json2);
      } catch (err) {
        console.error("Error loading project detail:", err);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  // ✅ LOADING
  if (data === undefined || data === null) {

    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading...</p>
      </main>
    );

  }

  const acf = data.acf || {};

  const image =
    data?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/fallback.jpg";

  return (

    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <PageHeader
        title="Portfolio Details"
        description="Discover detailed insights into our projects, showcasing our approach, solutions, and the impact we deliver for our clients."
        breadcrumb={[
          { name: "Portfolio", href: "/portfolio" },
          { name: "Details", href: "#" },
        ]}
      />

      {/* HERO */}
      <section className="pt-18 pb-16 bg-gray-50">

        <div className="container-custom">

          <div className="max-w-5xl mx-auto">

            {/* {*<Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-text-gray hover:text-primary mb-8 font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>*} */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >

              <span className="px-4 py-1  rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">

                {acf.subtitle || "Web Development"}

              </span>

              <h1 className="text-4xl mt-4 md:text-6xl font-bold text-dark mb-6 leading-tight">

                {data.title?.rendered || "No Title"}

              </h1>

              <p className="text-xl text-text-gray max-w-3xl leading-relaxed">

                {acf.hero_subtitle}

              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-white">

        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* SIDEBAR */}
            <aside className="lg:col-span-4 order-2 lg:order-1">

              <div className="sticky top-32 space-y-12">

                {/* SERVICES */}
                <div>

                  <h3 className="text-2xl font-bold text-dark mb-8">
                    Services Provided
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {[
                      acf.service_1,
                      acf.service_2,
                      acf.service_3,
                      acf.service_4,
                      acf.service_5,
                    ]
                      .filter(Boolean)
                      .map((service, i) => (

                        <span
                          key={i}
                          className="px-6 py-3 rounded-full border border-gray-200 text-sm font-bold text-text-gray hover:border-primary hover:text-primary transition-all shadow-sm"
                        >

                          {service}

                        </span>

                      ))}

                  </div>

                </div>

              {/* STATS */}
<div className="border-t border-gray-100 pt-10">

  <div className="space-y-8">

    {/* LANGUAGE */}
    <div className="grid grid-cols-[120px_1fr] gap-6 items-start">

      <span className="text-gray-500 font-medium">
        Language
      </span>

      <p className="font-bold text-dark leading-relaxed">
        {acf.language}
      </p>

    </div>

    {/* TIMESCALE */}
    <div className="grid grid-cols-[120px_1fr] gap-6 items-start">

      <span className="text-gray-500 font-medium">
        Timescale
      </span>

      <p className="font-bold text-dark leading-relaxed">
        {acf.duration}
      </p>

    </div>

    {/* SYSTEM */}
    <div className="grid grid-cols-[120px_1fr] gap-6 items-start">

      <span className="text-gray-500 font-medium">
        System
      </span>

      <p className="font-bold text-dark leading-relaxed">
        {acf.system}
      </p>

    </div>

  </div>

  {/* BUTTON */}
  {acf.live_site_url && (

    <div className="mt-10">

      <Link
        href={acf.live_site_url}
        target="_blank"
        className="group inline-flex items-center gap-3 text-lg font-bold text-primary hover:text-dark transition-all"
      >

        View Live Site

        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />

      </Link>

    </div>

  )}

</div>

              </div>

            </aside>

            {/* RIGHT CONTENT */}
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-20">

              <div className="space-y-10">

                <h2 className="text-4xl font-bold text-dark leading-tight border-l-4 border-primary pl-6">

                  {acf.main_title}

                </h2>

                <div
  className="text-lg text-gray-600 leading-relaxed space-y-6"
  dangerouslySetInnerHTML={{
    __html: acf.short_desc,
  }}
/>

                <div className="rounded-3xl overflow-hidden shadow-2xl">

                  <img
                    src={image}
                    alt={data.title?.rendered}
                    className="w-full"
                  />

                </div>

              </div>

              {/* CHALLENGE + SOLUTION */}
              <div className="grid md:grid-cols-2 gap-12">

                <div>

                  <h3 className="text-2xl font-bold mb-4">
                    The Challenge
                  </h3>

                 <div
 className="text-lg text-gray-600 leading-relaxed space-y-6"
  dangerouslySetInnerHTML={{
    __html: acf.challenge,
  }}
/>

                </div>

                <div>

                  <h3 className="text-2xl font-bold mb-4">
                    Our Solution
                  </h3>

                  <div
                    className="text-lg text-gray-600 leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{
                      __html: acf.solution,
                    }}
                  />

                </div>

              </div>

              {/* RESULTS */}
              <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16">

                <h3 className="text-3xl font-bold text-center mb-10">

                  Project Results

                </h3>

                <div className="grid sm:grid-cols-2 gap-8">

                  {[
                    acf.result_1,
                    acf.result_2,
                    acf.result_3,
                    acf.result_4,
                  ]
                    .filter(Boolean)
                    .map((r, i) => (

                      <div
                        key={i}
                        className="flex gap-4 p-6 bg-white rounded-2xl"
                      >

                        <CheckCircle2 className="text-primary" />

                        <p className="font-bold">{r}</p>

                      </div>

                    ))}

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* RELATED */}
      <section className="section-padding bg-gray-50">

        <div className="container-custom">

          <h2 className="text-4xl font-bold mb-4">

            Related Works

          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {related
              .filter((item) => item.id !== data.id)
              .slice(0, 2)
              .map((item) => {

                const img =
                  item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

                return (

                  <Link
                    key={item.id}
                    href={`/portfolio/${item.slug}`}
                  >

                    <div className="group">

                      <img
                        src={img}
                        alt={item.title?.rendered}
                        className="rounded-3xl mb-6"
                      />

                      <h3 className="text-2xl font-bold group-hover:text-primary">

                        {item.title?.rendered || "No Title"}

                      </h3>

                      <span className="text-primary font-bold">

                        View Case Study →

                      </span>

                    </div>

                  </Link>

                );

              })}

          </div>

        </div>

      </section>

      <CTA />
      <ConsultationPopup />
      <Footer />
    </main>

  );

}