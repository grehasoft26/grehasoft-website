"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function Contact() {
  const [data, setData] = useState<any>(null);

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
              {data.form_title}
            </h3>

            <form className="space-y-5">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Email Address" />
              <input className="input" placeholder="Phone Number" />
              <input className="input" placeholder="Subject" />
              <textarea className="input h-32" placeholder="Your Message" />

              <button className="w-full py-4 rounded-full bg-blue-600 text-white font-semibold flex justify-center items-center gap-2 hover:bg-blue-700 transition">
                {data.button_text}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}