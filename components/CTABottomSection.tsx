'use client';

import { MotionConfig, motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCtaData } from '@/components/CtaDataProvider';
import { toInternalHref } from '@/lib/internal-href';
import { CTAData } from '@/types/wordpress';

interface CTABottomSectionProps {
  data?: CTAData | null;
}

const DEFAULT_CTA: CTAData = {
  cta_badge: 'Ready to Transform?',
  cta_title_part1: "Let's Build Your",
  cta_title_highlight: 'Digital Future',
  cta_title_part2: 'Together',
  cta_description:
    'Whether you have a specific project in mind or just want to explore the possibilities, our team is ready to help you innovate and grow.',
  cta_btn_link: '/contact-us',
  cta_btn_text: 'Get Started Now',
  cta_btn2_link: '/portfolio',
  cta_btn2_text: 'View Our Work',
};

// WordPress values sometimes carry trailing spaces; fall back field by field when one is empty.
const pick = (value: string | undefined, fallback: string | undefined) => value?.trim() || fallback || '';

// Blueprint grid: the "plan" on the light canvas, repeated in white on the blue "build" plane.
const gridLines = (color: string) => ({
  backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
  backgroundSize: '48px 48px',
});

const EASE = [0.22, 1, 0.36, 1] as const;

interface ActionsProps {
  primary: { text: string; href: string };
  secondary: { text: string; href: string };
  className?: string;
}

function CTAActions({ primary, secondary, className = '' }: ActionsProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <Link
        href={primary.href}
        className="group/primary inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_-10px_rgba(5,4,74,0.6)] ring-1 ring-white/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color-mix(in_oklab,var(--color-accent),black_12%)] hover:shadow-[0_16px_36px_-12px_rgba(5,4,74,0.7)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {primary.text}
        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 transition-transform duration-300 group-hover/primary:translate-x-1"
        />
      </Link>

      <Link
        href={secondary.href}
        className="inline-flex items-center justify-center rounded-full border-2 border-white/45 px-8 py-[14px] text-lg font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {secondary.text}
      </Link>
    </div>
  );
}

export default function CTABottomSection({ data }: CTABottomSectionProps) {
  // Page-supplied data wins; otherwise use the CTA the root layout loaded server-side.
  const sharedCta = useCtaData();
  const source = data || sharedCta || {};
  const cta = {
    badge: pick(source.cta_badge, DEFAULT_CTA.cta_badge),
    titlePart1: pick(source.cta_title_part1, DEFAULT_CTA.cta_title_part1),
    titleHighlight: pick(source.cta_title_highlight, DEFAULT_CTA.cta_title_highlight),
    titlePart2: pick(source.cta_title_part2, DEFAULT_CTA.cta_title_part2),
    description: pick(source.cta_description, DEFAULT_CTA.cta_description),
    btnText: pick(source.cta_btn_text, DEFAULT_CTA.cta_btn_text),
    btnLink: toInternalHref(pick(source.cta_btn_link, DEFAULT_CTA.cta_btn_link)),
    btn2Text: pick(source.cta_btn2_text, DEFAULT_CTA.cta_btn2_text),
    btn2Link: toInternalHref(pick(source.cta_btn2_link, DEFAULT_CTA.cta_btn2_link)),
  };

  const actions = {
    primary: { text: cta.btnText, href: cta.btnLink },
    secondary: { text: cta.btn2Text, href: cta.btn2Link },
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.35 }}
        className="relative isolate overflow-hidden border-t border-primary/10 bg-[#F3F6FE]"
      >
        {/* Plan: blueprint grid fading out from the text side */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_90%_at_20%_45%,black,transparent)]"
          style={gridLines('rgba(7,83,246,0.08)')}
        />

        {/* Build: the blue plane, cut on an angle, running to the right edge (desktop) */}
        <motion.div
          aria-hidden="true"
          variants={{ hidden: { x: 64, opacity: 0 }, shown: { x: 0, opacity: 1 } }}
          transition={{ duration: 0.9, ease: EASE }}
          className="absolute inset-y-0 right-0 left-[56%] -z-10 hidden lg:block bg-[linear-gradient(135deg,#0753F6_0%,#0644D0_100%)] [clip-path:polygon(6rem_0,100%_0,100%_100%,0_100%)]"
        >
          <div className="absolute inset-0" style={gridLines('rgba(255,255,255,0.08)')} />
        </motion.div>

        <div className="container-custom lg:grid lg:grid-cols-12 lg:items-center">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, shown: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, ease: EASE }}
            className="pt-16 pb-12 md:pt-20 lg:col-span-6 lg:py-24"
          >
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
              {cta.badge}
            </p>

            <h2
              className="relative isolate w-fit max-w-full mb-6 pb-1.5 text-[2.125rem] font-bold leading-[1.1] tracking-tight sm:text-[2.75rem] lg:text-[2.25rem] xl:text-[2.75rem] lg:leading-[1.12] bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <span className="block">{cta.titlePart1}</span>
              <span className="block sm:whitespace-nowrap">
                <span className="relative inline whitespace-nowrap">
                  <motion.span
                    aria-hidden="true"
                    variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
                    transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
                    className="absolute inset-x-[-0.06em] bottom-[0.08em] -z-10 h-[0.32em] origin-left rounded-sm bg-accent/30"
                  />
                  {cta.titleHighlight}
                </span>{' '}
                {cta.titlePart2}
              </span>
            </h2>

            <p className="max-w-[34rem] text-base leading-relaxed text-text-gray md:text-lg">
              {cta.description}
            </p>
          </motion.div>

          {/* Desktop actions sit on the blue plane */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, shown: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="hidden lg:col-span-4 lg:col-start-9 lg:flex lg:justify-center"
          >
            <CTAActions {...actions} className="w-full max-w-[17rem]" />
          </motion.div>
        </div>

        {/* Tablet & mobile: the blue plane becomes a band under the text, cut along its top edge */}
        <div className="relative bg-[linear-gradient(135deg,#0753F6_0%,#0644D0_100%)] [clip-path:polygon(0_2.5rem,100%_0,100%_100%,0_100%)] lg:hidden">
          <div aria-hidden="true" className="absolute inset-0" style={gridLines('rgba(255,255,255,0.08)')} />
          <div className="container-custom relative pt-20 pb-14">
            <CTAActions {...actions} className="sm:flex-row sm:justify-center" />
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}
