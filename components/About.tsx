"use client";

import { motion } from "motion/react";
import { CheckCircle2, Play, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import VideoModal from "./videoModal";

import { AboutData } from "@/types/wordpress";

interface AboutProps {
  data?: AboutData | null;
}

export default function About({ data }: AboutProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  const acf = data;

  if (!acf) return null;

  return (
    <section
      id="about"
      className="section-padding bg-white overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                 Company Overview Section
              </span>
            </div>
            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark leading-tight">
              {acf.title_
                ?.split(/(\{.*?\})/g)
                .map((part: string, index: number) => {
                  if (
                    part.startsWith("{") &&
                    part.endsWith("}")
                  ) {
                    return (
                      <span
                        key={index}
                        className="text-primary"
                      >
                        {part.replace(/[{}]/g, "")}
                      </span>
                    );
                  }

                  return part;
                })}
            </h2>

            {/* DESCRIPTION */}
            <p className="text-lg text-text-gray mb-8 leading-relaxed">
              {acf.description}
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                acf.feature1,
                acf.feature2,
                acf.feature3,
                acf.feature4,
                acf.feature5,
                acf.feature6,
              ]
                .filter(Boolean)
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />

                    <span className="text-dark font-medium">
                      {item}
                    </span>
                  </div>
                ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/about-us"
                className="btn-primary w-full sm:w-auto"
              >
                Learn More About Us

                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <div
                className="flex items-center gap-4 group cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <div
                  className="
                    w-12 h-12 rounded-full
                    bg-accent/10
                    flex items-center justify-center
                    text-accent
                    group-hover:bg-accent
                    group-hover:text-white
                    transition-all
                  "
                >
                  <Play className="w-5 h-5 fill-current" />
                </div>

                <span
                  className="
                    text-dark font-semibold
                    group-hover:text-primary
                    transition-colors
                  "
                >
                  Our Success Story
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="
                relative rounded-3xl overflow-hidden
                shadow-2xl aspect-[4/3] group
              "
            >

              {/* IMAGE */}
             {acf.image_url?.url && (
  <img
    src={acf.image_url.url}
                  alt="Grehasoft Team"
                  className="
                    w-full h-full object-cover
                    transform group-hover:scale-105
                    transition-transform duration-700
                  "
                />
              )}

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  bg-dark/20
                  group-hover:bg-dark/10
                  transition-colors
                "
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVideoOpen(true)}
                  className="
                    w-20 h-20 rounded-full bg-white
                    flex items-center justify-center
                    text-primary shadow-2xl
                    group-hover:bg-primary
                    group-hover:text-white
                    transition-all
                  "
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </motion.button>
              </div>

              {/* STATS */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div
                  className="
                    grid grid-cols-3 gap-4 p-6
                    bg-white/90 backdrop-blur-md
                    rounded-2xl shadow-lg
                    border border-white/20
                  "
                >

                  <div className="text-center border-r border-gray-200">
                    <p className="text-2xl font-bold text-primary">
                      {acf.experience}
                    </p>

                    <p
                      className="
                        text-xs text-text-gray
                        font-medium uppercase tracking-wider
                      "
                    >
                      Years Exp
                    </p>
                  </div>

                  <div className="text-center border-r border-gray-200">
                    <p className="text-2xl font-bold text-primary">
                      {acf.projects}
                    </p>

                    <p
                      className="
                        text-xs text-text-gray
                        font-medium uppercase tracking-wider
                      "
                    >
                      Projects
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">
                      {acf.satisfaction}
                    </p>

                    <p
                      className="
                        text-xs text-text-gray
                        font-medium uppercase tracking-wider
                      "
                    >
                      Satisfaction
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* DECORATION */}
            <div
              className="
                absolute -top-10 -right-10
                w-40 h-40 bg-accent/10
                rounded-full blur-3xl -z-10
              "
            />

            <div
              className="
                absolute -bottom-10 -left-10
                w-40 h-40 bg-primary/10
                rounded-full blur-3xl -z-10
              "
            />
          </motion.div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
       videoUrl={acf.video_url}
      />
    </section>
  );
}