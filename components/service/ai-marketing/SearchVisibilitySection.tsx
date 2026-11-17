import type { AiMarketingContent } from '@/types/ai-marketing';
import SectionHeading from '@/components/service/lead-generation/SectionHeading';
import { aiIcons } from './icons';

interface Props {
  searchVisibility: AiMarketingContent['searchVisibility'];
}

export default function SearchVisibilitySection({ searchVisibility }: Props) {
  return (
    <section
      id={searchVisibility.id}
      aria-labelledby="ai-search-title"
      className="section-padding scroll-mt-20 bg-gray-50"
    >
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading id="ai-search-title" eyebrow={searchVisibility.eyebrow} title={searchVisibility.title} />
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600">
            {searchVisibility.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {searchVisibility.items.map((item) => {
            const Icon = aiIcons[item.icon];

            return (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-box-lg border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(5,4,74,0.05)] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none md:p-10"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-box-sm bg-primary/10 text-primary">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                </span>
                <h3 className="text-xl font-bold leading-snug text-dark md:text-2xl">{item.title}</h3>
                <div className="mt-4 space-y-4 leading-relaxed text-gray-600">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
