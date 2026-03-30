'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Software Development', href: '/services/software' },
      { name: 'Mobile App Development', href: '/services/mobile' },
      { name: 'Web Development', href: '/services/web' },
      { name: 'Digital Marketing', href: '/services/marketing' },
    ],
  },
  {
    title: 'Products',
    links: [
      { name: 'Grehasoft PMS', href: '/products/pms' },
      { name: 'E-Commerce Solutions', href: '/products/ecommerce' },
      { name: 'CRM Systems', href: '/products/crm' },
      { name: 'HRM Software', href: '/products/hrm' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Company Info */}
          <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 group">
  <img
    src="/images/logo.png"
    alt="Grehasoft"
    className="h-8 w-auto transition-all duration-300 mb-5"
  />
</Link>
           {/* <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  Greha<span className="text-accent">soft</span>
                </span>
              </div>
            </Link>*/}
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              Grehasoft is a leading IT solutions provider dedicated to transforming businesses through innovative technology and creative digital strategies.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-8 text-white">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-accent transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white/5 rounded-3xl border border-white/10 mb-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Call Us</p>
              <p className="text-lg font-bold">+1 (234) 567-890</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Email Us</p>
              <p className="text-lg font-bold">info@grehasoft.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Visit Us</p>
              <p className="text-lg font-bold">Silicon Valley, CA</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/10 gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Grehasoft. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <p className="text-white/40 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Grehasoft Team
          </p>
        </div>
      </div>
    </footer>
  );
}
