import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Mic2, MessageSquareText, Target, Activity } from 'lucide-react';

export default function TwitterMarketingPage() {
  const features = [
    {
      title: 'Promoted Ads',
      description: 'Inject your offerings directly into high-traction timelines for immediate visibility.',
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Conversational Marketing',
      description: 'Engage actively with industry trends to seamlessly insert your brand into the zeitgeist.',
      icon: <MessageSquareText className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Brand Authority',
      description: 'Pioneering thought-leadership strategies that rapidly multiply your organic following natively.',
      icon: <Mic2 className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Trend Analytics',
      description: 'Monitor high-stakes hashtags dynamically to adjust ad placements in exact real time.',
      icon: <Activity className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Twitter (X) Marketing & Ads"
        description="Insert your brand exactly into global conversations via high-impact Twitter Advertising."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'SMM', href: '/social-media-marketing' },
          { name: 'Twitter (X) Marketing', href: '/social-media-marketing/twitter' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Capture the Now with X Ads
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Twitter (Now X) moves at lightning speed. It's the epicenter for live events, B2B thought leadership, Web3 SaaS, and instant news cycles. Advertising here means intercepting audiences exactly when they are most engaged.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We handle comprehensive Twitter Ads management—from Promoted Tweets meant to violently drive web traffic to Promoted Trends meant solely for national brand awareness. Our strategies ensure your brand remains profoundly relevant.
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
                  src="https://picsum.photos/seed/twitterads/800/800"
                  alt="Twitter (X) Marketing and Ads"
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
