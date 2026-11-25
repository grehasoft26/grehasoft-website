"use client";

import { useEffect, useState } from "react";
import { getContact, submitContactForm } from "@/lib/backend-api";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Sparkles,
} from "lucide-react";

const DEFAULT_CONTACT = {
  subtitle: "GET IN TOUCH",
  title: "Let's Start a",
  highlight: "Project Together",
  description: "We are ready to build your next big product. Get in touch with our experts to discuss your requirements.",
  email: "info@grehasoft.com",
  phone: "+91 9876543210",
  address: "Grehasoft Technologies, Bangalore, India",
  working_hours: "Mon - Fri: 9:00 AM - 6:00 PM",
  support_title: "Quick Support?",
  support_description: "Chat with our customer service team now for immediate assistance.",
  form_title: "Send Us a Message",
  button_text: "Send Message",
};

export default function Contact({ initialData }: { initialData?: any }) {
  const [fetchedData, setFetchedData] = useState<any>(initialData || null);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // HANDLE CHANGE
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // AUTO HIDE SUCCESS (with cleanup)
  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [success]);

  // FETCH DATA
  useEffect(() => {
    if (initialData) {
      setFetchedData(initialData);
      setError(false);
      return;
    }

    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await getContact();
        if (!isMounted) return;
        setFetchedData(res?.[0]?.acf || null);
        setError(false);
      } catch (err) {
        console.error("Error loading contact data:", err);
        if (!isMounted) return;
        setFetchedData(null);
        setError(true);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [initialData]);

  if (!fetchedData && !error) return null;

  const data = fetchedData || DEFAULT_CONTACT;

  const contactInfo = [
    {
      title: "EMAIL US",
      value: data.email,
      href: data.email ? `mailto:${String(data.email).trim()}` : undefined,
      icon: Mail,
      color: "bg-primary/10 text-primary border border-primary/15",
    },
    {
      title: "CALL US",
      value: data.phone,
      href: data.phone
        ? `tel:${String(data.phone).replace(/[^\d+]/g, "")}`
        : undefined,
      icon: Phone,
      color: "bg-accent/10 text-accent border border-accent/15",
    },
    {
      title: "VISIT US",
      value: data.address,
      icon: MapPin,
      color: "bg-primary/10 text-primary border border-primary/15",
    },
    {
      title: "WORKING HOURS",
      value: data.working_hours,
      icon: Clock,
      color: "bg-accent/10 text-accent border border-accent/15",
    },
  ];

  // VALIDATION
  const validate = () => {
    const newErrors: any = {};

    if (!form.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitContactForm(form);

      if (res && res.success) {
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setErrors({});
      }
    } catch (err) {
      console.error("Error sending message:", err);
      alert("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fullHeading = [data.title, data.highlight].filter(Boolean).join(" ");

  return (
    <section
      id="contact"
      className="section-padding !py-12 md:!py-16 bg-gray-50 relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col h-full"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">
                  {data.subtitle}
                </span>
              </div>

              <h2
                className="w-fit max-w-full text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.15] pb-1.5 mb-4 tracking-tight text-balance bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #05044A 0%, #0753F6 50%, #1AB728 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {fullHeading}
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-xl">
                {data.description}
              </p>

              {/* COMPACT 2x2 CONTACT CARDS */}
              <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-4 bg-white rounded-box-lg border border-gray-100 shadow-xs hover:shadow-md hover:border-primary/20 transition-all"
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-box-sm flex-shrink-0 ${item.color}`}
                    >
                      <item.icon className="w-4.5 h-4.5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {item.title}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-dark hover:text-primary text-sm font-semibold leading-snug break-words block transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-dark text-sm font-semibold leading-snug break-words whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK SUPPORT NAVY/BLUE GRADIENT CARD */}
            <div className="mt-5 lg:mt-auto lg:pt-5">
              <div
                className="text-white p-4 sm:p-5 rounded-box-lg flex items-start sm:items-center gap-4 shadow-lg border border-white/10 relative overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #05044A 0%, #05044A 55%, #0753F6 100%)",
                }}
              >
                <div className="pointer-events-none absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-accent/20 blur-2xl" />

                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-accent relative z-10">
                  <MessageSquare className="w-5 h-5" />
                </div>

                <div className="min-w-0 relative z-10">
                  <p className="font-bold text-base text-white leading-snug">
                    {data.support_title}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mt-0.5">
                    {data.support_description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-white px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7 lg:px-8 lg:pt-12 lg:pb-8 rounded-box-lg shadow-[0_15px_45px_-25px_rgba(5,4,74,0.14)] border border-gray-100 flex flex-col h-full"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-dark mb-4 tracking-tight">
              {data?.form_title || "Send Us a Message"}
            </h3>

            {/* SUCCESS */}
            {success && (
              <p
                role="status"
                className="mb-4 px-4 py-2.5 rounded-box-sm bg-accent/10 border border-accent/20 text-accent text-sm font-semibold"
              >
                Message sent successfully!
              </p>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col flex-1 gap-5 sm:gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5 sm:gap-y-6">
                {/* NAME */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-gray-600 mb-1.5 block"
                  >
                    Full Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-3.5 py-3 rounded-box-sm border text-sm text-dark placeholder:text-gray-400 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } bg-gray-50/80 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold text-gray-600 mb-1.5 block"
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-3.5 py-3 rounded-box-sm border text-sm text-dark placeholder:text-gray-400 ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } bg-gray-50/80 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-xs font-semibold text-gray-600 mb-1.5 block"
                  >
                    Phone
                  </label>

                  <input
                    id="contact-phone"
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className={`w-full px-3.5 py-3 rounded-box-sm border text-sm text-dark placeholder:text-gray-400 ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    } bg-gray-50/80 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-semibold text-gray-600 mb-1.5 block"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className={`w-full px-3.5 py-3 rounded-box-sm border text-sm text-dark placeholder:text-gray-400 ${
                      errors.subject ? "border-red-500" : "border-gray-200"
                    } bg-gray-50/80 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all`}
                  />

                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-gray-600 mb-1.5 block"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className={`w-full flex-1 min-h-[120px] px-3.5 py-3 rounded-box-sm border text-sm text-dark placeholder:text-gray-400 ${
                    errors.message ? "border-red-500" : "border-gray-200"
                  } bg-gray-50/80 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none`}
                />

                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-primary text-white text-sm sm:text-base font-semibold flex justify-center items-center gap-2 hover:bg-primary/90 shadow-md shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {isSubmitting
                    ? "Sending..."
                    : data?.button_text || "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
