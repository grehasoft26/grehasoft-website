'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Slide = {
  title: string;
  video: string;
  thumbnail: string;
};

export default function Hero() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Fetch slides + media URLs
 // Fetch slides + media URLs
useEffect(() => {
  fetch("https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/hero-slide")
    .then(res => res.json())
    .then((data) => {
      const slides = data.map((post: any) => ({
        title: post.acf?.slide_title || "",
        video: post.acf?.slide_video || "",
        thumbnail: post.acf?.slide_thumbnail || ""
      }));

      console.log("Slides:", slides);
      setSlides(slides);
    })
    .catch(err => console.log("Fetch error:", err));
}, []);

  // Mobile check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Progress + Auto slide
  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentIndex(curr => (curr + 1) % slides.length);
          return 0;
        }
        return prev + 0.4;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [slides]);

  if (!slides.length) return null;

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-dark">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {!isMobile && slides[currentIndex]?.video ? (
              <video
                autoPlay
                muted={isMuted}
                playsInline
                loop
                className="w-full h-full object-cover"
              >
                <source src={slides[currentIndex].video} type="video/mp4" />
              </video>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slides[currentIndex]?.thumbnail})` }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-left text-white px-4">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase text-white">
            {slides[currentIndex]?.title}
          </h1>

          <p className="text-white/70 mb-10 max-w-lg uppercase">
            Grehasoft delivers premium software solutions and digital transformation strategies tailored to your vision.
          </p>

          <Link href="/services" className="flex items-center gap-3 uppercase tracking-widest text-sm">
            Explore Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Progress Bars */}
      <div className="absolute bottom-12 left-12 flex gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            className="relative w-12 h-[2px] bg-white/20 cursor-pointer"
            onClick={() => {
              setCurrentIndex(index);
              setProgress(0);
            }}
          >
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 bg-white"
                style={{ width: `${progress}%` }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mute Button */}
      <div className="absolute bottom-12 right-12 z-30">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
        >
          {isMuted ? <VolumeX /> : <Volume2 />}
        </button>
      </div>

    </section>
  );
}