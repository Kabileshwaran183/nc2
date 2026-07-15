import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

/**
 * PageHeader
 * Shared hero/banner used at the top of every inner page (About, Services,
 * Products, Brands, Contact, etc.) so pages feel consistent with the site.
 */
const PageHeader = ({ eyebrow, title, description, breadcrumb }) => {
  return (
    <div className=" relative pt-28 pb-14 md:pt-36 md:pb-20 px-4 text-center overflow-hidden">
      
        <div className="bg-black">
        <img src="assets/natarajan and co mrng.jpg" alt="Natarajan and co ultratech buliding solution" title="natarajanandco ultratech buliding solution "
          className="absolute right-0 top-0 h-screen w-full object-cover opacity-50 z-[-1]"
        /></div>
      <div className="absolute inset-0 bg-[#00000090]"></div>
      <div className="relative max-w-3xl mx-auto">
        {eyebrow && (
          <ScrollReveal variant="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF200]/20 text-[#FFF200] text-xs md:text-sm font-bold tracking-widest uppercase our-font">
              {eyebrow}
            </span>
          </ScrollReveal>
        )}
        <ScrollReveal variant="fade-up" delay={100}>
          <h1 className="mt-4 text-2xl md:text-4xl xl:text-5xl font-bold text-white">{title}</h1>
        </ScrollReveal>
        {description && (
          <ScrollReveal variant="fade-up" delay={200}>
            <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed">{description}</p>
          </ScrollReveal>
        )}
        {breadcrumb && (
          <nav className="mt-5 text-xs md:text-sm text-slate-400" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#FFF200] transition-colors duration-300">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#FFF200]">{breadcrumb}</span>
          </nav>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
