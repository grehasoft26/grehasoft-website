'use client';

import { motion, useScroll, useTransform, useSpring, AnimatePresence, MotionValue } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import {
  Search,
  TrendingUp,
  Share2,
  Heart,
  Bell,
  Code2,
  Palette,
  Cpu,
  Cloud,
  Database,
  Settings,
  ArrowRight,
  MousePointer2,
  BarChart3,
  Globe,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const FloatingElement = ({
  children,
  className,
  delay = 0,
  duration = 5,
  yOffset = 20,
  rotationRange = 15,
  progress,
  range
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  rotationRange?: number;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  // Parallax based on the global scroll progress within the service's range
  const y = useTransform(progress, range, [100, -100]);
  const rotate = useTransform(progress, range, [rotationRange, -rotationRange]);
  const opacity = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [0, 1, 1, 0]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        y: springY,
        rotate: springRotate,
        opacity: springOpacity
      }}
      className={`absolute ${className || ''}`}
    >
      <motion.div
        animate={{
          y: [0, -yOffset, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const services = [
  {
    id: 'seo',
    title: "Search Engine Optimization",
    description: "Boost your visibility and drive organic traffic with our data-driven SEO strategies. We focus on ranking your business where it matters most.",
    accentColor: "text-blue-500",
    bgColor: "bg-blue-500",
    gradient: "from-blue-500/20 via-transparent to-transparent",
    elements: (progress: MotionValue<number>, range: [number, number]) => (
      <div className="relative w-full h-full flex items-center justify-center">
        <FloatingElement progress={progress} range={range} delay={0} className="top-1/4 left-1/4">
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 backdrop-blur-xl">
            <Search size={48} className="text-blue-500" />
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={0.5} className="top-10 right-1/4">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800">
            <TrendingUp size={40} className="text-green-500" />
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={1} className="bottom-1/4 right-10">
          <div className="w-48 p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-end gap-1.5 h-16">
              {[30, 60, 45, 90, 70, 85].map((h, i) => (
                <div key={i} className="w-full bg-blue-500/20 rounded-t-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={1.5} className="bottom-10 left-1/3">
          <div className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-bold shadow-lg">
            #1 Ranking
          </div>
        </FloatingElement>
      </div>
    )
  },
  {
    id: 'social',
    title: "Social Media Marketing",
    description: "Engage your audience across all platforms. We create compelling content and manage your community to build a loyal brand following.",
    accentColor: "text-sky-400",
    bgColor: "bg-sky-400",
    gradient: "from-sky-400/20 via-transparent to-transparent",
    elements: (progress: MotionValue<number>, range: [number, number]) => (
      <div className="relative w-full h-full flex items-center justify-center">
        <FloatingElement progress={progress} range={range} delay={0.2} className="top-1/4 right-1/4">
          <div className="w-28 h-56 rounded-[2.5rem] bg-slate-900 border-4 border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-800 rounded-full" />
            <div className="mt-12 px-3 space-y-3">
              <div className="h-2.5 w-full bg-slate-800 rounded-full" />
              <div className="h-2.5 w-2/3 bg-slate-800 rounded-full" />
              <div className="h-24 w-full bg-sky-400/20 rounded-xl" />
            </div>
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={0.7} className="top-10 left-1/4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 text-sky-400">
            <Heart size={40} fill="currentColor" />
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={1.2} className="bottom-1/4 left-10">
          <div className="p-5 rounded-full bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 text-blue-400">
            <Share2 size={32} />
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={1.7} className="bottom-20 right-10">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 text-yellow-500">
            <Bell size={36} />
          </div>
        </FloatingElement>
      </div>
    )
  },
  {
    id: 'web',
    title: "Website Design & Development",
    description: "We craft high-performance, responsive websites that combine stunning aesthetics with seamless functionality to convert visitors into customers.",
   accentColor: "text-emerald-500",
    bgColor: "bg-emerald-500",
    gradient: "from-emerald-500/20 via-transparent to-transparent",
    elements: (progress: MotionValue<number>, range: [number, number]) => (
      <div className="relative w-full h-full flex items-center justify-center">
        <FloatingElement progress={progress} range={range} delay={0.3} className="top-1/4 left-1/4">
          <div className="w-72 h-44 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="h-7 bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 flex items-center px-4 gap-1.5">
              <div className="w-2 h-2 rounded-full bg-sky-400" />
              <div className="w-2 h-2 rounded-full bg-blue-600" />
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="p-5 space-y-3">
              <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded" />
              <div className="flex gap-3">
                <div className="h-20 w-1/3 bg-teal-500/10 rounded" />
                <div className="h-20 w-2/3 bg-slate-50 dark:bg-slate-800 rounded" />
              </div>
            </div>
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={0.8} className="top-10 right-1/4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 text-teal-500">
            <Palette size={40} />
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={1.3} className="bottom-1/4 right-10">
          <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-xl">
            <Code2 size={32} />
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={1.8} className="bottom-10 left-1/3">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500 shadow-lg" />
            <div className="w-10 h-10 rounded-lg bg-teal-500 shadow-lg" />
            <div className="w-10 h-10 rounded-lg bg-sky-400 shadow-lg" />
          </div>
        </FloatingElement>
      </div>
    )
  },
  {
    id: 'software',
    title: "Custom Software Development",
    description: "From complex enterprise systems to innovative startups, we build scalable software solutions that solve real business challenges.",
    accentColor: "text-blue-600",
    bgColor: "bg-blue-600",
    gradient: "from-blue-600/20 via-transparent to-transparent",
    elements: (progress: MotionValue<number>, range: [number, number]) => (
      <div className="relative w-full h-full flex items-center justify-center">
        <FloatingElement progress={progress} range={range} delay={0.4} className="top-1/4 right-1/4">
          <div className="p-8 rounded-3xl bg-slate-900 shadow-2xl border border-slate-800 text-blue-400">
            <Cpu size={56} />
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={0.9} className="top-10 left-1/4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 text-blue-600">
            <Cloud size={40} />
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={1.4} className="bottom-1/4 left-10">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-100 dark:border-slate-800">
            <Database size={40} className="text-slate-400" />
          </div>
        </FloatingElement>
        <FloatingElement progress={progress} range={range} delay={1.9} className="bottom-20 right-10">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 text-slate-400 animate-spin-slow">
            <Settings size={36} />
          </div>
        </FloatingElement>
      </div>
    )
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const index = Math.min(
        Math.floor(latest * services.length),
        services.length - 1
      );
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative h-[400vh] bg-white dark:bg-slate-950"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* Background subtle elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          {/* Large Branding Text */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8vw] font-black text-blue-600/10 whitespace-nowrap select-none">
  GREHASOFT SERVICES
</div>

          {/* Dynamic Background Glow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className={`absolute inset-0 bg-gradient-to-br ${services[activeIndex].gradient} blur-[150px]`}
            />
          </AnimatePresence>
        </div>

        {/* Global Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 dark:bg-slate-900 z-50">
          <motion.div
            style={{ scaleX: springProgress, transformOrigin: "left" }}
            className="h-full bg-gradient-to-r from-blue-600 via-teal-500 to-sky-400"
          />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

            {/* Left Column: Text Content */}
            <div className="flex-1 w-full text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="max-w-xl mx-auto lg:mx-0"
                >
                  <div className={`inline-block px-4 py-1.5 mb-6 rounded-full ${services[activeIndex].bgColor} bg-opacity-10 border border-current`}>
                    <span className={`text-[10px] font-bold text-white uppercase tracking-[0.2em] ${services[activeIndex].accentColor}`}>
                      Service 0{activeIndex + 1}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
                    {services[activeIndex].title.split(' ').map((word, i) => (
                      <span key={i} className="block mt-2">{word}</span>
                    ))}
                  </h2>

                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                    {services[activeIndex].description}
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-2xl overflow-hidden transition-all duration-300"
                    >
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
                      <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${services[activeIndex].bgColor} opacity-10`} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: 3D Illustration Area */}
            <div className="flex-1 relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotateY: -30 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="w-full h-full"
                >
                  {services[activeIndex].elements(scrollYProgress, [
                    activeIndex / services.length,
                    (activeIndex + 1) / services.length
                  ])}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

        {/* Scroll Progress Indicator (Dots) */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
          {services.map((_, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center"
            >
              <div
                className={`w-1.5 transition-all duration-500 rounded-full ${i === activeIndex
                    ? 'h-12 bg-slate-900 dark:bg-white'
                    : 'h-1.5 bg-slate-300 dark:bg-slate-700'
                  }`}
              />
              {i === activeIndex && (
                <motion.div
                  layoutId="activeDot"
                  className={`absolute -inset-2 rounded-full border border-slate-900 dark:border-white opacity-20`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll to explore</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-slate-900 dark:from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
