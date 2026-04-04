import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Code2, Server, Workflow, Lock } from 'lucide-react';

export default function CustomDevelopmentPage() {
  const features = [
    {
      title: 'Bespoke Architecture',
      description: 'Built exclusively for your unique processes seamlessly integrating with existing tools.',
      icon: <Workflow className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Modern Tech Stack',
      description: 'Utilizing Next.js, React, Node.js, and other modern frameworks for optimal performance.',
      icon: <Code2 className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Highly Scalable',
      description: 'Designed to handle increased traffic and data effortlessly as you grow.',
      icon: <Server className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Enterprise Security',
      description: 'Strict security protocols and secure coding practices to protect sensitive data.',
      icon: <Lock className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Custom Website Development"
        description="Tailor-made web applications designed and engineered for complex business requirements."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Development', href: '/website-development' },
          { name: 'Custom Websites', href: '/custom-development' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Engineered for Your Unique Success
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Off-the-shelf solutions don't always cut it. When your business has specific, complex workflows, custom web development is the right path. We build bespoke applications from the ground up, fitting perfectly into your operational needs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our full-stack development team handles everything from API integrations to sophisticated backend dashboards, ensuring your digital infrastructure is solid, scalable, and completely yours.
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
                  src="https://picsum.photos/seed/customdev/800/800"
                  alt="Custom Website Development"
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
