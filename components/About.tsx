'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import VideoModal from './videoModal';

export default function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // 🔥 NEW STATE (for WP data)
  const [acf, setAcf] = useState<any>(null);
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/pages?slug=home&_fields=acf"
        );

        const data = res.data[0].acf;
        setAcf(data);

        // 👉 fetch image
        if (data.image) {
          const imgRes = await axios.get(
            `https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/media/${data.image}`
          );
          setImage(imgRes.data.source_url);
        }

        // 👉 fetch video
        if (data.video) {
          const vidRes = await axios.get(
            `https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/media/${data.video}`
          );
          setVideo(vidRes.data.source_url);
        }

      } catch (err) {
        console.error("Error fetching About data:", err);
      }
    };

    fetchData();
  }, []);

  if (!acf) return null;

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              About Grehasoft
            </span>

            {/* ✅ TITLE FROM WP */}
           <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark leading-tight">
  {acf.title_.split(/(\{.*?\})/g).map((part: string, index: number) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      return (
        <span key={index} className="text-primary">
          {part.replace(/[{}]/g, "")}
        </span>
      );
    }
    return part;
  })}
</h2>

            {/* ✅ DESCRIPTION FROM WP */}
            <p className="text-lg text-text-gray mb-8 leading-relaxed">
              {acf.description}
            </p>

            {/* ✅ FEATURES FROM WP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                acf.feature1,
                acf.feature2,
                acf.feature3,
                acf.feature4,
                acf.feature5,
                acf.feature6,
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-dark font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href="/about" className="btn-primary w-full sm:w-auto">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <div
                className="flex items-center gap-4 group cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <span className="text-dark font-semibold group-hover:text-primary transition-colors">
                  Our Success Story
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Video/Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">

              {/* ✅ IMAGE FROM WP */}
             {image && (
  <img
    src={image}
    alt="Grehasoft Team"
    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
  />
)}

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-dark/20 group-hover:bg-dark/10 transition-colors">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsVideoOpen(true)}
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary shadow-2xl group-hover:bg-primary group-hover:text-white transition-all"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </motion.button>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="grid grid-cols-3 gap-4 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                  
                  <div className="text-center border-r border-gray-200">
                    <p className="text-2xl font-bold text-primary">{acf.experience}</p>
                    <p className="text-xs text-text-gray font-medium uppercase tracking-wider">Years Exp</p>
                  </div>

                  <div className="text-center border-r border-gray-200">
                    <p className="text-2xl font-bold text-primary">{acf.projects}</p>
                    <p className="text-xs text-text-gray font-medium uppercase tracking-wider">Projects</p>
                  </div>

                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{acf.satisfaction}</p>
                    <p className="text-xs text-text-gray font-medium uppercase tracking-wider">Satisfaction</p>
                  </div>

                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* ✅ VIDEO MODAL */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={video} // 👈 pass dynamic video
      />
    </section>
  );
}