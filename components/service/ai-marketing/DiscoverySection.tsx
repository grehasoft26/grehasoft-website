import type { AiMarketingContent } from '@/types/ai-marketing';
import SectionHeading from '@/components/service/lead-generation/SectionHeading';
import { aiIcons } from './icons';

interface Props {
  discovery: AiMarketingContent['discovery'];
}

export default function DiscoverySection({ discovery }: Props) {
  return (
    <section aria-labelledby="ai-discovery-title" className="section-padding bg-white">
      <div className="container-custom grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading id="ai-discovery-title" eyebrow={discovery.eyebrow} title={discovery.title} />
          <div className="mt-8 max-w-[65ch] space-y-6 text-lg leading-relaxed text-gray-600">
            {discovery.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <h3 className="mb-6 text-xl font-bold text-dark">{discovery.coverTitle}</h3>
          <ul className="grid gap-4">
            {discovery.cover.map((item, i) => {
              const Icon = aiIcons[item.icon];

              return (
                <li
                  key={item.title}
                  className="group flex gap-5 rounded-box-lg border border-gray-100 bg-gray-50 p-6 transition-colors duration-300 hover:border-primary/20 hover:bg-white hover:shadow-sm motion-reduce:transition-none"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-box-sm bg-primary text-white">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-lg font-bold leading-snug text-dark">
                      <span aria-hidden="true" className="mr-2 text-sm font-black text-primary/60">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
