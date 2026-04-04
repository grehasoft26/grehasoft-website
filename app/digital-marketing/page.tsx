import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Search, Share2, Mail, BarChart3 } from 'lucide-react';

export default function DigitalMarketingPage() {
  const features = [
    {
      title: 'SEO Optimization',
      description: 'Improve your website rankings on search engines like Google.',
      icon: <Search className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Social Media Marketing',
      description: 'Engage with your audience on platforms like Facebook, Instagram, and LinkedIn.',
      icon: <Share2 className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Email Campaigns',
      description: 'Reach your customers directly with personalized email marketing.',
      icon: <Mail className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Performance Tracking',
      description: 'Detailed analytics to measure the success of your marketing efforts.',
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="Digital Marketing"
        description="Grow your brand and reach more customers with our data-driven digital marketing strategies."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/digital-marketing' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Comprehensive Digital Marketing Solutions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Digital marketing is the key to reaching your target audience in the modern world. We offer a full suite of services to help you build your online presence and drive more traffic to your website.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of digital marketing experts will work with you to develop a customized strategy that aligns with your business goals. We focus on delivering measurable results and a high return on investment.
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
                  src="https://picsum.photos/seed/marketing/800/800"
                  alt="Digital Marketing"
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
