'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

/**
 * /products PMS visual: a laptop mockup showing the real Grehasoft PMS Financial Dashboard, with three smaller floating
 * panels cropped from other real PMS screens (Projects, Clients, Live Monitor). All images are mock-data screenshots
 * cropped from public/images/pms-showcase (originals untouched) into public/images/pms-products.
 * Distinct from the homepage, which shows the full screenshots in a fade slideshow.
 * Floating panels appear from 640px (sm); on phones only the laptop is shown so the dashboard stays legible.
 */

const PANELS = [
  {
    // Top right, overlapping the laptop lid's corner.
    src: '/images/pms-products/pms-panel-project-card.webp',
    width: 560,
    height: 337,
    label: 'Projects',
    dot: 'bg-[#0753F6]',
    alt: 'Grehasoft PMS project card with progress and Kanban, Edit and Details actions, using sample data',
    position: 'right-0 top-[2%] w-[28%]',
    delay: 0,
  },
  {
    // Lower left, overlapping the screen's left edge.
    src: '/images/pms-products/pms-panel-client-stats.webp',
    width: 720,
    height: 199,
    label: 'Clients',
    dot: 'bg-[#1AB728]',
    alt: 'Grehasoft PMS client management summary with total clients, portal accounts and active users, using sample data',
    position: 'left-0 bottom-[13%] w-[37%]',
    delay: 1.2,
  },
  {
    // Bottom right, resting over the laptop base.
    src: '/images/pms-products/pms-panel-live-monitor.webp',
    width: 700,
    height: 237,
    label: 'Live Monitor',
    dot: 'bg-[#1AB728]',
    alt: 'Grehasoft PMS live monitor with workforce, active, offline and paused staff counts, using sample data',
    position: 'right-0 bottom-[1%] w-[32%]',
    delay: 2.4,
  },
] as const;

export default function PmsProductShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative isolate mx-auto w-full max-w-[640px] sm:py-[7%]">
      {/* Soft brand ambient light behind the composition (blue top left, green bottom right). */}
      <div aria-hidden="true" className="pointer-events-none absolute -z-10 left-[4%] top-[6%] h-[55%] w-[55%] rounded-full bg-[#0753F6]/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -z-10 bottom-[4%] right-[6%] h-[45%] w-[45%] rounded-full bg-[#1AB728]/15 blur-3xl" />

      {/* LAPTOP */}
      <div className="relative mx-auto w-[94%] sm:w-[86%]">
        {/* Lid + bezel */}
        <div className="relative rounded-t-[14px] sm:rounded-t-[18px] bg-gradient-to-b from-[#1a1d33] to-[#0a0b18] p-[2.2%] pb-[3%] ring-1 ring-white/20 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.75)]">
          <span aria-hidden="true" className="absolute left-1/2 top-[1%] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-white/20" />
          <div className="relative aspect-[1600/842] overflow-hidden rounded-[4px] sm:rounded-[6px] bg-white">
            <Image
              src="/images/pms-products/pms-screen-financial-dashboard.webp"
              alt="Grehasoft PMS financial dashboard with invoice, collection, expense and net cash flow figures, using sample data"
              fill
              sizes="(max-width: 639px) 92vw, (max-width: 1023px) 520px, 460px"
              className="object-cover object-top"
            />
            {/* Faint screen glare for a glass feel; kept very light so the screenshot stays crisp. */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          </div>
        </div>
        {/* Base / keyboard deck */}
        <div aria-hidden="true" className="relative -mx-[7%] h-[10px] sm:h-[14px] rounded-b-[12px] rounded-t-[2px] bg-gradient-to-b from-[#d5d9e6] via-[#a3aac0] to-[#5f6683] shadow-[0_18px_30px_-10px_rgba(0,0,0,0.7)]">
          <span className="absolute left-1/2 top-0 h-[40%] w-[16%] -translate-x-1/2 rounded-b-[6px] bg-[#5f6683]/60" />
        </div>
      </div>

      {/* FLOATING PANELS (sm and up) */}
      {PANELS.map((panel) => (
        <motion.figure
          key={panel.src}
          className={`absolute hidden sm:block ${panel.position} overflow-hidden rounded-[10px] md:rounded-xl bg-white ring-1 ring-[#05044A]/10 shadow-[0_24px_50px_-14px_rgba(5,4,74,0.6),0_8px_18px_-8px_rgba(0,0,0,0.35)]`}
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: panel.delay }}
        >
          <figcaption className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-2.5 py-1 md:py-1.5">
            <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${panel.dot}`} />
            <span className="text-[10px] md:text-[11px] font-semibold tracking-wide text-slate-600">{panel.label}</span>
          </figcaption>
          <Image
            src={panel.src}
            alt={panel.alt}
            width={panel.width}
            height={panel.height}
            sizes="(max-width: 1023px) 240px, 220px"
            className="block h-auto w-full"
          />
        </motion.figure>
      ))}
    </div>
  );
}
