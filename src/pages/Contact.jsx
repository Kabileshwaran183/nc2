import React from "react";
import PageHeader from "../components/PageHeader";
import ContactDetails from "../components/ContactDetails";
import Contact from "../components/Contact";
import SEO from "../components/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Natarajan and Co in Karaikudi — call us, message us on WhatsApp, or send an enquiry through our contact form."
      />
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Natarajan and Co"
        description="Have a question about a product or your project? Reach out — we're happy to help."
        breadcrumb="Contact"
      />
      <ContactDetails />
      <Contact />
    </>
  );
};

export default ContactPage;
