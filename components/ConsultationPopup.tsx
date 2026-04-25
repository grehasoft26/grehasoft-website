"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
    nda: false,
  });

  // Automatically open the popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Simulate submission
    console.log("Form submitted", form);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 transition-opacity"
          />

          {/* Slide-over Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col overflow-y-auto"
          >
            <div className="p-8 md:p-10 flex flex-col h-full relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold text-dark mb-10 mt-4">
                Build your idea with us.
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-8 flex-grow">
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full pb-3 border-b border-gray-300 focus:border-primary focus:outline-none bg-transparent placeholder-gray-400 text-dark transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    required
                    className="w-full pb-3 border-b border-gray-300 focus:border-primary focus:outline-none bg-transparent placeholder-gray-400 text-dark transition-colors"
                  />
                </div>

                {/* Contact Number */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Contact Number *"
                    required
                    className="w-full pb-3 border-b border-gray-300 focus:border-primary focus:outline-none bg-transparent placeholder-gray-400 text-dark transition-colors"
                  />
                </div>

                {/* Requirements */}
                <div className="relative mt-2">
                  <textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={handleChange}
                    placeholder="Please specify your requirements, such as website enhancement, software development, product strategy, or other IT solutions*"
                    required
                    rows={4}
                    className="w-full pb-3 border-b border-gray-300 focus:border-primary focus:outline-none bg-transparent placeholder-gray-400 text-dark transition-colors resize-none text-sm leading-relaxed"
                  />
                </div>

                {/* NDA Checkbox */}
                <div className="flex items-center gap-3 mt-4">
                  <input
                    type="checkbox"
                    name="nda"
                    id="nda"
                    checked={form.nda}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label htmlFor="nda" className="text-sm text-gray-600 cursor-pointer">
                    Include Copy of a Non-Disclosure Agreement
                  </label>
                </div>

                {/* Submit Button */}
                <div className="mt-auto pt-8">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-[2rem] border-2 border-dark text-dark font-bold hover:bg-dark hover:text-white transition-all duration-300"
                  >
                    Request Proposal
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
