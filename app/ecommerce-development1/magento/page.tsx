import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Database, Shield, Zap, RefreshCcw } from 'lucide-react';

export default function MagentoPage() {
  const features = [
    {
      title: 'Enterprise Scalability',
      description: 'Robust architecture designed specifically to manage thousands of complex product variations effortlessly.',
      icon: <Database className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Advanced Customization',
      description: 'Deep customization capabilities enabling highly tailored, complex B2B and B2C checkout processes.',
      icon: <RefreshCcw className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Performance & Speed',
      description: 'Optimization frameworks applied to ensure lightning-fast shopping despite heavy data loads.',
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Enterprise Security',
      description: 'Strict adherence to security protocols, safeguarding large volume transactions consistently.',
      icon: <Shield className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Magento E-Commerce"
        description="Enterprise-grade Magento architecture for large-scale, complex retail ecosystems."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'E-Commerce', href: '/ecommerce-development' },
          { name: 'Magento', href: '/ecommerce-development/magento' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Scale With Adobe Commerce
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For medium to large enterprises, standard systems often falter under extensive catalog sizes. Magento (Adobe Commerce) provides an immensely powerful foundation designed to handle expansive, complex omni-channel retail workflows.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our Magento development services cover everything from complex data migrations to bespoke extension creation. We build highly scalable platforms equipped to perform gracefully during high-traffic revenue events.
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
                  src="https://picsum.photos/seed/magento/800/800"
                  alt="Magento E-Commerce Development"
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
