import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const BrandCard = ({ brand }) => {
  const { slug, name, logo, category, intro, highlight } = brand;

  return (
    <div
      className={`group h-full flex flex-col rounded-xl p-6 border transition-all duration-300 ease-in-out
                  hover:-translate-y-2 hover:shadow-xl
                  ${highlight ? "bg-[#FFF200] border-[#FFF200] shadow-lg" : "bg-white border-gray-100 shadow-md"}`}
    >
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center p-2 mb-4 transition-transform duration-300 group-hover:scale-105
                        ${highlight ? "bg-white" : "bg-[#f5f7fa]"}`}>
        <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
      </div>
      <h3 className={`font-bold text-lg our-font ${highlight ? "text-gray-900" : "text-gray-800"}`}>{name}</h3>
      <span className={`text-xs font-semibold uppercase tracking-wide mt-1 ${highlight ? "text-gray-800" : "text-[#8a7600]"}`}>
        {category}
      </span>
      <p className={`mt-3 text-sm leading-relaxed flex-1 ${highlight ? "text-gray-800" : "text-gray-600"}`}>{intro}</p>
      <Link
        to={`/brands/${slug}`}
        className={`inline-flex items-center gap-1.5 mt-4 text-sm font-semibold transition-all duration-300 hover:gap-2.5
                    ${highlight ? "text-gray-900" : "text-[#8a7600] hover:text-gray-800"}`}
      >
        Explore Brand
        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default BrandCard;
