"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function Contact() {
  const [data, setData] = useState<any>(null);
const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);

  // HANDLE CHANGE
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }
}, [success]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://antiquewhite-swan-450844.hostingersite.com/wp-json/wp/v2/contact"
      );
      setData(res.data[0]?.acf);
    };

    fetchData();
  }, []);

  if (!data) return null;

  const contactInfo = [
    {
      title: "EMAIL US",
      value: data.email,
      icon: Mail,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "CALL US",
      value: data.phone,
      icon: Phone,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "VISIT US",
      value: data.address,
      icon: MapPin,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "WORKING HOURS",
      value: data.working_hours,
      icon: Clock,
      color: "bg-orange-50 text-orange-600",
    },
  ];

  // VALIDATION
  const validate = () => {
    let newErrors: any = {};

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

  if (!validate()) return;

  try {
    const res = await axios.post(
      "https://antiquewhite-swan-450844.hostingersite.com/wp-json/custom/v1/contact",
      form
    );

    if (res.data.success) {
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
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send message");
  }
};
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold uppercase text-sm mb-4 block tracking-wider">
              {data.subtitle}
            </span>

            <h2 className="text-5xl font-bold text-[#0b0b45] leading-tight mb-6">
              {data.title}{" "}
              <span className="text-blue-600">{data.highlight}</span>
            </h2>

            <p className="text-gray-600 text-lg mb-10 max-w-xl">
              {data.description}
            </p>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color}`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                      {item.title}
                    </p>
                    <p className="text-[#0b0b45] font-semibold leading-snug">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BLUE BOX */}
            <div className="mt-10 bg-blue-600 text-white p-6 rounded-2xl flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-lg">
                  {data.support_title}
                </p>
                <p className="text-white/80 text-sm">
                  {data.support_description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100"
          >
             
      <h3 className="text-2xl font-bold text-[#0b0b45] mb-6">
        {data?.form_title || "Send Us a Message"}
      </h3>

      {/* SUCCESS MESSAGE */}
      {success && (
        <p className="mb-4 text-green-600 font-medium">
          Message sent successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">

        {/* NAME */}
        <div>
          <label className="text-sm text-gray-600 mb-2 block">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.name ? "border-red-500" : "border-gray-200"
            } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-600 mb-2 block">Email</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.email ? "border-red-500" : "border-gray-200"
            } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* PHONE */}
        <div>
          <label className="text-sm text-gray-600 mb-2 block">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.phone ? "border-red-500" : "border-gray-200"
            } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* SUBJECT */}
        <div>
          <label className="text-sm text-gray-600 mb-2 block">Subject</label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.subject ? "border-red-500" : "border-gray-200"
            } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div className="col-span-2">
          <label className="text-sm text-gray-600 mb-2 block">
            Your Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your project..."
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.message ? "border-red-500" : "border-gray-200"
            } bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* BUTTON */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-blue-600 text-white font-semibold flex justify-center items-center gap-2 hover:bg-blue-700 transition"
          >
            {data?.button_text || "Send Message"}
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