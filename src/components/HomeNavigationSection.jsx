import React from "react";
import { FaTags, FaBoxOpen, FaHandshake, FaPhoneAlt } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import NavigationCard from "./NavigationCard";

const NAV_CARDS = [
  {
    to: "/brands",
    title: "Our Brands",
    description: "Explore the trusted brands and product ranges available through our business.",
    image: "/assets/ultra buliding.jpg",
    icon: FaTags,
    buttonLabel: "Explore Brands",
  },
  {
    to: "/products",
    title: "Our Products",
    description: "Browse our available cement, wall care, tiling, waterproofing, and adhesive products.",
    image: "/assets/ultratech buliding product.jpg",
    icon: FaBoxOpen,
    buttonLabel: "View Products",
  },
  {
    to: "/dealership",
    title: "Dealership",
    description: "Learn more about our dealership, available brands, product support, and customer services.",
    image: "/assets/natarajan.webp",
    icon: FaHandshake,
    buttonLabel: "View Dealership",
  },
  {
    to: "/contact",
    title: "Contact Us",
    description: "Connect with our team for product enquiries, dealership information, availability, and support.",
    image: "/assets/natarajan and co mrng.jpg",
    icon: FaPhoneAlt,
    buttonLabel: "Contact Our Team",
  },
];

const HomeNavigationSection = () => {
  return (
    <section className="top-container-1">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
        <ScrollReveal variant="fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF200]/25 text-[#8a7600] text-xs md:text-sm font-bold tracking-widest uppercase our-font">
            Explore Our Business
          </span>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={100}>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-800">
            Everything You Need, All in One Place
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={200}>
          <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
            Explore our trusted brands, quality building materials, dealership information, and contact details.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {NAV_CARDS.map((card, i) => (
          <ScrollReveal key={card.to} variant="fade-up" delay={i * 120} className="h-full">
            <NavigationCard {...card} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default HomeNavigationSection;
