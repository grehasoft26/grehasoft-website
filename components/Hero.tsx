'use client';

import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, Volume2, VolumeX, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

const storyReels = [
  {
    id: 1,
    video: '/videos/video1.mp4',
    title: 'Digital Future',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    video: '/videos/video2.mp4',
    title: 'Software Dev',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    video: '/videos/video3.mp4',
    title: 'Client Success',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    video: '/videos/video4.mp4',
    title: 'Innovation',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    video: '/videos/video5.mp4',
    title: 'Team Spirit',
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400'
  }
];

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStoryIndex((curr) => (curr + 1) % storyReels.length);
          return 0;
        }
        return prev + 0.4;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-dark">
      {/* Background Video Reels */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStoryIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {!isMobile ? (
              <video
                autoPlay
                muted={isMuted}
                playsInline
                loop
                key={storyReels[currentStoryIndex].video}
                className="w-full h-full object-cover"
                onLoadedData={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.play().catch(err => console.warn("Video play failed:", err));
                }}
              >
                <source src={storyReels[currentStoryIndex].video} type="video/mp4" />
              </video>
            ) : (
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${storyReels[currentStoryIndex].thumbnail})` }}
              />
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/20 to-transparent" />
      </div>

      {/* Hero Content - Left Aligned, Smaller Text */}
      <div className="container-custom relative z-10 text-left text-white px-4">
        <motion.div
          key={currentStoryIndex}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-white/10 border border-white/10 rounded-full backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[9px] font-bold tracking-[0.3em] text-white/80 uppercase">
              {storyReels[currentStoryIndex].title}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight !text-white uppercase"
          >
            {currentStoryIndex === 0 ? (
              <>Empowering <br /> Your Business</>
            ) : currentStoryIndex === 1 ? (
              <>Next-Gen <br /> IT Solutions</>
            ) : (
              <>Digital <br /> Transformation</>
            )}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-base text-white/70 mb-10 max-w-lg leading-relaxed font-medium tracking-wide uppercase"
          >
            Grehasoft delivers premium software solutions and digital transformation strategies tailored to your vision.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <Link href="/services" className="group flex items-center gap-3 text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:text-accent transition-all duration-300">
              <span className="relative overflow-hidden">
                Explore Services
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Controls & Progress */}
      <div className="absolute bottom-12 left-12 right-12 z-30 flex items-end justify-between">
        {/* Progress Bars */}
        <div className="flex gap-3">
          {storyReels.map((_, index) => (
            <div 
              key={index}
              className="relative w-12 h-[2px] bg-white/10 rounded-full overflow-hidden cursor-pointer group"
              onClick={() => {
                setCurrentStoryIndex(index);
                setProgress(0);
              }}
            >
              <div className="absolute inset-0 bg-white/20 group-hover:bg-white/40 transition-colors" />
              {index === currentStoryIndex && (
                <motion.div 
                  className="absolute inset-0 bg-accent"
                  style={{ width: `${progress}%` }}
                />
              )}
              {index < currentStoryIndex && (
                <div className="absolute inset-0 bg-white" />
              )}
            </div>
          ))}
        </div>

        {/* Mute Button */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-bold">
            {isMuted ? 'Muted' : 'Sound'}
          </span>
          <button
            onClick={toggleMute}
            className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
