'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useState,useRef } from 'react';
import axiosInstance from '@/lib/axios';
import { getHome } from '@/lib/backend-api';

import { Slide } from '@/types/wordpress';

interface HeroProps {
  slides?: Slide[];
}

export default function Hero({ slides = [] }: HeroProps) {
  const [heroSlides, setHeroSlides] = useState<Slide[]>(slides);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Sync slides from server props or fallback to client fetch if server returned empty
  useEffect(() => {
    if (slides && slides.length > 0) {
      setHeroSlides(slides);
      return;
    }
useEffect(() => {
  if (!videoRef.current) return;

  videoRef.current.currentTime = 0;

  videoRef.current.play().catch(() => {
    // Browser may block playback until interaction
  });
}, [currentIndex]);
    let isMounted = true;
    getHome()
      .then((res) => {
        if (isMounted && res?.hero && Array.isArray(res.hero) && res.hero.length > 0) {
          setHeroSlides(res.hero);
        }
      })
      .catch((err) => {
        console.warn('Hero slides client fallback error:', err?.message || err);
      });

    return () => {
      isMounted = false;
    };
  }, [slides]);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      // iPad Mini, Air, 10.2", etc.
      setIsTablet(width >= 768 && width <= 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Progress + Auto slide
  useEffect(() => {
    if (!heroSlides.length) return;

    setProgress(0);

   const slideDuration = heroSlides[currentIndex]?.slide_duration;

console.log("Current slide:", heroSlides[currentIndex]);
console.log("Slide duration:", slideDuration);

const duration = (Number(slideDuration) || 11) * 1000;
    const start = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / duration) * 100, 100));
    }, 50);

    const slideTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
      setProgress(0);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimeout);
    };
  }, [currentIndex, heroSlides]);

  if (!heroSlides.length) {
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
    <section className="relative min-h-[55vh] xl:min-h-screen w-full flex items-start lg:items-center md:min-h-[85vh] overflow-hidden bg-dark pt-16 lg:pt-0">
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
            {heroSlides[currentIndex]?.video ? (
              <video
  ref={videoRef}
  key={heroSlides[currentIndex].video}
  autoPlay
  muted
  playsInline
  preload="auto"
  poster={heroSlides[currentIndex]?.thumbnail}
  className={`w-full h-full ${
    isMobile || isTablet ? 'object-contain' : 'object-cover'
  }`}
>
                <source
                  key={heroSlides[currentIndex].video} // ⭐ VERY IMPORTANT
                  src={heroSlides[currentIndex].video}
                  type="video/mp4"
                />
              </video>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroSlides[currentIndex]?.thumbnail})`,
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Progress Bars */}
        <div className="absolute bottom-12 left-12 flex gap-3 z-30">
          {heroSlides.map((_, index) => (
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
      </div>
    </section>
  );
}