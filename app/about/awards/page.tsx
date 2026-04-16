import PageHeader from '@/components/PageHeader';
import Awards from '@/components/Awards';
import CTA from '@/components/CTA';
import { Trophy, Award, Star, Target, Shield, Zap, Heart, Globe } from 'lucide-react';
import Footer from '@/components/Footer';

const recognitions = [
  {
    icon: Shield,
    title: 'ISO 9001:2015 Certified',
    desc: 'Recognized for our commitment to quality management systems and customer satisfaction.',
  },
  {
    icon: Zap,
    title: 'Fastest Growing IT Company',
    desc: 'Awarded by the Kerala IT Association for exceptional growth and innovation in the sector.',
  },
  {
    icon: Heart,
    title: 'Best Place to Work',
    desc: 'Voted by our employees as one of the top workplaces in Kochi for three consecutive years.',
  },
  {
    icon: Globe,
    title: 'Global Delivery Excellence',
    desc: 'Acknowledged for our seamless delivery of complex projects across international borders.',
  },
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Awards & Recognitions"
        description="Celebrating our milestones and the industry recognition we've received for our commitment to excellence and innovation."
        breadcrumb={[
          { name: 'About', href: '/about' },
          { name: 'Awards', href: '/about/awards' },
        ]}
      />

      <Awards />

      {/* Additional Recognitions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-dark mb-6">Other <span className="text-primary">Recognitions</span></h2>
            <p className="text-text-gray text-lg">Beyond the major awards, we are proud of the certifications and industry acknowledgments that validate our processes and culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recognitions.map((item, index) => (
              <div key={index} className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{item.desc}</p>
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
