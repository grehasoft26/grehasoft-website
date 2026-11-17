import Link from 'next/link';
import { ChevronRight, MessageCircle, Phone, Sparkles } from 'lucide-react';
import type { AiMarketingContent } from '@/types/ai-marketing';

interface Props {
  hero: AiMarketingContent['hero'];
  breadcrumbLabel: string;
}

// Keeps the em dash on the same line as the word before it.
const keepDashWithPreviousWord = (text: string) => text.replace(/\s+([–—])/g, ' $1');

export default function AiHero({ hero, breadcrumbLabel }: Props) {
  return (
    <section className="relative overflow-hidden bg-dark pt-36 pb-20 md:pt-40 md:pb-24">
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="container-custom relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-8">
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

          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[3.25rem]">
            {keepDashWithPreviousWord(hero.title)}
          </h1>

          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-white/75">{hero.body}</p>

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
              href={hero.contact.href}
              className="inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
              {hero.contact.label}
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

        {/* Decorative recap of the capabilities named in the hero copy. */}
        <div aria-hidden="true" className="hidden lg:col-span-4 lg:block">
          <div className="rounded-box-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-box-sm bg-accent/15 text-accent">
              <Sparkles className="h-6 w-6" />
            </span>
            <ul className="space-y-4">
              {hero.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-3 text-base font-medium text-white/85">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
