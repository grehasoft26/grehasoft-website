import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';

export default function SMMPage() {
  return (
    <main>
      <PageHeader
        title="Social Media Marketing (SMM)"
        description="Engage your audience, build brand loyalty, and amplify your message across the most powerful social media platforms."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/services/digital-marketing' },
          { name: 'SMM', href: '/services/digital-marketing/smm' }
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">About SMM Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Your target audience is already on social media. Our Social Media Marketing (SMM) services at Grehasoft help you connect with them meaningfully. We craft engaging content, manage community interactions, and run highly targeted social ad campaigns to turn followers into brand advocates and paying customers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-6">Key Areas of Focus</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Social Media Strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Content Creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Community Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Paid Social Advertising</span>
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
