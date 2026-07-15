import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import ContactCTA from "../components/ContactCTA";
import SEO from "../components/SEO";
import services from "../data/services";

const ServiceDetails = () => {
  const { serviceSlug } = useParams();
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO title={service.name} description={service.shortDescription} />
      <PageHeader eyebrow="Our Services" title={service.name} breadcrumb={service.name} />

      <section className="top-container-1">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#8a7600] hover:text-gray-800 transition-colors duration-300 mb-8"
        >
          <FaArrowLeft /> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ScrollReveal variant="fade-up">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">{service.intro}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={100}>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Main Benefits</h2>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-gray-600">
                    <FaCheckCircle className="text-[#c9a900] mt-1 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <h2 className="text-xl font-bold text-gray-800 mb-4">How It Works</h2>
              <ol className="space-y-4 mb-8">
                {service.process.map((p, i) => (
                  <li key={p.step} className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#FFF200] text-gray-900 font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{p.step}</h3>
                      <p className="text-sm text-gray-600">{p.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1">
            <ScrollReveal variant="right">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 sticky top-24">
                <h3 className="font-bold text-gray-800 mb-3">Suitable For</h3>
                <ul className="space-y-2 mb-6">
                  {service.suitableFor.map((s) => (
                    <li key={s} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a900]"></span> {s}
                    </li>
                  ))}
                </ul>
                <h3 className="font-bold text-gray-800 mb-3">Related Services</h3>
                <ul className="space-y-2">
                  {related.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="text-sm text-[#8a7600] hover:text-gray-800 transition-colors duration-300"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ContactCTA
          title="Interested in this service?"
          description="Reach out to our team and we'll help you get started."
        />
      </section>
    </>
  );
};

export default ServiceDetails;
