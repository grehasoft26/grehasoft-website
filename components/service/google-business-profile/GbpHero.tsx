import Link from 'next/link';
import { ChevronRight, MessageCircle, Phone } from 'lucide-react';
import type { GoogleBusinessProfileContent } from '@/types/google-business-profile';
import GbpHeroVisual from '@/components/service/google-business-profile/GbpHeroVisual';

interface Props {
  hero: GoogleBusinessProfileContent['hero'];
  breadcrumbLabel: string;
}

/** The H1 with its accent (the place name) in a brand gradient that stays legible on navy. */
function Title({ title, accent }: { title: string; accent: string }) {
  // The highlight is optional in WordPress: no accent, or one not found in the title, shows the plain title.
  const at = accent ? title.lastIndexOf(accent) : -1;
  if (at === -1) return <>{title}</>;

  return (
    <>
      {title.slice(0, at)}
      <span className="bg-gradient-to-r from-[#8db8ff] via-[#4d8bff] to-accent bg-clip-text text-transparent">
        {accent}
      </span>
      {title.slice(at + accent.length)}
    </>
  );
}

// Shared by both hero buttons: the same minimum height, padding, lift and keyboard focus ring.
// Labels stay on one line from 640px up; below that the buttons stack full width and a long label may wrap.
const CTA_BASE =
  'min-h-14 px-6 py-3 text-center text-base leading-snug transition-all hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:whitespace-nowrap sm:px-8';

export default function GbpHero({ hero, breadcrumbLabel }: Props) {
  return (
    <section className="relative overflow-hidden bg-dark pt-[7.5rem] pb-14 md:pt-32 md:pb-16 lg:pb-20">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <nav aria-label="Breadcrumb" className="mb-5 md:mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/60">
            <li>
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li aria-current="page" className="text-accent">
              {breadcrumbLabel}
            </li>
          </ol>
        </nav>

        {/* The H1 needs ~775px for two lines at 52px (its longer line, "Optimization in Kochi, Kerala").
            - 1280px and up: the text column takes everything beside a fixed-width illustration (408px):
              1216px content − 408px − 24px gap = 784px.
            - 1024–1279px: the text column is `display: contents`, so the one H1 becomes its own full-width
              grid row (960px at 1024) and the lead, buttons and contacts sit beside the illustration below it.
            - Below 1024px: a single column, unchanged.
            Below 768px `text-pretty` keeps the first line from being a single word ("Google") at 36px; from
            768px `text-balance` evens the lines. */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0 xl:grid-cols-[minmax(0,1fr)_25.5rem] xl:gap-6">
          <div className="lg:contents xl:col-span-1 xl:block">
            <h1 className="mb-5 text-pretty text-4xl font-bold leading-tight text-white md:mb-6 md:text-balance md:text-5xl lg:col-span-12 lg:text-[3.25rem]">
              <Title title={hero.title} accent={hero.titleAccent} />
            </h1>

            {/* 1024–1279px: top-aligned so the lead follows the heading directly instead of being centred
                against the taller illustration. (From 1280px this wrapper is not a grid item.) */}
            <div className="lg:col-span-7 lg:self-start">
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{hero.lead}</p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={hero.primaryCta.href}
                  className={`btn-primary ${CTA_BASE} shadow-[0_14px_32px_-14px_rgba(7,83,246,0.85)] hover:shadow-[0_18px_38px_-14px_rgba(7,83,246,1)]`}
                >
                  {hero.primaryCta.label}
                </a>
                <Link
                  href={hero.secondaryCta.href}
                  className={`${CTA_BASE} inline-flex items-center justify-center rounded-full border border-white/50 bg-white/[0.04] font-medium text-white hover:border-white hover:bg-white/10`}
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/80">
                <a
                  href={hero.phone.href}
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
                >
                  <Phone aria-hidden="true" className="h-5 w-5" />
                  {hero.phone.label}
                </a>
                <a
                  href={hero.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
                >
                  <MessageCircle aria-hidden="true" className="h-5 w-5" />
                  {hero.whatsapp.label}
                </a>
              </div>
            </div>
          </div>

          {/* Decorative profile illustration, hidden from assistive technology. Full composition in the
              right column from 1024px; simplified and centred below the buttons at 768–1023px; hidden below. */}
          <div aria-hidden="true" className="hidden md:block lg:col-span-5 xl:col-span-1">
            <GbpHeroVisual labels={hero.visualLabels} />
          </div>
        </div>
      </div>
    </section>
  );
}
