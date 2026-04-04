import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Camera, PlaySquare, Target, ShoppingBag } from 'lucide-react';

export default function InstagramMarketingPage() {
  const features = [
    {
      title: 'Instagram Ads',
      description: 'Visually stunning sponsored posts and story ads designed to halt scrolling and drive clicks.',
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Reels Strategy',
      description: 'Capitalize on Instagram’s aggressive organic push for short-form video content.',
      icon: <PlaySquare className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Visual Branding',
      description: 'Curating gorgeous, aesthetic feeds that immediately establish premium brand authority.',
      icon: <Camera className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Instagram Shopping',
      description: 'Connecting product catalogs so users can buy directly from your posts seamlessly.',
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Instagram Marketing & Ads"
        description="Convert visual attention into revenue through targeted Instagram advertising."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'SMM', href: '/social-media-marketing' },
          { name: 'Instagram Marketing', href: '/social-media-marketing/instagram' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Visually Compelling Conversions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Instagram is the world's most visual marketplace, making it extremely potent for lifestyle, fashion, B2C products, and modern B2B brands. Our approach hinges heavily on high-impact Instagram advertising.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We handle comprehensive Instagram Ad campaigns, influencer collaboration structures, and aesthetic organic development. By leveraging Instagram's powerful targeting alongside engaging visual creatives, we force higher engagement rates and strong final conversions.
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
                  src="https://picsum.photos/seed/instagramads/800/800"
                  alt="Instagram Marketing and Ads"
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
