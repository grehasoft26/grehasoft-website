import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Code, Database, Server, Shield } from 'lucide-react';

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      title: 'Custom Development',
      description: 'Tailor-made solutions built from the ground up to meet your specific requirements.',
      icon: <Code className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Database Integration',
      description: 'Robust database systems for efficient data management and storage.',
      icon: <Database className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Scalable Architecture',
      description: 'Websites designed to grow with your business, handling increased traffic and data.',
      icon: <Server className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Secure Coding',
      description: 'Industry-standard security practices to protect your website and user data.',
      icon: <Shield className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Website Development"
        description="We build powerful, scalable, and secure web applications that empower your business."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Development', href: '/services/website-development' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Advanced Website Development Services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Website development is more than just writing code. It's about creating a robust and efficient platform that supports your business operations and provides a seamless experience for your users.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our development team is proficient in the latest web technologies and frameworks. We focus on performance, security, and scalability to ensure your web application remains competitive in the long run.
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
                  src="https://picsum.photos/seed/webdev/800/800"
                  alt="Website Development"
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
