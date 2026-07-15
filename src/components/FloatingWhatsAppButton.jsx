import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918667408717?text=hello I need buliding products and cement !"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white text-2xl shadow-lg
                 transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95
                 animate-[fadeUp_700ms_ease-out]"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
      <FaWhatsapp className="relative" />
    </a>
  );
};

export default FloatingWhatsAppButton;
