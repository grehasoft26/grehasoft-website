"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate } from "motion/react";
import { Logo } from "@/types/logo";

interface LogoSliderClientProps {
  logos: Logo[];
}

export default function LogoSliderClient({ logos }: LogoSliderClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const xTranslation = useMotionValue(0);
  const controlsRef = useRef<any>(null);
  const [mustRecreate, setMustRecreate] = useState(0);

  // Duplicate logos array so we have enough items for continuous looping
  let duplicatedLogos = [...logos];
  if (logos.length > 0) {
    while (duplicatedLogos.length < 20) {
      duplicatedLogos = [...duplicatedLogos, ...logos];
    }
  }

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // The marquee scroll distance is half of its total scroll width (since it's duplicated)
    const width = marquee.scrollWidth;
    const scrollDistance = width / 2;

    if (scrollDistance <= 0) return;

    // Create a linear infinite animation
    const controls = animate(xTranslation, [0, -scrollDistance], {
      ease: "linear",
      duration: 35, // Adjust duration to control speed
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    
    controlsRef.current = controls;

    return () => {
      controls.stop();
    };
  }, [xTranslation, mustRecreate, logos.length]);

  // Recalculate width on resize or after render to make sure it's accurate
  useEffect(() => {
    const handleResize = () => {
      setMustRecreate((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);

    // Initial delay to ensure images/layout are finished loading and scrollWidth is correct
    const timer = setTimeout(() => {
      setMustRecreate((prev) => prev + 1);
    }, 500);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleMouseEnter = () => {
    if (controlsRef.current) {
      controlsRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (controlsRef.current) {
      controlsRef.current.play();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Premium subtle fading masks on left and right edges */}
      <div className="absolute left-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <motion.div
        ref={marqueeRef}
        className="flex items-center gap-5 md:gap-8 w-max py-4"
        style={{ x: xTranslation }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="group relative flex items-center justify-center bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 p-6 h-28 w-44 md:h-32 md:w-56 flex-shrink-0"
          >
            <div className="relative w-full h-[60px] md:h-[70px] flex items-center justify-center">
              <Image
                src={logo.image}
                alt={logo.title}
                fill
                sizes="(max-width: 768px) 150px, 200px"
                className="object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                priority={index < 8}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
