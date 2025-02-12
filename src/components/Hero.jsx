import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Hero = () => {
    return (
        <div className=" bg-[#000000a5] h-screen ">
            <div className="h-screen flex justify-center items-center ">
                <div className="gap-4  bg-[#00000028] rounded-2xl w-full h-50  ">
                    <div className="text-white  text-center mt-7 ">
                        <h1 className="xl:text-5xl md:text-2xl text-xl font-bold ">
                            UltraTech Building <br /><span className="text-[#FFF200]"> Solutions...</span>
                        </h1>
                        <p className="mt-5 px-8 xl:text-lg md:text-base text-xs text-slate-300">
                            14 PARUPPOORANI SOUTH, V.O.C ROAD,SRI MUTHUMARIAMMAN KOVIL STREET,KARAIKUD
                        </p>
                        <button
                            className="button-all text-gray-700 mt-5 mb-5  xl:text-xl md:text-base text-xs"
                        >

                            <a href="https://wa.me/91+9842611032?text=hello I need buliding products and cement !" target="_blank"><BsWhatsapp className="inline-block max-md:text-base mr-1 mt-[-2px] "/></a> Reach us
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
        </div>
    );
};

export default Hero;
