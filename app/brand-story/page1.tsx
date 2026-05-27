"use client";

import PageHeader from '@/components/PageHeader';
import BrandStory from '@/components/BrandStory';
import CTA from '@/components/CTA';
import { Quote, Sparkles, Heart, Zap } from 'lucide-react';
import Footer from '@/components/Footer';
import CEOFeature from '@/components/CEOFeature';
import { useEffect, useState } from "react";
import LogoEvolution from '@/components/LogoEvolution';

const API = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export default function BrandStoryPage() {
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

  return (
    <main className="min-h-screen">
      <PageHeader
        title="Our Brand Story"
        description="The heart and soul of Grehasoft – our journey from a small startup to a global technology partner."
        breadcrumb={[
          { name: 'About', href: '/about' },
          { name: 'Brand Story', href: '/about/brand-story' },
        ]}
      />

      <BrandStory />
       <LogoEvolution />
      <CEOFeature />

      {/* Detailed Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="relative">
              <img
                src="/images/g1.png"
                alt="Grehasoft Team"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />

              {/* QUOTE BOX */}
              <div className="absolute -bottom-6 -right-6 
                p-5 md:p-6 
                bg-primary/95 backdrop-blur-md 
                rounded-xl text-white shadow-lg 
                hidden md:block 
                max-w-xs">

                <Quote className="w-8 h-8 mb-3 opacity-40" />

                <p className="text-sm md:text-base font-medium leading-relaxed italic">
                  {acf.quote_text || "Our story is not just about technology; it's about the people we've helped and the dreams we've enabled."}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-white/30 overflow-hidden">
                    <img src={acf.quote_image || "/images/ceo.jpg"} alt="CEO" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {acf.quote_author || "Founder & CEO"}
                    </p>
                    <p className="text-xs opacity-70">
                      {acf.quote_role || "Grehasoft"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-12">

              {/* PHILOSOPHY */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-dark">
                  {acf.philosophy_title || (
                    <>
                      The <span className="text-primary">Grehasoft</span> Philosophy
                    </>
                  )}
                </h2>

                <p className="text-text-gray text-lg leading-relaxed">
                  {acf.philosophy_desc}
                </p>
              </div>

              {/* VALUES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Sparkles, title: acf.value1_title, desc: acf.value1_desc },
                  { icon: Heart, title: acf.value2_title, desc: acf.value2_desc },
                  { icon: Zap, title: acf.value3_title, desc: acf.value3_desc },
                  { icon: Heart, title: acf.value4_title, desc: acf.value4_desc },
                ].map((item, index) => (
                  <div key={index} className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-dark">
                      {item.title}
                    </h3>

                    <p className="text-text-gray text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* FUTURE */}
              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-dark mb-4">
                  {acf.future_title || "Looking to the Future"}
                </h3>

                <p className="text-text-gray leading-relaxed">
                  {acf.future_desc}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}