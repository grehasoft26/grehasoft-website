'use client';

import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we handle your data."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy', href: '/privacy' },
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
              At Grehasoft, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
            </p>

            <h2 className="text-3xl font-bold text-dark mb-6">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Personal Identification Information (Name, email address, phone number, etc.)</li>
              <li>Usage Data (IP address, browser type, pages visited, etc.)</li>
              <li>Cookies and Tracking Technologies</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark mb-6">How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-3xl font-bold text-dark mb-6">Data Security</h2>
            <p className="mb-8">
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-3xl font-bold text-dark mb-6">Changes to This Privacy Policy</h2>
            <p className="mb-8">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-3xl font-bold text-dark mb-6">Contact Us</h2>
            <p className="mb-8">
              If you have any questions about this Privacy Policy, please contact us at info@grehasoft.com.
            </p>
          </motion.div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
