import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { ShoppingCart, ImageIcon, PanelTop, MousePointer } from 'lucide-react';

export default function PinterestMarketingPage() {
  const features = [
    {
      title: 'Promoted Pins',
      description: 'Blend seamlessly into native feeds sparking high-intent commercial discovery moments.',
      icon: <ImageIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Shopping Ads',
      description: 'Synchronize your e-commerce catalogs directly to Pinterest for fast platform checkouts.',
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Visual Discovery',
      description: 'Dominate Pinterest searches where millions actively hunt for design, home, and fashion inspiration.',
      icon: <PanelTop className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Remarketing',
      description: 'Capture users who previously engaged with your Pins, turning heavy interest into sales.',
      icon: <MousePointer className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Pinterest Marketing & Ads"
        description="Drive massive aesthetic discovery and direct e-commerce sales via Promoted Pins."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'SMM', href: '/social-media-marketing' },
          { name: 'Pinterest Marketing', href: '/social-media-marketing/pinterest' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Inspire Action with Pinterest Ads
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pinterest is technically a visual search engine, not just a social network. Users don't go to Pinterest simply to socialize; they enthusiastically go there to actively plan purchases, events, renovations, and their futures.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                If your business falls under lifestyle, home decor, SaaS aesthetics, B2C fashion, or consumer products—Pinterest Ads offer some of the most phenomenally undervalued traffic available. Let our experts craft Promoted Pins that drive tangible clicks right to your cart.
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
                  src="https://picsum.photos/seed/pinterestads/800/800"
                  alt="Pinterest Marketing and Ads"
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
