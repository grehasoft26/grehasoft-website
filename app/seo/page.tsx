import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Search, Map, Activity, FileText } from 'lucide-react';

export default function SEOPage() {
  const features = [
    {
      title: 'On-Page SEO',
      description: 'Optimizing titles, meta tags, and internal link structures for maximum relevance.',
      icon: <FileText className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Technical SEO',
      description: 'Ensuring your site architecture and speed meet strict Google search criteria.',
      icon: <Activity className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Local SEO',
      description: 'Dominating local search results to drive high-intent regional traffic to your business.',
      icon: <Map className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Keyword Strategy',
      description: 'Extensive research to target the precise terms your buyers are actively searching for.',
      icon: <Search className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Search Engine Optimization (SEO)"
        description="Rank higher organically, drive targeted traffic, and grow your digital authority."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
          { name: 'SEO', href: '/seo' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Dominate Organic Search Results
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Getting a beautiful website is great, but getting it seen is critical. Our SEO services ensure that when your potential customers are looking for your products or services on search engines, your business appears right at the top.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We utilize white-hat techniques that create sustainable growth over time. From content gap analysis to rigorous link building strategies, we methodically construct a strong organic foundation that drives high-quality inbound leads.
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
                  src="https://picsum.photos/seed/seo/800/800"
                  alt="Search Engine Optimization"
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
