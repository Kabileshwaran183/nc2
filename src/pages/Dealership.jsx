import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Dealership from "../components/Dealarship";
import SEO from "../components/SEO";

const DealershipPage = () => {
  return (
    <>
      <SEO
        title="Our Dealership"
        description="Natarajan and Co is an authorised dealer for UltraTech, Birla White, Myk Laticrete, Fosroc, Araldite, and Dr Fixit in Karaikudi."
      />
      <PageHeader
        eyebrow="Dealership"
        title="Our Dealership Partners"
        description="Get to know the brands we're authorised to represent, and how our dealership supports customers across Karaikudi."
        breadcrumb="Dealership"
      />

      <Dealership />

      <div className="top-container-1 pt-0">
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-8 md:p-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">Want to Know More?</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mb-6">
            Browse the products we stock from each brand, or get in touch with our team directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/brands"
              className="font-bold py-2 px-6 rounded-full bg-[#FFF200] text-gray-900 transform transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              View All Brands
            </Link>
            <Link
              to="/products"
              className="font-bold py-2 px-6 rounded-full bg-white border border-gray-200 text-gray-800 transform transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Browse Products
            </Link>
            <Link
              to="/contact"
              className="font-bold py-2 px-6 rounded-full bg-white border border-gray-200 text-gray-800 transform transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealershipPage;
