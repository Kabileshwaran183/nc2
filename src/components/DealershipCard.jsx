import React from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

/**
 * DealershipCard
 * Reusable card for the Dealership section. Supports a "highlighted"
 * variant which uses the site's primary brand color as background.
 */
const DealershipCard = ({ name, logo, para, location, highlight = false, delay = 0 }) => {
  return (
    <div
      className={`group h-full flex flex-col rounded-xl p-5 border transition-all duration-300 ease-in-out
                  hover:-translate-y-2 hover:shadow-xl
                  ${highlight
                    ? "bg-[#FFF200] border-[#FFF200] shadow-lg"
                    : "bg-white border-gray-100 shadow-md"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-14 h-14 shrink-0 rounded-lg flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-105
                      ${highlight ? "bg-white" : "bg-[#f5f7fa]"}`}
        >
          <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
        </div>
        <h3 className={`font-bold text-base md:text-lg leading-snug our-font ${highlight ? "text-gray-900" : "text-gray-800"}`}>
          {name}
        </h3>
      </div>

      <p className={`text-sm leading-relaxed flex-1 ${highlight ? "text-gray-800" : "text-gray-600"}`}>
        {para}
      </p>

      {location && (
        <p className={`flex items-center gap-1.5 text-xs mt-4 font-medium ${highlight ? "text-gray-800" : "text-gray-500"}`}>
          <FaMapMarkerAlt className={highlight ? "text-gray-900" : "text-[#c9b400]"} />
          {location}
        </p>
      )}

      <a
        href="#Dealership"
        className={`inline-flex items-center gap-1.5 mt-4 text-sm font-semibold transition-all duration-300
                    ${highlight ? "text-gray-900 hover:gap-2.5" : "text-[#8a7600] hover:gap-2.5 hover:text-gray-800"}`}
      >
        View Details
        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default DealershipCard;
