import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import ContactSection from '@/components/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Contact Us"
        description="Have a question or want to discuss a project? Our team is here to help you navigate your digital transformation journey."
        breadcrumb={[{ name: 'Contact', href: '/contact-us' }]}
      />
      <ContactSection />
      
      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0980985115384!2d76.3624484747584!3d10.008755372884577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d1640844371%3A0xea19af5b36a868cd!2sGrehasoft!5e0!3m2!1sen!2sin!4v1776750546532!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      
      <Footer />
    </main>
  );
}
