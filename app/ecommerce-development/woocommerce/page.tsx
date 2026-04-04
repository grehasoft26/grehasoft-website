import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Blocks, ShoppingBag, PenTool, LayoutTemplate } from 'lucide-react';

export default function WooCommercePage() {
  const features = [
    {
      title: 'Seamless WordPress Integration',
      description: 'Combine professional blogging features seamlessly with your robust online storefront.',
      icon: <Blocks className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Custom Themes',
      description: 'We design bespoke WooCommerce themes that match your exact brand aesthetics and UI goals.',
      icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Plugin Customization',
      description: 'Extending out-of-the-box functionality with custom plugins tailored to your specific process.',
      icon: <PenTool className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Inventory Management',
      description: 'Efficiently control stock levels, set up varied product options, and establish seamless shipping rules.',
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="WooCommerce Development"
        description="Turn your WordPress website into a fully functional, high-converting e-commerce powerhouse."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'E-Commerce', href: '/ecommerce-development' },
          { name: 'WooCommerce', href: '/ecommerce-development/woocommerce' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Flexible Retail on WordPress
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                WooCommerce is the most popular e-commerce plugin for a reason—it’s flexible, easily managed, and incredibly capable. Our specialized WooCommerce developers can build everything from tiny boutique shops to massive retail portals.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We handle the technical complexities including performance optimization to counter WooCommerce bloat, implementing secure payment gateways, and migrating from legacy systems so you can focus entirely on selling.
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
                  src="https://picsum.photos/seed/woocommerce/800/800"
                  alt="WooCommerce Development"
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
