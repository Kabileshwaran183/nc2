import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { slug, name, brand, category, shortDescription, image } = product;

  return (
    <div className="group h-full flex flex-col bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden
                     transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <div className="h-40 md:h-44 bg-[#f5f7fa] flex items-center justify-center p-6 overflow-hidden">
        <img
          src={image}
          alt={`${name} - ${brand}`}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-bold uppercase tracking-wide text-[#8a7600]">{brand} &middot; {category}</span>
        <h3 className="mt-1 font-bold text-lg text-gray-800 our-font">{name}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">{shortDescription}</p>
        <Link
          to={`/products/${slug}`}
          className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#8a7600] hover:text-gray-800 transition-all duration-300 hover:gap-2.5"
        >
          View Details
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
