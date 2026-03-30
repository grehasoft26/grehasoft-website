import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Careers at Grehasoft"
        description="Join our team of passionate innovators and help us build digital experiences that drive growth and success for businesses worldwide."
        breadcrumb={[{ name: 'Careers', href: '/careers' }]}
      />
      
      {/* Why Join Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Why Join Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">Build Your <span className="text-primary">Future With Us</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Growth Opportunities', desc: 'We provide ample opportunities for professional growth and development.' },
              { title: 'Innovative Projects', desc: 'Work on cutting-edge projects and solve complex business challenges.' },
              { title: 'Collaborative Culture', desc: 'Join a team of passionate innovators who value collaboration and creativity.' },
            ].map((value, index) => (
              <div key={index} className="p-10 bg-gray-50 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 text-dark">{value.title}</h3>
                <p className="text-text-gray leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">Open Positions</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">Join Our <span className="text-primary">Expert Team</span></h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {[
              { title: 'Senior Software Developer', type: 'Full-time', location: 'Silicon Valley, CA' },
              { title: 'Mobile App Developer', type: 'Full-time', location: 'Remote' },
              { title: 'Digital Marketing Specialist', type: 'Full-time', location: 'Silicon Valley, CA' },
              { title: 'UI/UX Designer', type: 'Full-time', location: 'Remote' },
            ].map((position, index) => (
              <div key={index} className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-xl transition-all duration-500">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-dark">{position.title}</h3>
                  <p className="text-text-gray font-medium">{position.type} • {position.location}</p>
                </div>
                <button className="btn-primary">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </main>
  );
}
