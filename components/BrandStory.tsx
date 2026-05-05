"use client";

import { motion } from "motion/react";
import { History, Target, Users, Rocket, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export default function BrandStory() {
  const [acf, setAcf] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API}/pages?slug=brand-story`);
        const json = await res.json();

        console.log("✅ Brand Story:", json);

        setAcf(json[0]?.acf || {});
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // 🔹 Dynamic milestones (ACF)
  const milestones = [
    {
      year: acf.year1,
      title: acf.title1,
      desc: acf.desc1,
      icon: History,
    },
    {
      year: acf.year2,
      title: acf.title2,
      desc: acf.desc2,
      icon: Rocket,
    },
    {
      year: acf.year3,
      title: acf.title3,
      desc: acf.desc3,
      icon: Target,
    },
    {
      year: acf.year4,
      title: acf.title4,
      desc: acf.desc4,
      icon: Users,
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              {acf.journey_tag || "Our Journey"}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark leading-tight">
              {acf.journey_title1}{" "}
              <span className="text-primary">{acf.journey_highlight}</span>{" "}
              {acf.journey_title2}
            </h2>

            <div className="space-y-6 text-text-gray text-lg leading-relaxed">
              <p>{acf.journey_desc_1}</p>
              <p>{acf.journey_desc_2}</p>
              <p>{acf.journey_desc_3}</p>
            </div>

            <div className="mt-10">
              <Link
                href="/about/brand-story"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                {acf.journey_btn_text || "Read Full Brand Story"}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT TIMELINE */}
          <div className="relative">

            {/* LINE */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-500 relative z-10 ${
                    index % 2 === 1 ? "md:translate-y-12" : ""
                  }`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <span className="text-primary font-bold text-xl mb-2 block">
                    {item.year}
                  </span>

                  <h3 className="text-xl font-bold text-dark mb-3">
                    {item.title}
                  </h3>

                  <p className="text-text-gray text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}