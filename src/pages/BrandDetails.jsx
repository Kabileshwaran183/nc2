import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import RelatedProducts from "../components/RelatedProducts";
import ContactCTA from "../components/ContactCTA";
import SEO from "../components/SEO";
import brands from "../data/brands";
import products from "../data/products";
import services from "../data/services";

const BrandDetails = () => {
  const { brandSlug } = useParams();
  const brand = brands.find((b) => b.slug === brandSlug);

  if (!brand) {
    return <Navigate to="/brands" replace />;
  }

  const brandProducts = products.filter((p) => p.brandSlug === brand.slug);
  const relatedServices = services.slice(0, 2);

  return (
    <>
      <SEO title={`${brand.name} Products`} description={brand.intro} />

      {/* Brand banner */}
      <div className="relative h-64 md:h-80 bg-black overflow-hidden">
        <img
          src={brand.banner}
          alt={`${brand.name} banner`}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <ScrollReveal variant="scale">
            <div className="w-20 h-20 rounded-lg bg-white p-3 shadow-lg mx-auto mb-4">
              <img src={brand.logo} alt={`${brand.name} logo`} className="w-full h-full object-contain" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100}>
            <h1 className="text-2xl md:text-4xl font-bold text-white">{brand.name}</h1>
            <p className="mt-2 text-sm md:text-base text-slate-300">{brand.category}</p>
          </ScrollReveal>
        </div>
      </div>

      <section className="top-container-1">
        <Link
          to="/brands"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#8a7600] hover:text-gray-800 transition-colors duration-300 mb-8"
        >
          <FaArrowLeft /> Back to Brands
        </Link>

        <ScrollReveal variant="fade-up">

          <div className=" text-center mb-16">
            <h2 className="text-xl md:text-2xl font-bold ] mb-4 inline-block
              rounded-full
              bg-[#FFF200]/25
              px-3 py-1.5
              text-[10px] font-bold
              uppercase
              tracking-widest
              text-[#8a7600]
              sm:px-4 sm:text-xs
              md:text-sm">About {brand.name}</h2>
            <p className="text-gray-600 leading-relaxed">{brand.description}</p>
          </div>
        </ScrollReveal>

        {brandProducts.length > 0 && (
          <RelatedProducts products={brandProducts} title={`${brand.name} Products We Stock`} />
        )}

        <div className="mt-16">
          <ScrollReveal variant="fade-up">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Related Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 ">
            {relatedServices.map((s, i) => (
              <ScrollReveal key={s.slug} variant="fade-up" delay={i * 100} className="h-full">
                <Link
                  to={`/services/${s.slug}`}
                  className="block h-full bg-gray-50 rounded-xl p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-bold text-gray-800 mb-2">{s.name}</h3>
                  <p className="text-sm text-gray-600">{s.shortDescription}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ContactCTA
          title={`Interested in ${brand.name} products?`}
          description="Contact us for availability and guidance on the right product for your project."
        />
      </section>
    </>
  );
};

export default BrandDetails;
