import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

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
            className={`fixed w-full z-50 transition-all duration-300 }`}
            style={{ backgroundColor: isScrolled ?  "rgb(255, 242, 0)":"rgba(255, 242, 0, 0.0)" }}
        >
                <div className={`h-16  px-3 ${isScrolled ? "text-[#231F20]":"text-white"}   hidden  sm:block`}>
                    <ul className=" flex gap-8 font-bold text-xl  ">
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFF200]"} `}>Home</a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFF200]"} `}>About </a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFF200]"} `}>Products</a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFF200]"} `}>Dealership</a></li>
                        <li><a href="#" className={` ${isScrolled ?"hover:text-[white]":"hover:text-[#FFF200]"} `}>Contacts</a></li>
                    </ul>
                </div>
        
        </nav>
        </section>
    );
};

export default Navbar;
