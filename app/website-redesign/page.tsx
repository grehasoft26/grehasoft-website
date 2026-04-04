import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { RefreshCw, Layout, Smartphone, Palette, Zap, Shield, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

const redesignSteps = [
  {
    title: 'Audit & Analysis',
    desc: 'We evaluate your current website\'s performance, user behavior, and pain points.',
  },
  {
    title: 'Strategic Planning',
    desc: 'Setting clear goals for the redesign, from improved UX to higher conversion rates.',
  },
  {
    title: 'Modern UI/UX Design',
    desc: 'Creating a fresh, contemporary look that aligns with your current brand identity.',
  },
  {
    title: 'Performance Optimization',
    desc: 'Upgrading the underlying technology for faster speeds and better SEO.',
  },
];

export default function WebsiteRedesign() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Website Redesign Services"
        description="Give your outdated website a fresh, modern look and improved performance with our expert redesign services."
        breadcrumb={[
          { name: 'Services', href: '/services' },
          { name: 'Website Redesign', href: '/website-redesign' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-6">Professional <span className="text-primary">Website Redesign</span> in Kochi</h2>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                Is your website looking a bit dated? Or maybe it's not performing as well as it used to? A website redesign can breathe new life into your digital presence, helping you stay ahead of the competition and better serve your customers.
              </p>
              <p className="text-text-gray text-lg mb-8 leading-relaxed">
                At Grehasoft, we don't just change the colors. We analyze what's working and what's not, then rebuild your site from the ground up to ensure it meets modern standards for design, speed, and user experience.
              </p>
              <div className="space-y-4">
                {['Modernize Your Brand', 'Improve User Experience', 'Increase Conversions', 'Mobile Optimization', 'Better SEO Performance'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-bold">BEFORE</div>
                  <img
                    src="https://picsum.photos/seed/redesign1/400/600"
                    alt="Redesign Before"
                    className="rounded-2xl shadow-lg opacity-50 grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4 pt-12">
                  <img
                    src="https://picsum.photos/seed/redesign2/400/600"
                    alt="Redesign After"
                    className="rounded-2xl shadow-2xl border-4 border-primary"
                    referrerPolicy="no-referrer"
                  />
                  <div className="h-48 bg-primary rounded-2xl flex items-center justify-center text-white font-bold">AFTER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Our <span className="text-primary">Redesign Process</span></h2>
            <p className="text-text-gray text-lg">A strategic approach to transforming your digital presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {redesignSteps.map((step, index) => (
              <div key={index} className="p-8 bg-white rounded-3xl border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 mt-2">{step.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer/>
      
    </main>
  );
}
