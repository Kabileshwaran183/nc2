import React from "react";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

const ContactCTA = ({
  title = "Have a question about this product?",
  description = "Reach out to our team for guidance, availability, or pricing details.",
}) => {
  return (
    <div className="mt-16 rounded-xl bg-[#FFF200] p-8 md:p-10 text-center">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm md:text-base text-gray-800 max-w-xl mx-auto">{description}</p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="font-bold py-2 px-6 rounded-full bg-gray-900 text-white transform transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          Contact Us
        </Link>
        <a
          href="https://wa.me/918667408717?text=hello I need buliding products and cement !"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold py-2 px-6 rounded-full bg-white text-gray-900 inline-flex items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <BsWhatsapp /> WhatsApp Us
        </a>
      </div>
    </div>
  );
};

export default ContactCTA;
