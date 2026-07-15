import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
  FaAward,
} from "react-icons/fa";


const CORE_VALUES = [
  {
    icon: FaHandshake,
    title: "Trust",
    text: "Long-standing relationships with both our brand partners and our customers, built over two decades of consistent dealings.",
  },
  {
    icon: FaShieldAlt,
    title: "Reliability",
    text: "Being an authorised dealer means customers can count on genuine products and dependable local availability.",
  },
  {
    icon: FaUsers,
    title: "Customer Focus",
    text: "Understanding what each customer's project actually needs, rather than a one-size-fits-all approach.",
  },
  {
    icon: FaAward,
    title: "Consistency",
    text: "The same standard of service, whether it's a small household repair or a larger construction order.",
  },
];


export const About_home = () => {
    return (



        // <section className="top-container-1">
        


        //     <div id="about" className="py-2 bg-gray-50">
        //         <ScrollReveal variant="fade-up">
        //             <div className=" Title-div ">
        //                 <h2 className="title-text">About us</h2>
        //             </div>
        //         </ScrollReveal>
        //         <div className="flex justify-center md:justify-between items-center py-2 ">

        //             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        //                 <div className="flex justify-center">
        //                     <motion.div
        //                         className="flex justify-center"
        //                         initial={{ scale: 1, opacity: 0 }}
        //                         whileInView={{ scale: 1.1, opacity: 1 }}
        //                         transition={{ duration: 1.2, ease: "easeOut" }}
        //                         viewport={{ once: false, amount: 0.3 }}
        //                     >
        //                         <img
        //                             src="/assets/natarajan.webp"

        //                             className="w-full max-w-md rounded-lg shadow-lg"
        //                             alt="Natarajan and co ultratech buliding solution" title="natarajanandco ultratech buliding solution "
        //                         />
        //                     </motion.div>
        //                 </div>
        //                 <ScrollReveal variant="right">
        //                     <h2 className="md:text-3xl text-xl font-bold text-gray-800 mb-4">Natarajan and co</h2>
        //                     <p className="text-gray-600 leading-relaxed max-md:text-sm">
        //                         With 21 years of expertise as a Proud <strong> UltraTech</strong> partner, we specialize in providing high-quality construction products. Committed to excellence, we offer a complete range of materials to support your construction needs.
        //                     </p>
        //                 </ScrollReveal>
        //             </div>
        //         </div>
        //     </div>
        // </section>
           <section className="top-container-1">
        {/* Company introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 md:mb-24">
          <ScrollReveal variant="left">
            <img
              src="/assets/natarajan.webp"
              alt="Natarajan and Co store"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </ScrollReveal>
          <ScrollReveal variant="right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Natarajan and Co has been serving Karaikudi for over 23 years as an authorised
              dealer for UltraTech, India's No.1 cement brand. What started as a local
              building-materials shop has grown into a trusted supplier for homeowners,
              contractors, and small businesses across the region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Alongside UltraTech, we represent a range of well-known brands — including Birla
              White, Myk Laticrete, Fosroc, Araldite, and Dr Fixit — so customers can source
              cement, wall care, tiling, waterproofing, and adhesive products from a single,
              dependable dealer.
            </p>
          </ScrollReveal>
        </div>

        {/* History */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed">
              Over the past two decades, our business has grown around a simple idea: supply
              genuine building materials, back it up with honest advice, and be a dealer
              customers can return to for every project. That approach has kept us rooted in
              the Karaikudi community and connected with the brands we represent.
            </p>
          </div>
        </ScrollReveal>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-24">
          <ScrollReveal variant="left">
            <div className="h-full bg-gray-50 rounded-xl p-8 border border-gray-100">
              <FaBullseye className="text-3xl text-[#c9a900] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To make quality, genuine building materials easily accessible to every customer
                in and around Karaikudi, backed by honest guidance and reliable service.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right">
            <div className="h-full bg-gray-50 rounded-xl p-8 border border-gray-100">
              <FaEye className="text-3xl text-[#c9a900] mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To remain the building-materials dealer our community trusts first — known for
                genuine products, fair dealing, and dependable local service.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Core values */}
        <div className="mb-16 md:mb-24">
          <ScrollReveal variant="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
              What We Stand For
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, i) => (
              <ScrollReveal key={value.title} variant="fade-up" delay={i * 100} className="h-full">
                <div className="h-full bg-white rounded-xl p-6 border border-gray-100 shadow-md text-center
                                 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <value.icon className="text-3xl text-[#c9a900] mx-auto mb-3" />
                  <h3 className="font-bold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Strengths & commitment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-4">
          <ScrollReveal variant="left">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Why Customers Trust Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2"><span className="text-[#c9a900] font-bold">•</span> Authorised dealership status with every brand we carry, so products are genuine.</li>
              <li className="flex gap-2"><span className="text-[#c9a900] font-bold">•</span> Over two decades of local presence and experience in Karaikudi.</li>
              <li className="flex gap-2"><span className="text-[#c9a900] font-bold">•</span> Recognition from our brand partners for consistent dealership performance over the years.</li>
              <li className="flex gap-2"><span className="text-[#c9a900] font-bold">•</span> A team that's reachable by phone and available in person for guidance.</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal variant="right">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Quality Commitment</h3>
            <p className="text-gray-600 leading-relaxed">
              As an authorised dealer, every product we sell comes through official brand
              channels — not third-party resellers. That means what you buy from us is what
              the brand intended you to receive, with the local availability and support of a
              dealer who knows the products.
            </p>
          </ScrollReveal>
        </div>
      </section>

    );
};

export default About_home;
