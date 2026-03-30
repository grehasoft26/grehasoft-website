'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const contactInfo = [
  {
    title: 'Email Us',
    value: 'info@grehasoft.com',
    icon: Mail,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Call Us',
    value: '+1 (234) 567-890',
    icon: Phone,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Visit Us',
    value: '123 Tech Street, Silicon Valley, CA',
    icon: MapPin,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Working Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
    icon: Clock,
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Contact Info Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-dark leading-tight">
              Ready to Start Your <span className="text-primary">Next Project?</span>
            </h2>
            <p className="text-lg text-text-gray mb-12 leading-relaxed">
              Have a question or want to discuss a project? Our team is here to help you navigate your digital transformation journey.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{info.title}</h3>
                    <p className="text-dark font-semibold leading-tight">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Proof */}
            <div className="mt-12 p-8 bg-primary rounded-2xl text-white flex items-center gap-6 shadow-xl">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xl font-bold mb-1">Need Immediate Help?</p>
                <p className="text-white/80">Chat with our experts 24/7 for any technical queries.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Contact Form Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-dark mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-widest">Subject</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
                    <option>Software Development</option>
                    <option>Mobile App Development</option>
                    <option>Digital Marketing</option>
                    <option>Other Services</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-dark uppercase tracking-widest">Your Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full py-5 text-lg">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
