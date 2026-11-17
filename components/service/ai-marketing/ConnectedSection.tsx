import type { AiMarketingContent } from '@/types/ai-marketing';
import RichText from '@/components/service/lead-generation/RichText';
import SectionHeading from '@/components/service/lead-generation/SectionHeading';

interface Props {
  connected: AiMarketingContent['connected'];
}

export default function ConnectedSection({ connected }: Props) {
  return (
    <section aria-labelledby="ai-connected-title" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl">
          <SectionHeading
            id="ai-connected-title"
            eyebrow={connected.eyebrow}
            title={connected.title}
            intro={connected.intro}
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {connected.items.map((item) => (
            <article key={item.title} className="flex flex-col rounded-box-lg bg-white p-8 shadow-[0_4px_20px_rgba(5,4,74,0.05)]">
              <h3 className="text-xl font-bold leading-snug text-dark">{item.title}</h3>
              <p className="mt-4 flex-grow leading-relaxed text-gray-600">{item.description}</p>
              <p className="mt-6 border-t border-gray-100 pt-6 text-sm leading-relaxed text-gray-600">
                <RichText value={item.followUp} />
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-lg font-medium leading-relaxed text-dark">
          {connected.closing}
        </p>
      </div>
    </section>
  );
}
