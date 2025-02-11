import React from "react";

const Hero = () => {
    return (
        <div className=" bg-[#000000a5] h-full ">
            <div className="h-full flex justify-center items-center p-4 ">
                <div className="gap-4  bg-[#00000028] rounded-2xl w-full h-50  ">
                    <div className="text-white  lg:pr-36 text-center texth  ">
                        <h1 className="text-5xl font-bold ">
                            UltraTech Building <span className="text-[#FFF200]"> Solutions...</span>
                        </h1>
                        <p className="para ">
                            14 PARUPPOORANI SOUTH, V.O.C R,SRI MUTHUMARIAMMAN KOVIL STREE,KARAIKUD
                        </p>
                        <button
                            className="btn text-[#290849]"
                        >
                            Reach us
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
