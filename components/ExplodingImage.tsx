"use client";

import React, { useState } from "react";
import { motion, Variants, TargetAndTransition } from "framer-motion";

const ExplodingImage: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const variants: { [key: string]: Variants } = {
    glow: {
      initial: { opacity: 0, scale: 0.8 },
      exploded: { opacity: 0.4, scale: 1.4 }
    },
    core: {
      initial: { scale: 1, z: 0 },
      exploded: { scale: 0.8, z: -100, filter: "blur(1px)" }
    },
    partLeft: {
      initial: { x: "-50%", y: "-50%", z: 0, rotate: 0 },
      exploded: { x: "-130%", y: "-90%", z: 200, rotate: -20 }
    },
    partRight: {
      initial: { x: "-50%", y: "-50%", z: 0, rotate: 0 },
      exploded: { x: "30%", y: "20%", z: 250, rotate: 15 }
    }
  };

  const floatingAnimation: TargetAndTransition = {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    // REMOVED background colors and set h-auto so it doesn't cover "Explore All"
    <div
      className="relative w-full h-[150px] flex items-center justify-center"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <motion.div
        variants={variants.glow}
        animate={isHovered ? "exploded" : "initial"}
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 70%)",
          filter: "blur(50px)",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
      />

      <motion.div animate={floatingAnimation} className="relative w-64 h-64">
        {/* BASE CORE */}
        <motion.img
          src="/images/base-core.png"
          alt="Core"
          variants={variants.core}
          animate={isHovered ? "exploded" : "initial"}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto z-10 select-none bg-transparent"
        />

        {/* LEFT PART */}
        <motion.img
          src="/images/part-left.png"
          alt="Left"
          variants={variants.partLeft}
          animate={isHovered ? "exploded" : "initial"}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="absolute top-1/2 left-1/2 w-full h-auto z-20 select-none bg-transparent"
        />

        {/* RIGHT PART */}
        <motion.img
          src="/images/part-right.png"
          alt="Right"
          variants={variants.partRight}
          animate={isHovered ? "exploded" : "initial"}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.05 }}
          className="absolute top-1/2 left-1/2 w-full h-auto z-30 select-none bg-transparent"
        />
      </motion.div>
    </div>
  );
};

export default ExplodingImage;