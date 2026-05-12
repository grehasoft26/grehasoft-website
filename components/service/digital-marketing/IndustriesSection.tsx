'use client';
import { motion } from 'motion/react';
import { Globe, MapPin, Rocket, Shield, TrendingUp, Zap , Monitor, Stethoscope, Building2, GraduationCap, Users, Utensils, ShoppingBag, Briefcase } from 'lucide-react';
 const industries = [
    { name: 'IT & Software Companies', icon: <Monitor className="w-5 h-5" /> },
    { name: 'Healthcare, Clinics, and Doctors', icon: <Stethoscope className="w-5 h-5" /> },
    { name: 'Real Estate Developers & Builders', icon: <Building2 className="w-5 h-5" /> },
    { name: 'Educational Institutions & Training Centers', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Restaurants, Cafes & Cloud Kitchens', icon: <Utensils className="w-5 h-5" /> },
    { name: 'Travel, Tourism & Hospitality Services', icon: <Globe className="w-5 h-5" /> },
    { name: 'E-Commerce Stores & Online Retailers', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Professional Service Providers', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'Small & Medium Businesses across multiple sectors', icon: <Users className="w-5 h-5" /> },
  ];

export default function IndustriesSection() {
  return (
     <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block ">Tailored Focus</span>
            <h2 className="text-4xl font-black text-dark mb-6">Industries We Serve in Kochi, Kerala</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Grehasoft supports a diverse mix of industries across Kochi and Kerala, offering tailored SEO strategies that match each sector’s search behaviour, audience demand, and competition levels. We work closely with:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {industries.map((ind, i) => (
              <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 transition-all group">
                <div className="text-primary group-hover:scale-110 transition-transform flex-shrink-0">{ind.icon}</div>
                <span className="font-bold text-dark text-[10px] sm:text-xs leading-tight">{ind.name}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500 leading-relaxed font-medium italic border-t border-gray-200 pt-10">
              Every industry receives a customised SEO plan built around intent-based keywords, local search patterns, and content that reflects real user needs. This ensures each business gains meaningful visibility in the Kochi and Kerala markets.
            </p>
          </div>
        </div>
      </section>
  );
}