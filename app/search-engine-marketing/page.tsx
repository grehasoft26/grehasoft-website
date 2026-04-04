import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { MousePointerClick, Target, BarChart2, CheckCircle2 } from 'lucide-react';

export default function SEMPage() {
  const features = [
    {
      title: 'Google Search Ads',
      description: 'Capture highest-intent customers the moment they search for your exact services.',
      icon: <MousePointerClick className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Precision Targeting',
      description: 'Isolate demographics, interests, and precise geographic areas to minimize waste.',
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Multi-platform Strategy',
      description: 'Expertise traversing Google Ads, Bing/Microsoft Ads, YouTube Ads, and Amazon Ads.',
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Conversion Tracking',
      description: 'Rigorous ROAS monitoring using advanced analytics and dynamic tag management.',
      icon: <BarChart2 className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Search Engine Marketing (SEM)"
        description="Accelerate your revenue with high-ROI Google Ads and premium Search Engine Marketing."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
          { name: 'SEM', href: '/search-engine-marketing' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Maximized Returns on Google Ads
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                While organic growth takes time, our Search Engine Marketing interventions guarantee immediate visibility. We specialize heavily in Google Ads to ensure your business intersects with the highest commercial intent traffic possible.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our approach to SEM eliminates wasted ad spend. While our primary focus is dominating Google Search and YouTube Ads, we adapt campaigns globally across the Microsoft Network and e-commerce specialized hubs like Amazon Ads when your strategy demands it.
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
                  src="https://picsum.photos/seed/sem/800/800"
                  alt="Search Engine Marketing"
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
