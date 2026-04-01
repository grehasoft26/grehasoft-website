import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Terminal, Cpu, Layers, Database } from 'lucide-react';

export default function SoftwareProgrammingPage() {
  const features = [
    {
      title: 'Custom Software',
      description: 'Bespoke software solutions tailored to your unique business processes.',
      icon: <Terminal className="w-8 h-8 text-primary" />,
    },
    {
      title: 'System Integration',
      description: 'Seamlessly connect different software systems for better efficiency.',
      icon: <Layers className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Backend Development',
      description: 'Robust and scalable backend systems for your applications.',
      icon: <Database className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Performance Tuning',
      description: 'Optimizing your software for maximum speed and efficiency.',
      icon: <Cpu className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Software Programming"
        description="We develop high-quality, efficient, and scalable software solutions that solve real-world problems."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Software Programming', href: '/services/software-programming' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Expert Software Programming Services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Software programming is the core of modern business operations. We provide expert programming services to help you build the tools you need to succeed.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of experienced programmers is proficient in a wide range of programming languages and technologies. We focus on writing clean, maintainable, and efficient code that meets your specific requirements.
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
                  src="https://picsum.photos/seed/software/800/800"
                  alt="Software Programming"
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
