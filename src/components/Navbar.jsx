import React, { useState, useEffect } from "react";

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
                
                className={`${isScrolled ? "md:bg-[rgb(255,242,0)]" : "bg-[rgba(255,242,0,0.0)]"
                    } p-2 fixed w-full z-50 transition-all duration-300`}
            >
            
            <div className={`h-16 xl:h-20 px-4 ${isScrolled ? "text-[#1f1d1dec]" : "text-white"} flex items-center justify-between md:justify-between `}>
                <div className="md:block hidden">
    <img className="xl:w-32 lg:w-24 w-20 h-30 " src={`${isScrolled ? "/assets/7.png":"/assets/logomain.png"}`} alt="Logo" /></div>
    <div className="xl:mr-96 lg:mr-36 mr-16">
    <ul className="hidden md:flex gap-10  items-center font-bold text-lg lg:text-xl xl:text-2xl">
        <li><a href="/" className={` ${isScrolled ? "hover:text-[#f5f7f6]" : "hover:text-[#FFF200]"} our-font `}>Home</a></li>
        <li><a href="#about" className={` ${isScrolled ? "hover:text-[#f5f7f6]" : "hover:text-[#FFF200]"} our-font `}>About</a></li>
        <li><a href="#Products" className={` ${isScrolled ? "hover:text-[#f5f7f6]" : "hover:text-[#FFF200]"} our-font`}>Products</a></li>
        <li><a href="#Dealership" className={` ${isScrolled ? "hover:text-[#f5f7f6]" : "hover:text-[#FFF200] "} our-font `}>Dealership</a></li>
        <li><a href="#contact" className={` ${isScrolled ? "hover:text-[#f5f7f6]" : "hover:text-[#FFF200]"} our-font`}>Contacts</a></li>
    </ul></div>
</div>

                <span
                    className="text-xl md:hidden absolute -bottom-[-15px] bg-[#00000048] w-10 h-10 inline-flex items-center justify-center text-white rounded-xl cursor-pointer "
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <FiMenu />
                </span>
                
                {showMenu && (
                    <div 
                    className="
                    z-50 w-[60%] md:w-[45%] md:hidden h-screen overflow-scroll absolute top-0 left-0 p-4 right-0 bottom-0 scrollbar-hide bg-[#FFF200]"
                    >
                        <div className="flex flex-col gap-8 py-4 relative">
                            <div className="">
                            <img className="w-28 h-30 absolute -top-9 left-[-20px] " src="/assets/7.png " alt="Logo" /></div>
                            <ul className="flex flex-col text-lg max-sm:text-base gap-4 pl-2 py-10">
                            <li><a href="/" onClick={() => setShowMenu(!showMenu)} className= "text-gray-800 hover:text-white our-font">Home</a></li>
                            <li><a href="#about" onClick={() => setShowMenu(!showMenu)} className= "text-gray-800 hover:text-white our-font">About </a></li>
                            <li><a href="#Products" onClick={() => setShowMenu(!showMenu)} className= "text-gray-800 hover:text-white our-font">Products</a></li>
                            <li><a href="#Dealership" onClick={() => setShowMenu(!showMenu)} className= "text-gray-800 hover:text-white our-font">Dealership</a></li>
                            <li><a href="#contact" onClick={() => setShowMenu(!showMenu)} className= "text-gray-800 hover:text-white our-font">Contacts</a></li>
                            </ul>
                            
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
