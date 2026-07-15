import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const NAV_LINKS = [
    { to: "/", label: "Home", end: true },
    { to: "/brands", label: "Brands" },
     { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/dealership", label: "Dealership" },
    { to: "/contact", label: "Contacts" },
];

const Navbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    // The navbar starts transparent over each page's dark top section
    // (Home's Stats section, or an inner page's PageHeader banner) and
    // switches to the solid theme color once the user scrolls past it.
    const scrollThreshold = 80;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > scrollThreshold);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollThreshold]);

    // Close the mobile menu automatically after navigating to a new route
    useEffect(() => {
        setShowMenu(false);
    }, [location.pathname]);

    // Lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = showMenu ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [showMenu]);

    return (
        <section className="">
            <nav

                className={`${isScrolled ? "md:bg-[rgb(255,242,0)]" : "bg-[rgba(255,242,0,0.0)]"
                    } p-2 fixed w-full z-50 transition-all duration-500 ease-in-out`}
            >

                <div className={`h-16 xl:h-20 px-4 ${isScrolled ? "text-[#1f1d1dec]" : "text-white"} flex items-center justify-between md:justify-between transition-colors duration-500`}>
                    <NavLink to="/" className="md:block hidden">
                        <img className="xl:w-32 lg:w-24 w-20 h-30 transition-all duration-500" src={`${isScrolled ? "/assets/7.png" : "/assets/logomain.png"}`} alt="Logo" /></NavLink>
                    <div className="xl:mr-96 lg:mr-36 mr-16">
                        <ul className="hidden md:flex gap-10  items-center font-bold text-lg lg:text-xl xl:text-2xl">
                            {NAV_LINKS.map((link) => (
                                <li key={link.label} className="relative group">
                                    <NavLink
                                        to={link.to}
                                        end={link.end}
                                        className={({ isActive }) =>
                                            `our-font relative pb-1 transition-colors duration-300 ${isScrolled ? "hover:text-[#f5f7f6]" : "hover:text-[#FFF200]"
                                            } ${isActive ? (isScrolled ? "text-[#f5f7f6]" : "text-[#FFF200]") : ""}`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {link.label}
                                                <span
                                                    className={`absolute left-0 -bottom-0.5 h-0.5 transition-all duration-300 ease-in-out group-hover:w-full ${isActive ? "w-full" : "w-0"
                                                        } ${isScrolled ? "bg-[#1f1d1d]" : "bg-[#FFF200]"
                                                        }`}
                                                ></span>
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <span
                    className="text-xl md:hidden absolute -bottom-[-15px] bg-[#00000048] w-10 h-10 inline-flex items-center justify-center text-white rounded-xl cursor-pointer transition-transform duration-300 active:scale-90"
                    onClick={() => setShowMenu(!showMenu)}
                    aria-label="Toggle menu"
                    aria-expanded={showMenu}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setShowMenu(!showMenu);
                    }}
                >
                    <FiMenu />
                </span>

                {/* Backdrop */}
                <div
                    onClick={() => setShowMenu(false)}
                    className={`fixed inset-0 bg-black/40 md:hidden transition-opacity duration-300 ${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                ></div>

                {/* Mobile menu panel - always mounted, slides in/out for a smooth transition */}
                <div
                    className={`z-50 w-[60%] md:w-[45%] md:hidden h-screen overflow-scroll fixed top-0 left-0 bottom-0 p-4 scrollbar-hide bg-[#FFF200]
                    transition-transform duration-500 ease-in-out ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex flex-col gap-8 py-4 relative">
                        <div className="">
                            <img className="w-28 h-30 absolute -top-9 left-[-20px] " src="/assets/7.png " alt="Logo" /></div>
                        <ul className="flex flex-col text-lg max-sm:text-base gap-4 pl-2 py-10">
                            {NAV_LINKS.map((link, i) => (
                                <li
                                    key={link.label}
                                    className={`transition-all duration-500 ease-out ${showMenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                                    style={{ transitionDelay: showMenu ? `${100 + i * 75}ms` : "0ms" }}
                                >
                                    <NavLink
                                        to={link.to}
                                        end={link.end}
                                        className={({ isActive }) =>
                                            `our-font transition-colors duration-300 ${isActive ? "text-white font-bold" : "text-gray-800 hover:text-white"}`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <span
                            onClick={() => setShowMenu(false)}
                            className="
                    absolute top-2 right-4 text-black hover:text-designColor duration-300 text-xl cursor-pointer hover:rotate-90 transition-transform"
                            role="button"
                            tabIndex={0}
                            aria-label="Close menu"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") setShowMenu(false);
                            }}
                        >
                            <MdClose />
                        </span>
                    </div>
                </div>

            </nav>
        </section>
    );
};

export default Navbar;
