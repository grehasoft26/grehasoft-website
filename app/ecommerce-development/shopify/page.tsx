import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Palmtree, ArrowUpRight, Smartphone, Link as LinkIcon } from 'lucide-react';

export default function ShopifyPage() {
  const features = [
    {
      title: 'Store Setup & Theme Design',
      description: 'Complete creation of your Shopify ecosystem, featuring premium, conversion-optimized responsive themes.',
      icon: <Palmtree className="w-8 h-8 text-primary" />,
    },
    {
      title: 'App Integration',
      description: 'Seamless integration of essential Shopify apps for marketing, tracking, and backend inventory.',
      icon: <LinkIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Mobile Commerce',
      description: 'Creating hyper-responsive storefronts optimized for flawless mobile shopping experiences.',
      icon: <Smartphone className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Performance Optimization',
      description: 'Speeding up your store’s time-to-interactive so visitors don’t abandon their shopping carts.',
      icon: <ArrowUpRight className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Shopify Development"
        description="Launch an elegant, low-maintenance online store fast with our Shopify development services."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'E-Commerce', href: '/ecommerce-development' },
          { name: 'Shopify', href: '/ecommerce-development/shopify' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Fast & Reliable Shopify Stores
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Shopify is a leading platform designed specifically for seamless retail operations. It takes away the pain of server management and security, providing a robust ecosystem to grow your market presence rapidly.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team provides both out-of-the-box Shopify setup and highly customized Shopify Liquid template development. We ensure your store doesn’t just look like a template but perfectly aligns with your premium brand identity.
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
                  src="https://picsum.photos/seed/shopify/800/800"
                  alt="Shopify Development"
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
