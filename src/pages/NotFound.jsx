import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="min-h-[80vh] flex items-center justify-center px-4 text-center">
        <ScrollReveal variant="fade-up">
          <p className="text-6xl md:text-8xl font-bold text-[#FFF200] txt-shadow">404</p>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">Page Not Found</h1>
          <p className="mt-3 text-gray-600 max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/"
            className="button-all inline-block mt-8"
          >
            Back to Home
          </Link>
        </ScrollReveal>
      </div>
    </>
  );
};

export default NotFound;
