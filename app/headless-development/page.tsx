import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { LayoutTemplate, Cpu, Globe, Rocket } from 'lucide-react';

export default function HeadlessDevelopmentPage() {
  const features = [
    {
      title: 'Omnichannel Delivery',
      description: 'Push your content to any device or platform—websites, apps, or smart devices—from a single backend.',
      icon: <Globe className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Ultimate Performance',
      description: 'Decoupled frontend architecture allows for incredibly fast load times and superior SEO.',
      icon: <Rocket className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Future-Proof Tech',
      description: 'Easily update or replace your frontend framework without having to rebuild the entire backend system.',
      icon: <Cpu className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Complete Creative Freedom',
      description: 'Design dynamic, highly customized user interfaces natively unconstrained by traditional CMS themes.',
      icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Headless CMS Development"
        description="Experience the future of web architecture with ultra-fast, highly adaptable headless solutions."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Development', href: '/website-development' },
          { name: 'Headless Development', href: '/headless-development' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                The Modern Standard for Web Publishing
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Traditional content management systems intertwine the frontend and backend, limiting flexibility. Headless architecture separates the content repository (the "body") from the presentation layer (the "head"), offering unprecedented freedom.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                By leveraging tools like Next.js, Strapi, Sanity, or Contentful, we deliver deeply rich digital experiences that load instantly. Headless systems are secure, scalable, and built for businesses that require content distribution across multiple platforms.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-dark mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden">
                <img
                  src="https://picsum.photos/seed/headless/800/800"
                  alt="Headless CMS Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
