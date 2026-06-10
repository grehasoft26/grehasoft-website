import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Package, Settings, PenTool, Globe } from 'lucide-react';

export default function OpenCartPage() {
  const features = [
    {
      title: 'Easy Store Management',
      description: 'Streamlined administration interface for fast catalog and inventory management.',
      icon: <Settings className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Multilingual & Multi-currency',
      description: 'Built-in support for multiple languages and currencies for global operations.',
      icon: <Globe className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Custom Extensions',
      description: 'We develop custom OpenCart modules to extend native capabilities drastically.',
      icon: <PenTool className="w-8 h-8 text-primary" />,
    },
    {
      title: 'B2B & B2C Ready',
      description: 'Flexible architecture that supports diverse customer group structures.',
      icon: <Package className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="OpenCart Development"
        description="Lightweight yet powerful open-source e-commerce solutions for growing businesses."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'E-Commerce', href: '/ecommerce-development' },
          { name: 'OpenCart', href: '/ecommerce-development/opencart' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Flexible OpenCart Stores
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                OpenCart provides a transparent, easily customizable open-source alternative for e-commerce. It’s perfect for businesses that need highly independent hosting setups and direct code ownership for extensive customization.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team assists with full migrations, responsive theme development from scratch, and module creation. We optimize your OpenCart installation to be lightweight and fast while integrating the payment processing tools you need.
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
                  src="https://picsum.photos/seed/opencart/800/800"
                  alt="OpenCart Development"
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
