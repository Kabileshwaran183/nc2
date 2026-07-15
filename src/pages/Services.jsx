import React from "react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import ServiceCard from "../components/ServiceCard";
import ContactCTA from "../components/ContactCTA";
import SEO from "../components/SEO";
import services from "../data/services";

const Services = () => {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore the services offered by Natarajan and Co — building material supply, product consultation, bulk orders, and customer support."
      />
      <PageHeader
        eyebrow="Our Services"
        title="How We Support Your Project"
        description="Beyond just supplying materials, we help customers choose the right products and get them when they're needed."
        breadcrumb="Services"
      />

      <section className="top-container-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} variant="fade-up" delay={i * 100} className="h-full">
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>

        {/* Why choose our services */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Every service we offer is built around one goal — making sure you get the right
              materials, the right guidance, and dependable support, backed by 21+ years as an
              authorised dealer in Karaikudi.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {[
            { title: "Authorised Dealer", text: "Genuine products sourced through official brand channels." },
            { title: "Local Availability", text: "Stock ready in Karaikudi, without long wait times." },
            { title: "Experienced Team", text: "Guidance from a team that's worked with these brands for years." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} variant="fade-up" delay={i * 100} className="h-full">
              <div className="h-full bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="top-container-1 pt-0">
        <ContactCTA
          title="Need help with your project?"
          description="Talk to our team about which service fits your requirement best."
        />
      </div>
    </>
  );
};

export default Services;
