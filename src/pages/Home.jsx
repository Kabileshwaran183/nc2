import React from "react";
import StatsSection from "../components/StatsSection";
import HomeNavigationSection from "../components/HomeNavigationSection";
import SEO from "../components/SEO";
import JsonData from "../components/Constants/Product.json"
import  { About_home } from "../components/About_home";
import Hero from "../components/Hero";
import ContactCTA from "../components/ContactCTA";
import ContactDetails from "../components/ContactDetails";
import Contact from "../components/Contact";
import Services from "../components/Services";
import Product_home from "../components/Product_home";


const Home = () => {
  return (
    <>
      <SEO
        title="UltraTech Building Solutions, Karaikudi"
        description="Natarajan and Co is an authorised UltraTech dealer in Karaikudi. Explore our brands, products, dealership, and contact details."
      />
      {/* overflow-hidden contains StatsSection's own top margin so the black
          background stays visible directly behind the fixed navbar */}
      <div className=" overflow-hidden">
              <div className="bg-black">
        <img src="assets/natarajan and co mrng.jpg" alt="Natarajan and co ultratech buliding solution" title="natarajanandco ultratech buliding solution "
          className="absolute right-0 top-0 h-screen w-full object-cover opacity-50 z-[-1]"
        /></div>
        <Hero/>
        <About_home/>
        <StatsSection />
    
        
      </div>
          <Product_home  data={JsonData.Products}/>
      <HomeNavigationSection />
      <ContactDetails/>
      <Contact/>
      
      
    </>
  );
};

export default Home;
