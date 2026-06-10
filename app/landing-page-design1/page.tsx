import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Target, MonitorSmartphone, MousePointerClick, Zap } from 'lucide-react';

export default function LandingPageDesignPage() {
  const features = [
    {
      title: 'High-Converting Copy',
      description: 'Strategic placement of powerful sales copy designed exclusively to convert traffic.',
      icon: <MousePointerClick className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Responsive Landing Page Design',
      description: 'Flawlessly beautiful across all screens, guaranteeing you never miss mobile traffic.',
      icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Targeted Campaigns',
      description: 'Tailored specifically for your ad campaigns, maximizing Return On Ad Spend.',
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      title: 'A/B Testing Ready',
      description: 'Built dynamically structurally so you can effortlessly split test elements for optimization.',
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Landing Page Design Services"
        description="Custom landing page design and development crafted to maximize your conversions."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Landing Page Design', href: '/landing-page-design' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Turn Clicks Into Customers
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Driving traffic is only half the battle. Our landing page design services are focused tightly on conversion. We employ data-backed psychology and modern UI principles to engineer custom landing page designs that compel users to take action.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you need landing page development for a new product launch, a lead generation campaign, or a webinar, we structure immersive experiences that guide visitors seamlessly towards your checkout or contact form.
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
                  src="https://picsum.photos/seed/landingpage/800/800"
                  alt="Landing Page Design"
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
