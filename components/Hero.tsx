'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Slide } from '@/types/wordpress';

interface HeroProps {
  slides?: Slide[];
}

export default function Hero({ slides = [] }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
 const [isMobile, setIsMobile] = useState(false);
const [isTablet, setIsTablet] = useState(false);

useEffect(() => {
  const checkDevice = () => {
    const width = window.innerWidth;

    setIsMobile(width < 768);

    // iPad Mini, Air, 10.2", etc.
    setIsTablet(width >= 768 && width <= 1024);
  };

  checkDevice();
  window.addEventListener("resize", checkDevice);

  return () => window.removeEventListener("resize", checkDevice);
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
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [slides]);

if (!slides.length) {
  return (
    <section className="relative min-h-screen w-full bg-dark flex items-center">
      <div className="container-custom text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
          Grehasoft
        </h1>
      </div>
    </section>
  );
}

  return (
<section className="relative min-h-[55vh]  xl:min-h-screen w-full flex items-start lg:items-center md:min-h-[85vh]     overflow-hidden bg-dark pt-16 lg:pt-0">

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
          {slides[currentIndex]?.video ? (
              <video
  key={slides[currentIndex].video}
  autoPlay
  muted
  playsInline
  loop
  preload="auto"
  poster={slides[currentIndex]?.thumbnail}
className={`w-full h-full ${
  isMobile || isTablet ? "object-contain" : "object-cover"
}`}
>
  <source
    key={slides[currentIndex].video}   // ⭐ VERY IMPORTANT
    src={slides[currentIndex].video}
    type="video/mp4"
  />
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
      {/* <div className="container-custom relative z-10 text-left text-white px-4">
        <motion.div
  key={currentIndex}
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-2xl pt-10 md:pt-0"
> */}
  {/* <div className="inline-flex items-center gap-2 px-4 py-1 mb-4 md:mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
    <span className="text-xs md:text-sm">
      {slides[currentIndex]?.label}
    </span>
  </div>

 <h1 className="text-[20px] md:text-6xl font-bold mb-4 md:mb-6 uppercase text-white leading-tight">
    {slides[currentIndex]?.title}
  </h1>

  <p className="hidden md:block text-white/70 text-sm md:text-base mb-6 md:mb-10 max-w-lg">
  {slides[currentIndex]?.description}
</p>

  <Link
  href="/services"
  className="hidden md:inline-flex group items-center gap-3 uppercase tracking-[0.3em] text-sm text-white transition duration-300"
>
    <span className="relative pb-1 transition duration-300 group-hover:text-green-400">
      Explore Services
      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/40 transition duration-300 group-hover:bg-green-400"></span>
    </span>

    <ArrowRight className="w-4 h-4 transition duration-300 group-hover:text-green-400 group-hover:translate-x-1" />
  </Link> */}
{/* </motion.div>
      </div> */}

{/* 
      {/* Mobile description Below Video */}

{/* <div className="md:hidden absolute bottom-35 left-4 right-4 z-30">
<p className="text-white/70 text-[11px] leading-4 max-w-[220px]">
   {slides[currentIndex]?.description}
</p>
</div> */}

{/* Mobile Button Below Video */}
{/* <div className="md:hidden absolute bottom-24 left-4 right-4 z-30">
 
  <Link
  href="/services"
  className="group inline-flex items-center gap-2 uppercase tracking-[0.15em] text-xs text-white mt-2"
>
    <span className="relative pb-1">
      Explore Services
      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white/40"></span>
    </span>

    <ArrowRight className="w-3 h-3" />
  </Link>
</div> */} 

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