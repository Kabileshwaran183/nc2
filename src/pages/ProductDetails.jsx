import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

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

  const product = products.find(
    (item) => item.slug === productSlug
  );

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.slug !== product.slug &&
        item.brandSlug === product.brandSlug
    )
    .slice(0, 3);

  const relatedFallback =
    relatedProducts.length > 0
      ? relatedProducts
      : products
          .filter((item) => item.slug !== product.slug)
          .slice(0, 3);

  const productSections = [
    {
      id: "features",
      title: "Key Features",
      items: product.features || [],
    },
    {
      id: "benefits",
      title: "Main Benefits",
      items: product.benefits || [],
    },
    {
      id: "applications",
      title: "Recommended Applications",
      items: product.applications || [],
    },
  ];

  return (
    <>
      <SEO
        title={product.name}
        description={product.shortDescription}
      />

      {/* Product Banner */}
      <section
        className="
          relative
          h-[240px]
          overflow-hidden
          bg-black
          sm:h-[280px]
          md:h-[320px]
          lg:h-[380px]
        "
      >
        <img
          src={product.image}
          alt={`${product.name} banner`}
          className="
            absolute inset-0
            h-full w-full
            object-cover
            opacity-40
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/20
            via-black/40
            to-black/80
          "
        />

        {/* Banner Content */}
        <div
          className="
            relative z-10
            flex h-full
            items-center
            justify-center
            px-4
            text-center
            sm:px-6
          "
        >
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="mx-auto max-w-3xl">
              <span
                className="
                  inline-block
                  rounded-full
                  border border-[#FFF200]/40
                  bg-[#FFF200]/15
                  px-3 py-1
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#FFF200]
                  backdrop-blur-sm
                  sm:px-4
                  sm:text-xs
                "
              >
                Product Details
              </span>

              <h1
                className="
                  mt-4
                  break-words
                  text-2xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                "
              >
                {product.name}
              </h1>

              <p
                className="
                  mt-2
                  text-xs
                  text-slate-300
                  sm:text-sm
                  md:text-base
                "
              >
                {product.brand} • {product.category}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Product Content */}
      <main
        className="
          top-container-1
          overflow-hidden
          px-4 py-8
          sm:px-6 sm:py-10
          lg:px-8 lg:py-14
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Back Button */}
          <ScrollReveal variant="left">
            <Link
              to="/products"
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                text-[#8a7600]
                transition-all
                duration-300
                hover:-translate-x-1
                hover:text-gray-800
                sm:mb-10
                sm:text-sm
              "
            >
              <FaArrowLeft className="text-xs" />

              Back to Products
            </Link>
          </ScrollReveal>

          {/* Product Overview */}
          <section
            className="
              mb-12
              grid
              grid-cols-1
              items-center
              gap-8
              md:grid-cols-2
              md:gap-10
              lg:mb-20
              lg:gap-16
            "
          >
            {/* Product Image */}
            <ScrollReveal variant="scale">
              <div
                className="
                  group
                  flex
                  min-h-[280px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-gray-100
                  bg-[#f5f7fa]
                  p-6
                  shadow-md
                  sm:min-h-[350px]
                  sm:p-8
                  md:min-h-[420px]
                  lg:p-12
                "
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="
                    h-auto
                    max-h-[230px]
                    w-full
                    max-w-[350px]
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    sm:max-h-[290px]
                    md:max-h-[350px]
                  "
                />
              </div>
            </ScrollReveal>

            {/* Product Information */}
            <ScrollReveal variant="right">
              <div>
                <span
                  className="
                    inline-block
                    rounded-full
                    bg-[#FFF200]/20
                    px-3 py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#8a7600]
                    sm:px-4
                    sm:text-xs
                  "
                >
                  {product.brand} • {product.category}
                </span>

                <h2
                  className="
                    mt-4
                    break-words
                    text-2xl
                    font-bold
                    leading-tight
                    text-gray-800
                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  {product.name}
                </h2>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-gray-600
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {product.description}
                </p>

                <Link
                  to={`/brands/${product.brandSlug}`}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#FFF200]
                    px-5 py-3
                    text-xs
                    font-bold
                    text-gray-900
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    active:scale-95
                    sm:text-sm
                  "
                >
                  View All {product.brand} Products

                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </ScrollReveal>
          </section>

          {/* Product Features */}
          <section
            className="
              mb-12
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:mb-20
              lg:grid-cols-3
              lg:gap-7
            "
          >
            {productSections.map((section, sectionIndex) => (
              <ScrollReveal
                key={section.id}
                variant="fade-up"
                delay={sectionIndex * 100}
                className="h-full"
              >
                <article
                  className="
                    group
                    h-full
                    rounded-xl
                    border
                    border-gray-100
                    bg-white
                    p-5
                    shadow-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    sm:p-6
                    lg:p-7
                  "
                >
                  <div
                    className="
                      mb-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FFF200]/25
                      text-[#8a7600]
                    "
                  >
                    <FaCheckCircle />
                  </div>

                  <h2
                    className="
                      mb-5
                      text-lg
                      font-bold
                      text-gray-800
                      sm:text-xl
                    "
                  >
                    {section.title}
                  </h2>

                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          items-start
                          gap-3
                          text-sm
                          leading-6
                          text-gray-600
                        "
                      >
                        <FaCheckCircle
                          className="
                            mt-1
                            shrink-0
                            text-[#c9a900]
                          "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </section>

          {/* FAQ Section */}
          <section className="mb-12 lg:mb-16">
            <ScrollReveal variant="fade-up">
              <div className="mb-7 text-center sm:mb-10">
                <span
                  className="
                    inline-block
                    rounded-full
                    bg-[#FFF200]/20
                    px-4 py-1.5
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-[#8a7600]
                  "
                >
                  FAQ
                </span>

                <h2
                  className="
                    mt-4
                    text-2xl
                    font-bold
                    text-gray-800
                    sm:text-3xl
                  "
                >
                  Frequently Asked Questions
                </h2>
              </div>
            </ScrollReveal>

            <div
              className="
                mx-auto
                max-w-4xl
                space-y-4
              "
            >
              {FAQ.map((item, index) => (
                <ScrollReveal
                  key={item.q}
                  variant="fade-up"
                  delay={index * 100}
                >
                  <article
                    className="
                      rounded-xl
                      border
                      border-gray-100
                      bg-gray-50
                      p-5
                      transition-all
                      duration-300
                      hover:border-[#FFF200]
                      hover:bg-white
                      hover:shadow-md
                      sm:p-6
                    "
                  >
                    <h3
                      className="
                        text-sm
                        font-bold
                        leading-6
                        text-gray-800
                        sm:text-base
                      "
                    >
                      {item.q}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-gray-600
                      "
                    >
                      {item.a}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <RelatedProducts products={relatedFallback} />

          {/* Contact Section */}
          <ContactCTA />
        </div>
      </main>
    </>
  );
};

export default ProductDetails;