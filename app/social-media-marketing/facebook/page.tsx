import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Target, Users, MousePointerClick, RefreshCcw } from 'lucide-react';

export default function FacebookMarketingPage() {
  const features = [
    {
      title: 'Advanced Ad Campaigns',
      description: 'Deploying high-converting Facebook Ads targeting cold, warm, and hot audiences.',
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Retargeting Ecosystems',
      description: 'Setting up Meta Pixel tracking to dramatically increase conversions via retargeting.',
      icon: <RefreshCcw className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Custom Audiences',
      description: 'Utilizing Lookalike audiences to find people similar to your best paying customers.',
      icon: <Users className="w-8 h-8 text-primary" />,
    },
    {
      title: 'A/B Testing Creatives',
      description: 'Endless testing of ad copy, videos, and images to find the lowest possible Cost Per Click.',
      icon: <MousePointerClick className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Facebook Marketing & Ads"
        description="Unleash the full advertising power of Facebook to predictably scale your business."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'SMM', href: '/social-media-marketing' },
          { name: 'Facebook Marketing', href: '/social-media-marketing/facebook' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Scale Profitably with Meta Ads
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Facebook remains an unparalleled titan in digital advertising because of its immense, highly granular data. Our Facebook Marketing campaigns focus aggressively on building customized funnels through Facebook Ads.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From Lead Generation forms straight to E-commerce catalog sales, we design creatives and continuously optimize ad sets to ensure that every dollar you spend is engineered to generate a return. Let us handle the complexities of the Facebook Ads Manager.
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
                  src="https://picsum.photos/seed/facebookads/800/800"
                  alt="Facebook Marketing and Ads"
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
