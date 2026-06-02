'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Terms of Service"
        description="Please read these terms carefully before using our services."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Terms of Service', href: '/terms' },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-text-gray leading-relaxed"
          >
            <h2 className="text-3xl font-bold text-dark mb-6">Introduction</h2>
            <p className="mb-8">
              Welcome to Grehasoft. These terms and conditions outline the rules and regulations for the use of Grehasoft's Website, located at www.grehasoft.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use Grehasoft if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-3xl font-bold text-dark mb-6">Intellectual Property Rights</h2>
            <p className="mb-8">
              Other than the content you own, under these Terms, Grehasoft and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>

            <h2 className="text-3xl font-bold text-dark mb-6">Restrictions</h2>
            <p className="mb-4">You are specifically restricted from all of the following:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Publishing any Website material in any other media;</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>Publicly performing and/or showing any Website material;</li>
              <li>Using this Website in any way that is or may be damaging to this Website;</li>
              <li>Using this Website in any way that impacts user access to this Website;</li>
              <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
              <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
              <li>Using this Website to engage in any advertising or marketing.</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark mb-6">Your Content</h2>
            <p className="mb-8">
              In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Grehasoft a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
            </p>

            <h2 className="text-3xl font-bold text-dark mb-6">No Warranties</h2>
            <p className="mb-8">
              This Website is provided "as is," with all faults, and Grehasoft express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
            </p>

            <h2 className="text-3xl font-bold text-dark mb-6">Limitation of Liability</h2>
            <p className="mb-8">
              In no event shall Grehasoft, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Grehasoft, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>

            <h2 className="text-3xl font-bold text-dark mb-6">Contact Us</h2>
            <p className="mb-8">
              If you have any questions about these Terms of Service, please contact us at info@grehasoft.com.
            </p>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
