import React from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Hero = () => {
    return (
        <div className=" bg-[#000000a5] h-screen ">
            <div className="h-screen flex justify-center items-center ">
                <motion.div
                    className="gap-4  bg-[#00000028] rounded-2xl w-full h-50  "
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <div className="text-white  text-center mt-7 ">
                        <motion.h1 variants={item} className="xl:text-5xl md:text-2xl text-xl font-bold ">
                            UltraTech Building <br /><span className="text-[#FFF200]"> Solutions...</span>
                        </motion.h1>
                        <motion.p variants={item} className="mt-5 px-8 xl:text-lg md:text-base text-xs text-slate-300">
                            14 PARUPPOORANI SOUTH, V.O.C ROAD,SRI MUTHUMARIAMMAN KOVIL STREET,KARAIKUDI
                        </motion.p>
                        <motion.a variants={item} href="https://wa.me/918667408717?text=hello I need buliding products and cement !" target="_blank">
                            <button
                                className=" bg-[#fafa167c] font-bold md:inline transform transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 py-2 px-4 rounded-full text-[#ffffff] mt-5 mb-5  xl:text-xl md:text-base text-xs"
                            >

                                <BsWhatsapp className="inline-block max-md:text-base mr-1 mt-[-2px] " /> Reach us
                            </button>
                        </motion.a>
                    </div>
                    <div></div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
        </div>
    );
};

export default Hero;
