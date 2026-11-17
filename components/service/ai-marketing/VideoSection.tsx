import { Clapperboard } from 'lucide-react';
import type { AiMarketingContent } from '@/types/ai-marketing';
import SectionHeading from '@/components/service/lead-generation/SectionHeading';

interface Props {
  video: AiMarketingContent['video'];
}

export default function VideoSection({ video }: Props) {
  const asset = video.asset;

  return (
    <section aria-labelledby="ai-video-title" className="section-padding relative overflow-hidden bg-dark">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />

      <div className="container-custom relative">
        <div className={asset ? 'grid gap-12 lg:grid-cols-2 lg:items-center' : 'max-w-4xl'}>
          <div>
            <SectionHeading id="ai-video-title" tone="dark" eyebrow={video.eyebrow} title={video.title} />
            <p className="mt-8 text-lg leading-relaxed text-white/75">{video.body}</p>
          </div>

          {/* Click-to-play only: no autoplay, nothing downloaded until the visitor presses play. */}
          {asset ? (
            <div className="overflow-hidden rounded-box-lg border border-white/10 bg-black shadow-2xl">
              <video
                controls
                preload="none"
                playsInline
                poster={asset.poster}
                aria-label={asset.title}
                className="aspect-video w-full"
              >
                <source src={asset.src} type={asset.type} />
                {asset.captions ? (
                  <track
                    kind="captions"
                    src={asset.captions.src}
                    srcLang={asset.captions.srcLang}
                    label={asset.captions.label}
                    default
                  />
                ) : null}
              </video>
            </div>
          ) : null}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {video.items.map((item) => (
            <article
              key={item.title}
              className="rounded-box-lg border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:border-accent/40 hover:bg-white/[0.07] motion-reduce:transition-none"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-box-sm bg-accent/15 text-accent">
                <Clapperboard aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold leading-snug text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
            </article>
          ))}
        </div>

        <a href={video.cta.href} className="btn-primary mt-12 py-4 text-base">
          {video.cta.label}
        </a>
      </div>
    </section>
  );
}
