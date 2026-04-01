import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { CreditCard, FileText, Printer, Shield } from 'lucide-react';

export default function VisitingCardsLetterHeadsPage() {
  const features = [
    {
      title: 'Professional Design',
      description: 'High-quality and professional designs that represent your brand effectively.',
      icon: <CreditCard className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Consistent Branding',
      description: 'Ensuring your visiting cards and letterheads are consistent with your brand identity.',
      icon: <FileText className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Print Ready',
      description: 'We provide you with print-ready files that you can take to any printer.',
      icon: <Printer className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Copyright Protection',
      description: 'We provide you with full ownership and copyright of your designs.',
      icon: <Shield className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Visiting Cards & Letter Heads"
        description="We create professional and impactful visiting cards and letterheads that represent your brand identity."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Visiting Cards & Letter Heads', href: '/services/visiting-cards-letter-heads' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Professional Visiting Cards & Letter Heads Design Services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your visiting cards and letterheads are an essential part of your business identity. They're often the first thing your customers see and the one thing they'll remember.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of expert designers will work with you to understand your brand and create visiting cards and letterheads that perfectly represent your identity. We focus on creating professional and impactful designs that help you build a strong brand presence.
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
                  src="https://picsum.photos/seed/cards/800/800"
                  alt="Visiting Cards & Letter Heads"
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
