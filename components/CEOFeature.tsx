"use client";

import { motion } from "motion/react";
import { Quote, BookOpen, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import PDFModal from "./PDFModal";
import { getPage } from "@/lib/backend-api";

export default function CEOFeature() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [acf, setAcf] = useState<any>({});
  const [imageUrl, setImageUrl] = useState<string>("");
  const [pdfUrl, setPdfUrl] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const page = await getPage("brand-story");
        const acfData = page?.acf || {};
        setAcf(acfData);

        if (page?.storyImageUrl) {
          setImageUrl(page.storyImageUrl);
        }

        if (page?.storyPdfUrl) {
          setPdfUrl(page.storyPdfUrl);
        }

      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      
      {/* BG */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[100px] -ml-20 -mb-20" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[35%] w-full"
          >
            <div className="relative group">

              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white">
                
                {/* ✅ FIXED IMAGE */}
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt="CEO"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                )}

                {/* BADGE */}
                <div className="absolute top-1 left-6 bg-primary text-white py-2 px-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg transform -rotate-3">
                  {acf.story_badge || "Cover Feature 2025"}
                </div>

                {/* HOVER QUOTE */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-8">
                  <p className="text-white/80 text-sm italic">
                    {acf.story_quote}
                  </p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl hidden md:block" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[55%] w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-6">
              <BookOpen className="w-3 h-3" />
              FEATURED IN BUSINESS INSIGHT MAGAZINE
            </div>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-8 leading-tight">
              {acf.story_title}
            </h2>

            {/* TEXT */}
            <div className="space-y-6 text-gray-600 leading-relaxed max-w-2xl">
              <p className="text-lg font-medium text-dark/80">
                {acf.story_intro}
              </p>

              <p>{acf.story_description}</p>

              <p>{acf.story_secondary}</p>
            </div>

            {/* QUOTE */}
            <motion.div className="mt-12 p-8 bg-white rounded-3xl shadow border-l-4 border-primary relative overflow-hidden">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-gray-50 rotate-12" />

              <p className="text-xl md:text-2xl italic text-dark mb-4">
                “{acf.story_quote}”
              </p>

              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-primary/30" />
                <span className="text-primary font-bold text-xs uppercase">
                  {acf.story_quote_author}
                </span>
              </div>
            </motion.div>

            {/* BUTTON */}
            <div className="mt-12 flex items-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary flex items-center gap-2 text-sm px-10 py-5 rounded-full"
              >
                Read Full Story
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ✅ PDF MODAL */}
      <PDFModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl={pdfUrl}
        title={acf.story_title}
      />
    </section>
  );
}