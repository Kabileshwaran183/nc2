import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import RelatedProducts from "../components/RelatedProducts";
import ContactCTA from "../components/ContactCTA";
import SEO from "../components/SEO";
import products from "../data/products";

const FAQ = [
  {
    q: "Is this product genuine?",
    a: "Yes. As an authorised dealer, we source this product directly through official brand channels.",
  },
  {
    q: "Is this product available in stock right now?",
    a: "Stock can vary by season and demand. Contact us or visit our Karaikudi store to confirm current availability.",
  },
  {
    q: "Can I get help choosing the right quantity or product variant?",
    a: "Yes, our team can guide you based on your project details — just get in touch before you order.",
  },
];

const ProductDetails = () => {
  const { productSlug } = useParams();
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = products
    .filter((p) => p.slug !== product.slug && p.brandSlug === product.brandSlug)
    .slice(0, 3);

  const relatedFallback = related.length > 0
    ? related
    : products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <SEO title={product.name} description={product.shortDescription} />
      <PageHeader eyebrow={product.brand} title={product.name} breadcrumb={product.name} />

      <section className="top-container-1">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#8a7600] hover:text-gray-800 transition-colors duration-300 mb-8"
        >
          <FaArrowLeft /> Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <ScrollReveal variant="scale">
            <div className="bg-[#f5f7fa] rounded-xl p-10 flex items-center justify-center shadow-md border border-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-64 md:max-h-80 object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right">
            <span className="text-xs font-bold uppercase tracking-wide text-[#8a7600]">
              {product.brand} &middot; {product.category}
            </span>
            <h1 className="mt-2 text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">{product.description}</p>

            <Link
              to={`/brands/${product.brandSlug}`}
              className="inline-block mt-5 text-sm font-semibold text-[#8a7600] hover:text-gray-800 transition-colors duration-300"
            >
              View all {product.brand} products &rarr;
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <ScrollReveal variant="fade-up">
            <h2 className="font-bold text-lg text-gray-800 mb-4">Key Features</h2>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-[#c9a900] mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <h2 className="font-bold text-lg text-gray-800 mb-4">Main Benefits</h2>
            <ul className="space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-[#c9a900] mt-0.5 shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200}>
            <h2 className="font-bold text-lg text-gray-800 mb-4">Recommended Applications</h2>
            <ul className="space-y-3">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-[#c9a900] mt-0.5 shrink-0" /> {a}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* FAQ */}
        <ScrollReveal variant="fade-up">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        </ScrollReveal>
        <div className="space-y-4 mb-4">
          {FAQ.map((item, i) => (
            <ScrollReveal key={item.q} variant="fade-up" delay={i * 100}>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-1">{item.q}</h3>
                <p className="text-sm text-gray-600">{item.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <RelatedProducts products={relatedFallback} />

        <ContactCTA />
      </section>
    </>
  );
};

export default ProductDetails;
