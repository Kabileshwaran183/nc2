import React, { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 550);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="">
            <nav
                data-aos="fade-down"
                className={`${isScrolled ? "md:bg-[rgb(255,242,0)]" : "bg-[rgba(255,242,0,0.0)]"
                    } p-2 fixed w-full z-50 transition-all duration-300`}
            >
                <div className={` h-10 xl:h-12  px ${isScrolled ? "text-[#1f1d1dec]" : "text-white"}  hidden  md:block`}>
                    <ul className=" flex gap-10 justify-center py-2 font-bold text-lg xl:text-2xl  ">
                        <li><a href="/" className={` ${isScrolled ? "hover:text-[#1f1d1d]" : "hover:text-[#FFF200]"} our-font `}>Home</a></li>
                        <li><a href="#about" className={` ${isScrolled ? "hover:text-[#1f1d1d]" : "hover:text-[#FFF200]"} our-font `}>About </a></li>
                        <li><a href="#Products" className={` ${isScrolled ? "hover:text-[#1f1d1d]" : "hover:text-[#FFF200]"} our-font`}>Products</a></li>
                        <li><a href="#Dealership" className={` ${isScrolled ? "hover:text-[#1f1d1d]" : "hover:text-[#FFF200] "} our-font `}>Dealership</a></li>
                        <li><a href="#contact" className={` ${isScrolled ? "hover:text-[#1f1d1d]" : "hover:text-[#FFF200]"} our-font`}>Contacts</a></li>
                    </ul>
                </div>
                <span
                    className="text-xl mdl:hidden bg-[#00000048] w-10 h-10 inline-flex items-center justify-center text-white rounded-xl cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <FiMenu />
                </span>
                
                {showMenu && (
                    <div 
                    className="
                    z-50 w-[60%] md:w-[45%] md:hidden h-screen overflow-scroll absolute top-0 left-0 p-4 scrollbar-hide bg-[#FFF200]"
                    >
                        <div className="flex flex-col gap-8 py-12 relative">
                            <ul className="flex flex-col text- gap-4 pl-2 py-4">
                            <li><a href="/" onClick={() => setShowMenu(!showMenu)} className= "text-gray-800 hover:text-white our-font">Home</a></li>
                            <li><a href="#about" onClick={() => setShowMenu(!showMenu)} className= "text-gray-800 hover:text-white our-font">About </a></li>
                            <li><a href="#Products" onClick={() => setShowMenu(!showMenu)} className= "text-gray-800 hover:text-white our-font">Products</a></li>
                            <li><a href="#Dealership" onClick={() => setShowMenu(!showMenu)} className= "text-gray-800 hover:text-white our-font">Dealership</a></li>
                            <li><a href="#contact" onClick={() => setShowMenu(!showMenu)} className= "text-gray-800 hover:text-white our-font">Contacts</a></li>
                            </ul>
                            <div className="flex flex-col border-2 mx-3 border-black rounded-xl bg-[rgba(32,32,31,0.58)] p-8">
                                <h2 className="text-base uppercase font-titleFont mb-4 text-white">
                                    Find us on
                                </h2>
                                <div className="flex gap-4 text-white">
                                    <span className="bannerIcon">
                                        <a href="https://wa.me/91+9842611032?text=hello I need buliding products and cement !" target="_blank"><BsWhatsapp /></a>
                                    </span>
                                    <span className="bannerIcon">
                                        <CgWebsite />
                                    </span>
                                    <span className="bannerIcon text-lg">
                                        <CiInstagram  />
                                    </span>
                                </div>
                            </div>
                            <span
                                onClick={() => setShowMenu(!showMenu)}
                                className="
                    absolute top-2 right-4 text-black hover:text-designColor duration-300 text-xl cursor-pointer"
                            >
                                <MdClose />
                            </span>
                        </div>
                    </div>
                )}

            </nav>
        </section>
    );
};

export default Navbar;
