import PageHeader from '@/components/PageHeader';
import BrandStory from '@/components/BrandStory';
import CTA from '@/components/CTA';
import { Quote, Sparkles, Heart, Zap } from 'lucide-react';

export default function BrandStoryPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Our Brand Story"
        description="The heart and soul of Grehasoft – our journey from a small startup to a global technology partner."
        breadcrumb={[
          { name: 'About', href: '/about' },
          { name: 'Brand Story', href: '/about/brand-story' },
        ]}
      />

      <BrandStory />

      {/* Detailed Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/brandstory/800/1000"
                alt="Grehasoft Team"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 p-10 bg-primary rounded-3xl text-white shadow-2xl hidden md:block max-w-sm">
                <Quote className="w-12 h-12 mb-6 opacity-50" />
                <p className="text-xl font-medium leading-relaxed italic">
                  "Our story is not just about technology; it's about the people we've helped and the dreams we've enabled."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=ceo" alt="CEO" />
                  </div>
                  <div>
                    <p className="font-bold">Founder & CEO</p>
                    <p className="text-sm opacity-70">Grehasoft</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-dark">The <span className="text-primary">Grehasoft</span> Philosophy</h2>
                <p className="text-text-gray text-lg leading-relaxed">
                  At Grehasoft, we believe that technology should be a force for good. It should empower businesses, simplify lives, and create opportunities where none existed before. This philosophy is at the core of everything we do.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Sparkles, title: 'Innovation First', desc: 'We don\'t just follow trends; we aim to set them.' },
                  { icon: Heart, title: 'Client Centric', desc: 'Your success is our ultimate measure of achievement.' },
                  { icon: Zap, title: 'Agile Mindset', desc: 'We adapt quickly to the ever-changing digital landscape.' },
                  { icon: Heart, title: 'Social Responsibility', desc: 'We give back to the community that supports us.' },
                ].map((item, index) => (
                  <div key={index} className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                    <p className="text-text-gray text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-dark mb-4">Looking to the Future</h3>
                <p className="text-text-gray leading-relaxed">
                  As we look ahead, our mission remains clear: to continue pushing the boundaries of what's possible in the digital world. We are excited about the future and the role we will play in shaping it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
