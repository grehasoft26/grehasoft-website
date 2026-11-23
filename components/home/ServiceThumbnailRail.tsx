"use client";

import Image from "next/image";
import { motion, type MotionValue } from "motion/react";

export interface RailService {
  key: string | number;
  title: string;
  image: string;
}

interface ServiceThumbnailRailProps {
  services: RailService[];
  activeIndex: number;
  /** 0 at the first thumbnail, 1 at the last; bound straight to scroll progress. */
  fill: MotionValue<number>;
  onSelect: (index: number) => void;
}

/**
 * Thumbnail navigation for the Home services showcase: a vertical divider on desktop (lg+),
 * a horizontal row under the image on tablets. Each thumbnail is a button that scrolls the
 * page to its service.
 */
export default function ServiceThumbnailRail({ services, activeIndex, fill, onSelect }: ServiceThumbnailRailProps) {
  return (
    <nav aria-label="Services" className="relative mx-auto flex w-full max-w-xl items-center justify-between lg:h-full lg:w-11 lg:max-w-none lg:flex-col">
      {/* Track and progress, between the first and last thumbnail centres */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bg-[#05044A]/10 max-lg:inset-x-[22px] max-lg:top-1/2 max-lg:h-px max-lg:-translate-y-1/2 lg:inset-y-[22px] lg:left-1/2 lg:w-px lg:-translate-x-1/2"
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[22px] top-1/2 h-0.5 -translate-y-1/2 origin-left rounded-full bg-gradient-to-r from-[#0753F6] to-[#1AB728] lg:hidden"
        style={{ scaleX: fill }}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-[22px] left-1/2 hidden w-0.5 -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-[#0753F6] to-[#1AB728] lg:block"
        style={{ scaleY: fill }}
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
            className={`relative z-10 size-11 shrink-0 cursor-pointer rounded-full bg-white p-[3px] transition-[scale,opacity,box-shadow] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0753F6] motion-reduce:transition-none ${
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
