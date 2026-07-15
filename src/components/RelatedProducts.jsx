import React from "react";
import ScrollReveal from "./ScrollReveal";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ products, title = "Related Products" }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-16">
      <ScrollReveal variant="fade-up">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <ScrollReveal key={product.slug} variant="fade-up" delay={i * 100} className="h-full">
            <ProductCard product={product} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
