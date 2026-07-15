import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBoxOpen, FaComments, FaTruck, FaHeadset } from "react-icons/fa";

const ICONS = {
  package: FaBoxOpen,
  chat: FaComments,
  truck: FaTruck,
  headset: FaHeadset,
};

const ServiceCard = ({ service }) => {
  const { slug, name, shortDescription, icon } = service;
  const Icon = ICONS[icon] || FaBoxOpen;

  return (
    <div className="group h-full flex flex-col bg-white rounded-xl p-6 border border-gray-100 shadow-md
                     transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div className="w-14 h-14 rounded-lg bg-[#FFF200]/20 flex items-center justify-center text-2xl text-[#8a7600]
                       transition-transform duration-300 group-hover:scale-105">
        <Icon />
      </div>
      <h3 className="mt-4 font-bold text-lg text-gray-800 our-font">{name}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">{shortDescription}</p>
      <Link
        to={`/services/${slug}`}
        className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#8a7600] hover:text-gray-800 transition-all duration-300 hover:gap-2.5"
      >
        Learn More
        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
