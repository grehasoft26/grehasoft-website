import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { PenTool, Target, Zap, Shield } from 'lucide-react';

export default function LogoDesignPage() {
  const features = [
    {
      title: 'Unique Concepts',
      description: 'Original and creative logo designs that stand out from the crowd.',
      icon: <PenTool className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Brand Alignment',
      description: 'Logos that reflect your brand values and resonate with your audience.',
      icon: <Target className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Versatile Formats',
      description: 'Logos that look great on everything from business cards to billboards.',
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Copyright Protection',
      description: 'We provide you with full ownership and copyright of your logo design.',
      icon: <Shield className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Logo Design"
        description="We create unique and memorable logo designs that represent your brand identity."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Logo Design', href: '/services/logo-design' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Professional Logo Design Services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your logo is the face of your brand. It's the first thing your customers see and the one thing they'll remember.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of expert designers will work with you to understand your brand and create a logo that perfectly represents your identity. We focus on creating unique and memorable logos that help you build a strong brand presence.
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
                  src="https://picsum.photos/seed/logo/800/800"
                  alt="Logo Design"
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
