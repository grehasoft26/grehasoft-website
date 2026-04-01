import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Monitor, Layout, Smartphone, Search } from 'lucide-react';

export default function WebsiteDesignPage() {
  const features = [
    {
      title: 'Responsive Design',
      description: 'Websites that look great on all devices, from desktops to smartphones.',
      icon: <Smartphone className="w-8 h-8 text-primary" />,
    },
    {
      title: 'User Experience (UX)',
      description: 'Intuitive layouts and navigation designed to convert visitors into customers.',
      icon: <Layout className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Modern UI',
      description: 'Clean, professional, and visually appealing designs that reflect your brand.',
      icon: <Monitor className="w-8 h-8 text-primary" />,
    },
    {
      title: 'SEO Friendly',
      description: 'Built with search engines in mind to help your business get discovered.',
      icon: <Search className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Website Design"
        description="We create stunning, high-performance websites that represent your brand and drive results."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Design', href: '/services/website-design' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Professional Website Design Company in Kochi
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Grehasoft is one of the best website design companies in Kochi, Kerala. We offer attractive and high-quality website design services that help businesses establish a strong online presence.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of expert designers works closely with you to understand your business goals and create a website that not only looks great but also performs exceptionally well. Whether you need a simple landing page or a complex corporate website, we have the expertise to deliver.
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
                  src="https://picsum.photos/seed/webdesign/800/800"
                  alt="Website Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-white font-bold text-4xl mb-1">10+</p>
                <p className="text-white/80 text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
