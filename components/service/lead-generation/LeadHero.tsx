import Link from 'next/link';
import { ChevronRight, MessageCircle, Phone } from 'lucide-react';
import type { LeadGenerationContent } from '@/types/lead-generation';

interface Props {
  hero: LeadGenerationContent['hero'];
  breadcrumbLabel: string;
}

export default function LeadHero({ hero, breadcrumbLabel }: Props) {
  return (
    <section className="relative overflow-hidden bg-dark pt-36 pb-20 md:pt-40 md:pb-24">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-custom relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8">
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

        <div className="max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.5rem]">
            {hero.title}
          </h1>

          <p className="mb-5 text-xl font-medium leading-snug text-white md:text-2xl">{hero.lead}</p>

          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-white/70">{hero.body}</p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href={hero.primaryCta.href} className="btn-primary py-4 text-base">
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/80">
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
    </section>
  );
}
