'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getClients } from '@/lib/backend-api';
import styles from './KochiIntroSection.module.css';

interface Client {
  id?: number;
  title: { rendered: string };
  featured_image_url?: string;
  acf?: { website_url?: string };
}

interface Props {
  initialClients?: Client[];
}

// Seconds of drift per card, so the speed stays even whatever the client count.
const SECONDS_PER_CARD = 6;

// Same-origin Next.js optimizer URL, as used by the original Clients component.
const optimizedLogoUrl = (src: string, width: 256 | 640) =>
  `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;

const decodeTitle = (html: string) =>
  html.replace(/&#0?38;|&amp;/g, '&').replace(/&#8217;|&#039;/g, "'").replace(/&quot;/g, '"');

// Optical size corrections for logos whose files carry heavy built-in padding or are very thin
// wordmarks. Keyed by image file name; each factor keeps the visible mark at least 10px inside
// both the desktop and mobile card.
const LOGO_SCALE: Record<string, number> = {
  'santa-properties-logo.webp': 1.6,
  'royal-vision.webp': 1.5,
  'rexoon-1.webp': 1.2,
  'kocheriah-associates.webp': 1.15,
  'amar-gopi.webp': 1.15,
  'agile.webp': 1.15,
  'charankattu-coir.webp': 1.13,
};

const logoScale = (src: string) => LOGO_SCALE[decodeURIComponent(src.split('/').pop() || '')];

// The original Clients marquee shows this gradient on hover (its glow layer:
// group-hover:from-primary/5 group-hover:to-accent/5). Here it is the card's resting background;
// hover only adds a lift and shadow.
const CARD_CLASS =
  'flex h-[96px] w-[156px] shrink-0 items-center justify-center rounded-box-sm bg-gradient-to-r from-primary/5 to-accent/5 px-4 transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(5,4,74,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:h-[104px] sm:w-[200px] lg:h-[108px]';

function LogoCard({ client, load, decorative }: { client: Client; load: boolean; decorative: boolean }) {
  const src = client.featured_image_url || '';
  const name = decodeTitle(client.title.rendered);
  const url = client.acf?.website_url;
  const [useOriginal, setUseOriginal] = useState(false);
  const scale = logoScale(src);

  const image = src && load ? (
    <img
      src={useOriginal ? src : optimizedLogoUrl(src, 256)}
      srcSet={useOriginal ? undefined : `${optimizedLogoUrl(src, 256)} 1x, ${optimizedLogoUrl(src, 640)} 2x`}
      alt={decorative ? '' : name}
      loading="lazy"
      decoding="async"
      onError={() => !useOriginal && setUseOriginal(true)}
      style={scale ? { scale } : undefined}
      // Multiply lets the card background show through white padding baked into some logo files.
      className="block max-h-[66%] max-w-full object-contain mix-blend-multiply"
    />
  ) : null;

  if (url && !decorative) {
    return (
      <li>
        <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name} className={CARD_CLASS}>
          {image}
        </a>
      </li>
    );
  }
  return (
    <li aria-hidden={decorative || undefined}>
      <div className={CARD_CLASS}>{image}</div>
    </li>
  );
}

export default function ClientsCarouselSection({ initialClients = [] }: Props) {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const stripRef = useRef<HTMLDivElement>(null);
  // Logos load only once the strip nears the viewport, so they don't compete with the hero.
  const [logosReady, setLogosReady] = useState(false);

  useEffect(() => {
    if (initialClients.length > 0) {
      setClients(initialClients);
      return;
    }
    getClients()
      .then((data) => setClients(Array.isArray(data) ? data : []))
      .catch((error) => console.warn('Error fetching clients:', error?.message || error));
  }, [initialClients]);

  useEffect(() => {
    const strip = stripRef.current;
    if (logosReady || !strip) return;
    if (typeof IntersectionObserver === 'undefined') {
      setLogosReady(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        setLogosReady(true);
      },
      { rootMargin: '1200px 0px' }
    );
    observer.observe(strip);
    return () => observer.disconnect();
  }, [logosReady]);

  const withLogos = clients.filter((client) => client.featured_image_url);
  const duration = `${Math.max(withLogos.length, 1) * SECONDS_PER_CARD}s`;

  return (
    <section aria-labelledby="clients-carousel-title" className="relative bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="container-custom">
        <div className="mb-8 md:mb-9 flex flex-col items-center text-center">
          <p className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
            <Sparkles aria-hidden="true" className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Clients</span>
          </p>
          {/* Section heading on the homepage H2 scale (28 / 36 / 40px) with the brand gradient. */}
          <h2
            id="clients-carousel-title"
            className="text-[1.75rem] md:text-4xl lg:text-[2.5rem] font-extrabold leading-[1.15] tracking-tight text-balance text-center"
          >
            <span className={styles.gradientText}>Businesses We&apos;ve Worked With</span>
          </h2>
          <p className="mt-3 sm:mt-3.5 text-base md:text-lg font-normal leading-relaxed text-balance text-text-gray max-w-3xl lg:max-w-[52rem] text-center mx-auto">
            Businesses across different industries have worked with Grehasoft for websites, <span className="whitespace-nowrap">e-commerce</span>, software, SEO, digital marketing, branding and other digital requirements.
          </p>
        </div>

        <div
          ref={stripRef}
          className="group/strip relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]"
        >
          {withLogos.length > 0 && (
            <div
              style={{ '--marquee-duration': duration } as CSSProperties}
              className="flex w-max py-3 [animation:clients-marquee_var(--marquee-duration)_linear_infinite] group-hover/strip:[animation-play-state:paused] motion-reduce:[animation:none]"
            >
              {/* Two identical lists; the second only completes the loop and is hidden from assistive tech. */}
              {[false, true].map((decorative) => (
                <ul
                  key={String(decorative)}
                  aria-label={decorative ? undefined : 'Client logos'}
                  aria-hidden={decorative || undefined}
                  className={`flex shrink-0 gap-[30px] pr-[30px] ${decorative ? 'motion-reduce:hidden' : ''}`}
                >
                  {withLogos.map((client, index) => (
                    <LogoCard key={`${client.id ?? index}`} client={client} load={logosReady} decorative={decorative} />
                  ))}
                </ul>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center md:mt-9">
          <Link href="/portfolio#clients" className="btn-primary group inline-flex items-center gap-2">
            View All Clients
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
