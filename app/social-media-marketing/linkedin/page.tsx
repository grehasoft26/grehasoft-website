import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { Briefcase, Building2, Mails, UserPlus } from 'lucide-react';

export default function LinkedInMarketingPage() {
  const features = [
    {
      title: 'B2B Lead Generation',
      description: 'Run targeted Lead Gen forms allowing instant, friction-free B2B data capture.',
      icon: <UserPlus className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Account-Based Marketing',
      description: 'Target specific executives, job titles, or companies you desperately want to close.',
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      title: 'InMail Campaigns',
      description: 'Slide directly into the DM inboxes of industry decision-makers via Sponsored Messaging.',
      icon: <Mails className="w-8 h-8 text-primary" />,
    },
    {
      title: 'Corporate Branding',
      description: 'Create phenomenal company pages cementing your status as a leader in your sector.',
      icon: <Briefcase className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <main>
      <PageHeader
        title="LinkedIn Marketing & Ads"
        description="The ultimate advertising arena for generating high-ticket B2B leads safely and effectively."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'SMM', href: '/social-media-marketing' },
          { name: 'LinkedIn Marketing', href: '/social-media-marketing/linkedin' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Connect With Decision Makers
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If your business sells to other businesses, professionals, or enterprises—LinkedIn is where your ad spend belongs. LinkedIn boasts unparalleled targeting parameters encompassing job titles, industry, company sizes, and seniority grids.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We orchestrate high-performing LinkedIn Advertising campaigns designed specifically to generate qualified B2B sales pipelines. Stop guessing on mass appeals and start advertising directly to the exact CEO profiles who buy your specific offering.
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
                  src="https://picsum.photos/seed/linkedinads/800/800"
                  alt="LinkedIn Marketing and Ads"
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
