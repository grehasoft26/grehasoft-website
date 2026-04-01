import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';

export default function SEMPage() {
  return (
    <main>
      <PageHeader
        title="Search Engine Marketing (SEM)"
        description="Drive immediate, highly targeted traffic to your website with expertly managed Pay-Per-Click (PPC) and search engine marketing campaigns."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/services/digital-marketing' },
          { name: 'SEM', href: '/services/digital-marketing/sem' }
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">About SEM Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Grehasoft provides powerful Search Engine Marketing (SEM) solutions focused on maximizing your Return on Ad Spend (ROAS). By combining meticulous keyword targeting with compelling ad copy and continuous performance analysis, we ensure your ads reach the right audience at the perfect moment, bypassing the wait of organic growth and delivering immediate lead generation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-6">Key Areas of Focus</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Google Ads Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">PPC Campaign Strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Ad Copywriting & Testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Performance Tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
