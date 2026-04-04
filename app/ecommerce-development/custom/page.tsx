import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { PackageSearch, Settings2, CreditCard, ShieldCheck } from 'lucide-react';

export default function CustomEcommercePage() {
  const features = [
    {
      title: 'Bespoke Workflows',
      description: 'Custom inventory, pricing models, and checkout logic engineered entirely around your business.',
      icon: <Settings2 className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Advanced Search',
      description: 'Implement blazing fast, intelligent product search and filtering algorithms.',
      icon: <PackageSearch className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Custom Payments',
      description: 'Integration with specialized payment gateways and complex multi-vendor splits.',
      icon: <CreditCard className="w-8 h-8 text-primary" />,
    },
    {
      title: 'High-Grade Security',
      description: 'Enterprise-level compliance and data protection ensuring safe transactions at all times.',
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Custom E-Commerce Development"
        description="Scalable, tailor-made digital storefronts built from scratch for complex retail needs."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'E-Commerce', href: '/ecommerce-development' },
          { name: 'Custom E-Commerce', href: '/ecommerce-development/custom' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                E-Commerce Without Limits
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When platforms like Shopify or WooCommerce hit limitations, custom e-commerce development takes over. We build specialized retail platforms using modern frameworks like Node.js, Next.js, and specialized databases.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ideal for B2B models, multi-vendor marketplaces, and highly regulated industries—our custom architectures give you absolute ownership, unparalleled performance, and exactly the features you need without bloatware.
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
                  src="https://picsum.photos/seed/customecommerce/800/800"
                  alt="Custom E-Commerce"
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
