'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, BookOpen, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FAQ() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // ✅ FETCH WORDPRESS DATA
  useEffect(() => {
    fetch("https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/faq")
      .then(res => res.json())
      .then(data => {
        console.log("FAQ API:", data);

        const formatted = data.map((item: any) => ({
          question: item.acf?.question || "",
          answer: item.acf?.answer || ""
        }));

        setFaqs(formatted);
      })
      .catch(err => console.error(err));
  }, []);

  const totalPages = Math.ceil(faqs.length / 2);

  const paginate = (newDirection: number) => {
    if (currentPage + newDirection >= 0 && currentPage + newDirection < totalPages) {
      setDirection(newDirection);
      setCurrentPage(currentPage + newDirection);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      zIndex: 1,
      rotateY: 0,
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      rotateY: direction < 0 ? 90 : -90,
      opacity: 0,
      x: direction < 0 ? 100 : -100,
    }),
  };

  const currentFaqs = faqs.slice(currentPage * 2, currentPage * 2 + 2);

  return (
    <section className="section-padding bg-gray-50/50 relative overflow-hidden perspective-1000">

      {/* Background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">

        {/* HEADER (UNCHANGED) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
           
            Knowledge Base
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-dark"
          >
            Explore Our <span className="text-primary">FAQ Book</span>
          </motion.h2>

          <p className="text-text-gray text-lg">
            Flip through the pages to find answers to your most common questions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">

          {/* NAV BUTTONS */}
          <button
            onClick={() => paginate(-1)}
            disabled={currentPage === 0}
           className={cn(
  "absolute left-4 md:left-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center transition-all border border-gray-100",
  currentPage === 0
    ? "opacity-30 cursor-not-allowed"
    : "hover:bg-primary hover:text-white"
)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            disabled={currentPage === totalPages - 1}
           className={cn(
  "absolute right-4 md:right-1 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center transition-all border border-gray-100",
  currentPage === totalPages - 1
    ? "opacity-30 cursor-not-allowed"
    : "hover:bg-primary hover:text-white"
)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* BOOK */}
          <div className="w-full h-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative flex flex-col md:flex-row">

            {/* Spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden md:block z-20" />

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  rotateY: { duration: 0.5 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full h-full flex flex-col md:flex-row"
              >

                {/* LEFT PAGE */}
                <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-50 flex flex-col">
                  {currentFaqs[0] && (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <HelpCircle className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-bold text-primary/60 uppercase tracking-widest">
                          QUESTION {currentPage * 2 + 1}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-dark mb-6 leading-tight">
                        {currentFaqs[0].question}
                      </h3>

                      <p className="text-text-gray text-lg leading-relaxed">
                        {currentFaqs[0].answer}
                      </p>

                      <div className="mt-auto pt-8 text-xs text-gray-300 font-mono">
                        PAGE {currentPage * 2 + 1}
                      </div>
                    </>
                  )}
                </div>

                {/* RIGHT PAGE */}
                <div className="flex-1 p-8 md:p-12 flex flex-col bg-gray-50/30">
                  {currentFaqs[1] ? (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                          <HelpCircle className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-bold text-accent/60 uppercase tracking-widest">
                          QUESTION {currentPage * 2 + 2}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-dark mb-6 leading-tight">
                        {currentFaqs[1].question}
                      </h3>

                      <p className="text-text-gray text-lg leading-relaxed">
                        {currentFaqs[1].answer}
                      </p>

                      <div className="mt-auto pt-8 text-right text-xs text-gray-300 font-mono">
                        PAGE {currentPage * 2 + 2}
                      </div>
                    </>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                      <BookOpen className="w-16 h-16 mb-4 text-gray-300" />
                      <p className="text-gray-400 italic">End of the FAQ Book</p>
                    </div>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* DOTS */}
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentPage ? 1 : -1);
                  setCurrentPage(i);
                }}
                className={cn(
                  "h-1.5 transition-all duration-300 rounded-full",
                  currentPage === i ? "w-8 bg-primary" : "w-2 bg-gray-200 hover:bg-gray-300"
                )}
              />
            ))}
          </div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-text-gray mb-6">Need more detailed information?</p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2 group">
            Speak to an Expert
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}