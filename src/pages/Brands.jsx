import React from "react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import BrandCard from "../components/BrandCard";
import ContactCTA from "../components/ContactCTA";
import SEO from "../components/SEO";
import brands from "../data/brands";

const Brands = () => {
  return (
    <>
      <SEO
        title="Our Brands"
        description="Natarajan and Co is an authorised dealer for UltraTech, Birla White, Myk Laticrete, Fosroc, Araldite, and Dr Fixit in Karaikudi."
      />
      <PageHeader
        eyebrow="Our Brands"
        title="Authorised Dealership Partners"
        description="We represent trusted, established brands so you can be confident in the products you buy from us."
        breadcrumb="Brands"
      />

      <section className="top-container-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, i) => (
            <ScrollReveal key={brand.slug} variant="fade-up" delay={(i % 3) * 100} className="h-full">
              <BrandCard brand={brand} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="top-container-1 pt-0">
        <ContactCTA
          title="Want to know more about a brand?"
          description="Reach out and we'll help you find the right product from our brand range."
        />
      </div>
    </>
  );
};

export default Brands;
