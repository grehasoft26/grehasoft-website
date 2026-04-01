import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Settings, Layout, Zap, Lock } from 'lucide-react';

export default function WordPressWebsitesPage() {
  const features = [
    {
      title: 'Custom Themes',
      description: 'Unique designs that stand out from the crowd and reflect your brand identity.',
      icon: <Layout className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Plugin Integration',
      description: 'Enhance your website with powerful features and functionalities.',
      icon: <Settings className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Fast Performance',
      description: 'Optimized WordPress sites that load quickly and provide a great user experience.',
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Enhanced Security',
      description: 'Robust security measures to protect your WordPress site from threats.',
      icon: <Lock className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="WordPress Websites"
        description="We build flexible, easy-to-manage, and powerful WordPress websites for businesses of all sizes."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'WordPress Websites', href: '/services/wordpress-websites' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Expert WordPress Development Services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                WordPress is the world's most popular content management system (CMS), and for good reason. It's flexible, easy to use, and highly customizable.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our WordPress experts can help you build anything from a simple blog to a complex e-commerce store. We focus on creating clean, efficient, and user-friendly WordPress sites that are easy for you to manage.
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
                  src="https://picsum.photos/seed/wordpress/800/800"
                  alt="WordPress Websites"
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
