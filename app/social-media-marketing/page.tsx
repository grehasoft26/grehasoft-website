import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Target, Activity, DollarSign, Megaphone } from 'lucide-react';

export default function SocialMediaMarketingPage() {
  const features = [
    {
      title: 'Precision Paid Ads',
      description: 'Run highly targeted advertising campaigns pushing immense ROI across all platforms.',
      icon: <DollarSign className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Audience Targeting',
      description: 'Pinpoint precise demographics based on behaviors, locations, and interests.',
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Brand Awareness',
      description: 'Expand your reach exponentially leveraging viral, engaging organic and paid content.',
      icon: <Megaphone className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Performance Analytics',
      description: 'Deep tracking integrations to measure exactly how ads convert into actual paying customers.',
      icon: <Activity className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Social Media Marketing (SMM)"
        description="Amplify your brand and crush sales targets with high-performance social media advertising."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
          { name: 'SMM', href: '/social-media-marketing' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Dominate the Social Sphere
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Social Media Marketing is no longer just about posting pretty pictures. It's an arena for highly algorithmic, intensely targeted advertising. Our team focuses on leveraging platforms to dramatically multiply your revenue.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether creating powerful organic strategies or managing massive monthly ad budgets on platforms like Facebook, Instagram, and LinkedIn—we focus heavily on paid social conversion. We do not just build followers; we build robust customer pipelines.
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
                  src="https://picsum.photos/seed/smm/800/800"
                  alt="Social Media Marketing"
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
