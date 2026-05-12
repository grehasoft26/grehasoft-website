'use client';

import { ChevronDown } from 'lucide-react';

const faqs = [
    {
      q: 'Do you offer SEO services for small and mid-size businesses in Kochi?',
      a: 'Yes. Our SEO plans are designed to support businesses of all sizes, including small and mid-size companies in Kochi, Kakkanad, Infopark, and nearby areas.'
    },
    {
      q: 'How long does it take to see SEO results?',
      a: 'Most websites begin showing improvements within 8–12 weeks, depending on competition, search behavior, and your website’s current condition.'
    },
    {
      q: 'Do you provide SEO reports?',
      a: 'Yes. You receive detailed monthly reports with performance insights, user behavior patterns, keyword movements, and actionable recommendations.'
    },
    {
      q: 'Can SEO help my business outside Kochi?',
      a: 'Yes. Our strategies work for both Kochi-focused searches and broader Kerala-based search intent.'
    },
    {
      q: 'Do you optimize Google Business Profile?',
      a: 'Yes. We optimize Maps visibility, reviews signals, local citations, and location-based search triggers.'
    },
    {
      q: 'Can you help my business appear in “near me” searches in Kochi?',
      a: 'Yes. We strengthen your local presence with accurate business details, location signals, map optimization, and content that matches how people search in Kochi.'
    },
    {
      q: 'Do you create SEO plans based on how people search and behave online?',
      a: 'Absolutely. We study user intent, search patterns, and browsing behavior to build an SEO plan that aligns with what customers are actually looking for.'
    },
    {
      q: 'Do you support businesses targeting multiple locations in Kerala?',
      a: 'Yes. We optimize for Kochi along with Infopark, Kakkanad, Thrissur, Calicut, Trivandrum, and other Kerala regions to help you attract location-specific traffic.'
    },
    {
      q: 'Can you optimize my website for better performance across different devices?',
      a: 'Yes. We ensure your website runs smoothly on mobile, desktop, and tablets, offering a faster, more responsive experience for all types of users.'
    },
    {
      q: 'Do you provide SEO strategies for businesses that rely heavily on maps and direction-based searches?',
      a: 'Yes. We optimize your presence in Google Maps, improve route discovery, and enhance signals that help users find your business easily when searching for nearby services.'
    },
    {
      q: 'Do your SEO services help businesses that receive calls and walk-ins from local customers?',
      a: 'Yes. Our optimization improves visibility for intent-driven searches like “open now,” “near me,” and location-specific keywords, helping you attract more calls and visits.'
    },
    {
      q: 'Do you offer content optimization that matches how people ask questions on search engines?',
      a: 'Yes. We create and refine content that answers real user questions, matches conversational search patterns, and supports better visibility in rich answers and snippets.'
    }
  ];

export default function FAQSection() {
  return (
 <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 text-center md:text-left">
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Support & Insights</span>
              <h2 className="text-4xl font-black text-dark mb-6 leading-tight">Frequent <br />Questions</h2>
              <p className="text-gray-500 mb-8">
                Learn more about our SEO process, timelines, and reporting standards across Kerala.
              </p>
              <div className="p-8 bg-primary rounded-3xl text-white">
                <p className="text-sm font-bold opacity-80 mb-4 tracking-widest uppercase">Growth Tip</p>
                <p className="text-lg italic font-medium">"Search behavior evolves. Stay aligned with what users expect to find."</p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <summary className="p-6 flex items-center justify-between cursor-pointer list-none font-bold text-dark hover:text-primary transition-colors">
                    <span className="text-sm md:text-base">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-500 whitespace-pre-line border-t border-gray-100 pt-4 leading-relaxed text-xs md:text-sm">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}