import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

/**
 * NavigationCard
 * The entire card is a single <Link> (per routing a11y rules, no nested
 * buttons/links inside a clickable link). The "button" is a styled span.
 */
const NavigationCard = ({ to, title, description, image, icon: Icon, buttonLabel, delay = 0 }) => {
  return (
    <Link
      to={to}
      style={{ transitionDelay: `${delay}ms` }}
      className="group h-full flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md
                 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-[#FFF200]
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FFF200]"
    >
      <div className="relative h-44 md:h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div
          className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#FFF200] text-gray-900 text-xl
                     flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110"
        >
          <Icon />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-lg md:text-xl text-gray-800 our-font">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
        <span className="inline-flex items-center gap-2 mt-4 font-bold text-sm text-gray-900 transition-all duration-300 group-hover:gap-3">
          {buttonLabel}
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default NavigationCard;
