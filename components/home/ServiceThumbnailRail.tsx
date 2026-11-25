"use client";

import Image from "next/image";
import { motion } from "motion/react";

export interface RailService {
  key: string | number;
  title: string;
  image: string;
}

interface ServiceThumbnailRailProps {
  services: RailService[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

/**
 * Thumbnail navigation for the Home services showcase: a centered horizontal row below the
 * showcase across mobile, tablet, and desktop. Each thumbnail activates its service immediately.
 */
export default function ServiceThumbnailRail({ services, activeIndex, onSelect }: ServiceThumbnailRailProps) {
  const progress = services.length > 1 ? activeIndex / (services.length - 1) : 0;

  return (
    <nav aria-label="Services" className="relative mx-auto flex w-full max-w-xl items-center justify-between lg:max-w-2xl">
      {/* Track and progress, between the first and last thumbnail centres */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[20px] top-1/2 h-px -translate-y-1/2 bg-[#05044A]/10 sm:inset-x-[22px]"
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[20px] top-1/2 h-0.5 -translate-y-1/2 origin-left rounded-full bg-gradient-to-r from-[#0753F6] to-[#1AB728] sm:inset-x-[22px]"
        initial={false}
        animate={{ scaleX: progress }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />

      {services.map((service, i) => {
        const active = i === activeIndex;
        return (
          <button
            key={service.key}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Show ${service.title}`}
            aria-current={active ? "true" : undefined}
            className={`relative z-10 size-10 shrink-0 cursor-pointer rounded-full bg-white p-[3px] transition-[scale,opacity,box-shadow] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0753F6] motion-reduce:transition-none sm:size-11 ${
              active
                ? "scale-110 opacity-100 shadow-[0_0_0_2px_#0753F6,0_0_0_6px_rgba(7,83,246,0.12),0_10px_22px_-8px_rgba(7,83,246,0.55)]"
                : "opacity-60 shadow-[0_0_0_1px_rgba(5,4,74,0.14),0_6px_14px_-8px_rgba(5,4,74,0.35)] hover:scale-105 hover:opacity-100"
            }`}
          >
            <span className="relative block size-full overflow-hidden rounded-full bg-[#EEF1F8]">
              {service.image && <Image src={service.image} alt="" fill sizes="48px" className="object-cover" />}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
