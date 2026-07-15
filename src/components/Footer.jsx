import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock, FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import ScrollReveal from "./ScrollReveal";
import products from "../data/products";
import brands from "../data/brands";
import contactDetails from "../data/contactDetails";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/brands", label: "Brands" },
  { to: "/products", label: "Products" },
  { to: "/dealership", label: "Dealership" },
  { to: "/contact", label: "Contact" },
];

const FOOTER_PRODUCTS = [
  "ultratech-cement",
  "birla-wallcare-putty",
  "myk-laticrete-tile-adhesive",
  "fosroc-construction-chemicals",
  "dr-fixit-waterproofing",
]
  .map((slug) => products.find((p) => p.slug === slug))
  .filter(Boolean);

const SOCIAL_LINKS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/918667408717?text=hello I need buliding products and cement !",
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    href: "mailto:karaikudinatarajan@gmail.com",
    icon: GoMail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/karaikudinatarajan?igsh=MTluYmZpemRsc3JsMA==",
    icon: FaInstagram,
  },
];

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#FFF200] transition-colors duration-300"
  >
    <span className="relative">
      {children}
      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#FFF200] transition-all duration-300 group-hover:w-full"></span>
    </span>
  </Link>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-14 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

            {/* Column 1: Business Info */}
            <ScrollReveal variant="fade-up" className="sm:col-span-2 lg:col-span-1">
              <img src="/assets/logomain.png" alt="Natarajan and Co logo" className="w-24 mb-4" />
              <h3 className="font-bold text-lg our-font mb-2">Natarajan and Co</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Authorised UltraTech dealer supplying quality building materials in Karaikudi for over 21 years.
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-lg
                               transition-all duration-300 hover:bg-[#FFF200] hover:text-gray-900 hover:scale-110
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-[#FFF200]"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Column 2: Quick Links */}
            <ScrollReveal variant="fade-up" delay={80}>
              <h4 className="font-bold text-sm uppercase tracking-wide text-[#FFF200] mb-4 our-font">Quick Links</h4>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.to}>
                    <FooterLink to={link.to}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Column 3: Products */}
            <ScrollReveal variant="fade-up" delay={160}>
              <h4 className="font-bold text-sm uppercase tracking-wide text-[#FFF200] mb-4 our-font">Products</h4>
              <ul className="space-y-3">
                {FOOTER_PRODUCTS.map((product) => (
                  <li key={product.slug}>
                    <Link
                      to={`/products/${product.slug}`}
                      className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#FFF200] transition-colors duration-300"
                    >
                      {product.name}
                      <FaArrowRight className="text-[10px] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Column 4: Our Brands */}
            <ScrollReveal variant="fade-up" delay={240}>
              <h4 className="font-bold text-sm uppercase tracking-wide text-[#FFF200] mb-4 our-font">Our Brands</h4>
              <ul className="space-y-3">
                {brands.map((brand) => (
                  <li key={brand.slug}>
                    <Link
                      to={`/brands/${brand.slug}`}
                      className="group inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#FFF200] transition-colors duration-300"
                    >
                      {brand.name}
                      <FaArrowRight className="text-[10px] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Column 5: Contact Information */}
            <ScrollReveal variant="fade-up" delay={320} className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-sm uppercase tracking-wide text-[#FFF200] mb-4 our-font">Contact Information</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="shrink-0 mt-0.5 text-[#FFF200]" />
                  <span>14 Paruppooranai South, V.O.C Road, Sri Muthu Mariamman Kovil Street, Karaikudi, Tamil Nadu - 630001</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaClock className="shrink-0 text-[#FFF200]" />
                  <span>Open daily &middot; 9:00 AM &ndash; 8:00 PM</span>
                </li>
                <li className="flex items-center gap-2">
                  <GoMail className="shrink-0 text-[#FFF200]" />
                  <a
                    href="mailto:karaikudinatarajan@gmail.com"
                    className="hover:text-[#FFF200] transition-colors duration-300 break-all"
                  >
                    karaikudinatarajan@gmail.com
                  </a>
                </li>
                {contactDetails.map((contact) => (
                  <li key={contact.id} className="flex items-start gap-2">
                    <FaPhoneAlt className="shrink-0 mt-0.5 text-[#FFF200] transition-transform duration-300 hover:-translate-y-0.5" />
                    <span className="flex flex-col">
                      <span className="text-gray-300">{contact.name}</span>
                      {contact.phones.map((p) => (
                        <a
                          key={p.href}
                          href={`tel:${p.href}`}
                          className="font-mono hover:text-[#FFF200] transition-colors duration-300"
                        >
                          {p.number}
                        </a>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 py-5 text-center">
          <p className="text-xs md:text-sm text-gray-500">
            &copy; {year} Natarajan and Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
