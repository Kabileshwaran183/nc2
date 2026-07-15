import React from "react";
import {
  FaStore,
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import ScrollReveal from "./ScrollReveal";
import contactDetails from "../data/contactDetails";

const ICONS = {
  store: FaStore,
  person: FaUserCircle,
};

const ContactCard = ({ contact, delay = 0 }) => {
  const Icon = ICONS[contact.icon] || FaUserCircle;
  const highlight = contact.highlight;
  const primaryPhone = contact.phones?.[0];

  return (
    <ScrollReveal
      variant="right"
      delay={delay}
      className="h-full w-full"
    >
      <div
        className={`
          group flex h-full w-full flex-col
          rounded-xl border p-4
          shadow-md
          transition-all duration-300 ease-in-out
          sm:p-5
          lg:p-6
          hover:-translate-y-1 hover:shadow-xl
          ${
            highlight
              ? "border-[#FFF200] bg-[#FFF200] shadow-lg"
              : "border-gray-100 bg-white"
          }
        `}
      >
        {/* Contact Header */}
        <div className="mb-4 flex min-w-0 items-center gap-3 sm:gap-4">
          <div
            className={`
              flex h-12 w-12 shrink-0
              items-center justify-center
              rounded-full text-lg
              transition-transform duration-300
              group-hover:scale-105
              sm:h-14 sm:w-14 sm:text-xl
              ${
                highlight
                  ? "bg-white text-gray-900"
                  : "bg-[#FFF200]/20 text-[#8a7600]"
              }
            `}
          >
            <Icon />
          </div>

          <div className="min-w-0 flex-1">
            <h3
              className={`
                our-font break-words
                text-base font-bold
                sm:text-lg
                ${
                  highlight
                    ? "text-gray-900"
                    : "text-gray-800"
                }
              `}
            >
              {contact.name}
            </h3>

            {contact.role && (
              <p
                className={`
                  mt-0.5 text-xs
                  sm:text-sm
                  ${
                    highlight
                      ? "text-gray-800"
                      : "text-gray-500"
                  }
                `}
              >
                {contact.role}
              </p>
            )}
          </div>
        </div>

        {/* Phone and Email Details */}
        <div
          className={`
            mb-5 space-y-3
            text-xs
            sm:text-sm
            ${
              highlight
                ? "text-gray-900"
                : "text-gray-700"
            }
          `}
        >
          {contact.phones?.map((phone) => (
            <div
              key={phone.href}
              className="flex min-w-0 items-center gap-2"
            >
              <FaPhoneAlt
                className={`
                  shrink-0
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  ${
                    highlight
                      ? "text-gray-900"
                      : "text-[#8a7600]"
                  }
                `}
              />

              <a
                href={`tel:${phone.href}`}
                className="
                  min-w-0 break-all
                  font-mono font-semibold
                  outline-none
                  hover:underline
                  focus-visible:underline
                "
              >
                {phone.number}
              </a>
            </div>
          ))}

          {contact.email && (
            <div className="flex min-w-0 items-start gap-2">
              <FaEnvelope
                className={`
                  mt-0.5 shrink-0
                  ${
                    highlight
                      ? "text-gray-900"
                      : "text-[#8a7600]"
                  }
                `}
              />

              <a
                href={`mailto:${contact.email}`}
                className="
                  min-w-0 break-all
                  leading-relaxed
                  outline-none
                  hover:underline
                  focus-visible:underline
                "
              >
                {contact.email}
              </a>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div
          className="
            mt-auto grid
            grid-cols-1 gap-2.5
            xs:grid-cols-2
            sm:gap-3
          "
        >
          {primaryPhone && (
            <a
              href={`tel:${primaryPhone.href}`}
              aria-label={`Call ${contact.name}`}
              className={`
                inline-flex min-h-[42px]
                items-center justify-center
                gap-2 rounded-full
                px-3 py-2.5
                text-xs font-bold
                transition-all duration-300
                hover:scale-[1.03]
                active:scale-95
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#FFF200]
                focus-visible:ring-offset-2
                sm:px-4 sm:text-sm
                ${
                  highlight
                    ? "bg-gray-900 text-white"
                    : "bg-[#FFF200] text-gray-900"
                }
              `}
            >
              <FaPhoneAlt className="shrink-0 text-xs" />
              <span>Call Now</span>
            </a>
          )}

          {contact.whatsapp && (
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message ${contact.name} on WhatsApp`}
              className="
                inline-flex min-h-[42px]
                items-center justify-center
                gap-2 rounded-full
                bg-[#25D366]
                px-3 py-2.5
                text-xs font-bold
                text-white
                transition-all duration-300
                hover:scale-[1.03]
                active:scale-95
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#25D366]
                focus-visible:ring-offset-2
                sm:px-4 sm:text-sm
              "
            >
              <BsWhatsapp className="shrink-0 text-sm" />
              <span>WhatsApp</span>
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};

const ContactDetails = () => {
  return (
    <section
      className="
        top-container-1
        overflow-hidden
        px-4 py-10
        sm:px-6 sm:py-14
        lg:px-8 lg:py-16
      "
    >
      {/* Section Heading */}
      <div
        className="
          mx-auto mb-8
          max-w-2xl
          text-center
          sm:mb-10
          md:mb-14
        "
      >
        <ScrollReveal variant="fade-in">
          <span
            className="
              our-font inline-block
              rounded-full
              bg-[#FFF200]/25
              px-3 py-1.5
              text-[10px] font-bold
              uppercase
              tracking-widest
              text-[#8a7600]
              sm:px-4 sm:text-xs
              md:text-sm
            "
          >
            Contact Details
          </span>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <h2
            className="
              mt-4
              text-2xl font-bold
              leading-tight
              text-gray-800
              sm:text-3xl
              md:text-4xl
            "
          >
            Connect With Our Team
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200}>
          <p
            className="
              mx-auto mt-3
              max-w-xl
              text-sm
              leading-6
              text-gray-600
              sm:mt-4
              sm:text-base
              sm:leading-7
            "
          >
            Reach out to our team for product information,
            dealership enquiries, and personalised assistance
            with your building material needs.
          </p>
        </ScrollReveal>
      </div>

      {/* Image and Contact Cards */}
      <div
        className="
          mx-auto grid
          w-full max-w-7xl
          grid-cols-1
          items-stretch
          gap-6
          lg:grid-cols-5
          lg:gap-8
        "
      >
        {/* Business Image */}
        <ScrollReveal
          variant="left"
          className="
            order-1
            h-full
            lg:col-span-2
          "
        >
          <div
            className="
              h-[240px]
              w-full
              overflow-hidden
              rounded-xl
              border border-gray-100
              shadow-lg
              sm:h-[320px]
              md:h-[400px]
              lg:h-full
              lg:min-h-[550px]
            "
          >
            <img
              src="/assets/natarajan and co mrng.jpg"
              alt="Natarajan and Co storefront in Karaikudi"
              loading="lazy"
              className="
                h-full w-full
                object-cover
                transition-transform
                duration-500
                hover:scale-105
              "
            />
          </div>
        </ScrollReveal>

        {/* Contact Cards */}
        <div
          className="
            order-2 grid
            grid-cols-1
            items-stretch
            gap-5
            md:grid-cols-2
            sm:gap-6
            lg:col-span-3
          "
        >
          {contactDetails.map((contact, index) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;