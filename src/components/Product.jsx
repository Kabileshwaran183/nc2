import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
const Product = ({ data }) => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            }
        ]
    };
     var setting = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                }
            }
        ]
    };


    return (
        <section className="overflow-hidden ">
        <div id="Products" className="text-center  ">
            <div className=" ">
                <div className=" Title-div ">
                    <h2 className="title-text">Products</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:gap-6 md:gap-5 gap-7 items-center ">
                    <Slider {...settings}>
                    {data
                        ? data.map((d) => (
                            <div className="flex flex-col  items-center text-center  ">
                                <div className="">
                                    <img src={d.img}  className=" h-[70px] w-[70px]  md:h-[150px] md:w-[150px] bg-[#f5f7fa] rounded shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2   object-contain "/>
                                </div>
                            </div>
                        ))
                        : "Loading..."}
                        </Slider>
                </div>
                 <div className="grid grid-cols-1  lg:gap-6 md:gap-5 gap-7 items-center mt-8 mb-8">
                    <Slider {...setting}>
                    {data
                        ? data.map((d) => (
                            <div className="flex flex-col items-center text-center  ">
                                <div className="">
                                    <img src={d.img}  className="h-[70px] w-[70px]  md:h-[150px] md:w-[150px] bg-[#f5f7fa] rounded shadow-lg hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2   object-contain "/>
                                </div>
                            </div>
                        ))
                        : "Loading..."}
                        </Slider>
                </div>
            
            </div>
        </div>
        </section>
    );
};

export default Product;
