import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Palette, Image as ImageIcon, Layout, PenTool } from 'lucide-react';

export default function GraphicDesignPage() {
  const features = [
    {
      title: 'Visual Branding',
      description: 'Creating a consistent and professional visual identity for your brand.',
      icon: <Palette className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Marketing Collateral',
      description: 'Designing eye-catching brochures, flyers, and posters for your business.',
      icon: <ImageIcon className="w-8 h-8 text-primary" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces for your digital products.',
      icon: <Layout className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Custom Illustrations',
      description: 'Unique illustrations that add a personalized touch to your brand.',
      icon: <PenTool className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Graphic Design"
        description="We create stunning and impactful graphic designs that communicate your brand message effectively."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Graphic Design', href: '/services/graphic-design' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Creative Graphic Design Services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Graphic design is more than just making things look pretty. It's about communicating your brand message effectively and creating a lasting impression on your audience.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of creative designers will work with you to understand your brand and create designs that resonate with your target audience. We focus on creating high-quality designs that help you stand out from the competition.
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
                  src="https://picsum.photos/seed/graphic/800/800"
                  alt="Graphic Design"
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
