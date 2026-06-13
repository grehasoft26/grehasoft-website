
"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918921540183?text=Hi! I am interested in Grehasoft's IT solutions and services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed 
        bottom-4 left-4 
        sm:bottom-5 sm:left-5
        md:bottom-6 md:left-6
        z-[9999]

        w-12 h-12
        sm:w-14 sm:h-14

        rounded-full
        bg-[#25D366]
        shadow-2xl

        flex items-center justify-center

        transition-all duration-300
        hover:scale-110
        hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]

        active:scale-95
      "
    >
      <FaWhatsapp
        className="
          text-white
          text-2xl
          sm:text-3xl
        "
      />
    </a>
  );
}