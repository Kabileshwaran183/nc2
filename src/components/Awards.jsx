import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from 'swiper/modules';

const Exp = [
  {
    img: "./award/24.jpeg",
    title: "PATTABHISHEKAM 2024",
    description: "Best performing Dealer 1st South tamilnadu",

  },
  {

    img: "./award/24 2nd.jpeg",
    title: "PATTABHISHEKAM 2024",
    description: "Best performing Dealer 1st South tamilnadu",
  },

  {
    img: "./award/birla 23-24.jpeg",
    title: "Birlawhite ",
    description: "Certificate of honour in gold club for the period 23-24",
  },
  {
    img: "./award/19-21 1.jpeg",
    title: "Sivaganga District 1st  ",
    description: "Natarajan and co Best performing Dealer in Sivaganga District 1st ",
  },
  {
    img: "./award/2017 3.jpeg",
    title: "Depot 3rd",
    description: "Natarajan and co Depot 3rd - Madurai in 2017",

  },
  {
    img: "/award/3 17-18.jpeg",
    title: "Depot 3rd",
    description: "Natarajan and co Depot 3rd - Madurai in 2017",
  },


];
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#FFF200", display: "block", borderRadius: "100%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#FFF200", display: "block", borderRadius: "100%" }}
      onClick={onClick}
    />
  );
}

const Projectslide = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  return (

    <section>

      <div className="top-container-1 " id='Project'>
        <div className="mx-auto px-8 md:px-16 lg:px-24 ">
          <h3 className='title-text'>Achievements</h3>


          <Slider {...settings}>
            {Exp.map(Exp => (
              <div key={Exp.img} className='proj-div hover:-translate-y-2 ' >
                <img src={Exp.img} className='max-h-60 w-full md:max-h-80 rounded-lg ' alt="" />
                <div className="absolute left-6 right-6 bottom-6 top-0 bg-[#030508cf] duration-500 px-5 opacity-0 hover:opacity-100 hover:scale-91 rounded flex flex-col justify-center items-center   ">
                  <h1 className='text-sm md:text-sm lg:text-sm xl:text-2xl text-center md:mt-2 font-bold text-[#FFF200]'>{Exp.title}</h1>
                  <p className='mt-5 mb-5 text-sm text-white'>{Exp.description}</p>
                  <a href="#" className=' bg-[#FFEA00] text-sm font-bold md:inline transform transition-transform duration-300 hover:scale-110 text-white px-2 md:px-4 rounded-full'>Readmore</a>

                </div>








              </div>
            ))}
          </Slider>





        </div>

      </div>


    </section>

  )
}

export default Projectslide
