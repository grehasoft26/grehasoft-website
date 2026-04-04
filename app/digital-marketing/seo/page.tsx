import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';

export default function SEOPage() {
  return (
    <main>
      <PageHeader
        title="Search Engine Optimization (SEO)"
        description="Improve your search rankings, increase organic traffic, and establish your brand authority with our data-driven SEO strategies."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Digital Marketing', href: '/services/digital-marketing' },
          { name: 'SEO', href: '/services/digital-marketing/seo' }
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-6">About SEO Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Grehasoft, our Search Engine Optimization (SEO) services are designed to help your business achieve higher visibility on search engines like Google. We utilize proven methodologies, including on-page optimization, quality link building, and technical SEO, to drive targeted organic traffic to your website. Our approach is transparent, data-driven, and focused on delivering long-term ROI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-dark mb-6">Key Areas of Focus</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Keyword Research & Strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">On-Page Optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Technical SEO Audits</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Link Building & Authority</span>
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
