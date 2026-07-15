import React from "react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import ProductCard from "../components/ProductCard";
import ContactCTA from "../components/ContactCTA";
import SEO from "../components/SEO";
import products from "../data/products";

const Products = () => {
  return (
    <>
      <SEO
        title="Our Products"
        description="Browse the UltraTech, Birla White, Myk Laticrete, Fosroc, Araldite, and Dr Fixit products available at Natarajan and Co, Karaikudi."
      />
      <PageHeader
        eyebrow="Our Products"
        title="Quality Building Materials, All in One Place"
        description="Explore the cement, wall care, tiling, waterproofing, and adhesive products we stock from our authorised brand partners."
        breadcrumb="Products"
      />

      <section className="top-container-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} variant="fade-up" delay={(i % 4) * 100} className="h-full">
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="top-container-1 pt-0">
        <ContactCTA
          title="Looking for something specific?"
          description="If you don't see the exact product you need, contact us — we may still be able to help."
        />
      </div>
    </>
  );
};

export default Products;
