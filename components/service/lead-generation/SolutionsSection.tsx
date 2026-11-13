import type { LeadGenerationContent } from '@/types/lead-generation';
import RichText from './RichText';
import SectionHeading from './SectionHeading';
import { leadIcons } from './icons';

interface Props {
  solutions: LeadGenerationContent['solutions'];
}

export default function SolutionsSection({ solutions }: Props) {
  return (
    <section
      id={solutions.id}
      aria-labelledby="lead-solutions-title"
      className="section-padding scroll-mt-20 bg-gray-50"
    >
      <div className="container-custom">
        <SectionHeading
          id="lead-solutions-title"
          eyebrow={solutions.eyebrow}
          title={solutions.title}
          intro={<RichText value={solutions.intro} />}
          className="mb-14 max-w-3xl"
        />

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Index of the six solutions; the articles carry the content on every screen size. */}
          <nav aria-label={solutions.indexLabel} className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28">
              <p className="mb-4 px-4 text-sm font-semibold text-dark">{solutions.indexLabel}</p>
              <ul className="space-y-1">
                {solutions.items.map((item) => {
                  const Icon = leadIcons[item.icon];

                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-start gap-3 rounded-2xl px-4 py-3 text-sm font-medium leading-snug text-gray-600 transition-colors hover:bg-white hover:text-primary focus-visible:bg-white focus-visible:text-primary"
                      >
                        <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          <div className="space-y-8 lg:col-span-8">
            <div className="divide-y divide-gray-100 rounded-[2.5rem] border border-gray-100 bg-white">
              {solutions.items.map((item) => {
                const Icon = leadIcons[item.icon];

                return (
                  <article
                    key={item.id}
                    id={item.id}
                    aria-labelledby={`${item.id}-title`}
                    className="scroll-mt-28 p-7 sm:p-10 lg:p-12"
                  >
                    <div className="flex items-start gap-5">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </span>
                      <h3
                        id={`${item.id}-title`}
                        className="pt-2 text-xl font-bold leading-snug text-dark md:text-2xl"
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-6 leading-relaxed text-gray-600">{item.body}</p>

                    {item.points?.length ? (
                      <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                        {item.points.map((point) => (
                          <div key={point.title} className="border-l-2 border-primary/25 pl-5">
                            <dt className="font-semibold text-dark">{point.title}</dt>
                            <dd className="mt-1 text-sm leading-relaxed text-gray-600">
                              {point.description}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    {item.followUp ? (
                      <p className="mt-8 text-sm font-medium leading-relaxed text-dark">
                        <RichText value={item.followUp} />
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>

            <div className="rounded-[2.5rem] bg-dark p-8 md:p-12">
              <p className="text-lg leading-relaxed text-white/80">
                <RichText
                  value={solutions.closing}
                  linkClassName="font-semibold text-white underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
