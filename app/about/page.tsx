import PageHeader from '@/components/PageHeader';
import AboutSection from '@/components/About';
import Awards from '@/components/Awards';
import BrandStory from '@/components/BrandStory';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="About Grehasoft"
        description="We are a team of passionate innovators dedicated to building digital experiences that drive growth and success for businesses worldwide."
        breadcrumb={[{ name: 'About', href: '/about' }]}
      />
      <AboutSection />
      
      {/* Our Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">The Principles That <span className="text-primary">Drive Us Forward</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.' },
              { title: 'Integrity', desc: 'We believe in transparency, honesty, and ethical business practices in everything we do.' },
              { title: 'Excellence', desc: 'We are committed to delivering the highest quality in every project we undertake.' },
            ].map((value, index) => (
              <div key={index} className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-dark">{value.title}</h3>
                <p className="text-text-gray leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Awards />
      
      <div className="container-custom pb-20">
        <div className="flex justify-center">
          <Link href="/about/awards" className="btn-primary inline-flex items-center gap-2 group">
            View All Awards & Recognitions
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <BrandStory />
      
      <CTA />
      <Footer/>
    </main>
  );
}
