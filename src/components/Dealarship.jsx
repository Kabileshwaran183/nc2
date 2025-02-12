import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import { Autoplay, FreeMode } from 'swiper/modules';
import { useState } from 'react';

const Dealership = () => {
  const [active,setActive]=useState(null)
  const lang =[
    
    {
        Name:'Ultratech',
        logo:'/Bg/ultra.png',
        para:"Authorised Dealer of ultratech India's no.1 Cement"
        
    },
    {
        Name:'Birla',
        logo:'/Bg/WHIRE BG.png',
        para:"Authorised Dealer of Birla White and Wallcare Putty"   
    },
    {
        Name:'myk laticrete',
        logo:'/Bg/MYK BG.png',
        para:"Authorised Dealer of Myk Laticrete"   
    },
     {
        Name:'Fosroc',
        logo:'/Bg/FOSROC BG.png',
        para:" Authorised Dealer of Fosroc"   
    },
        {
        Name:'Araldite',
        logo:'/Bg/ARALDITE BG.png',
        para:"Authorised Dealer of Araldite"   
    },
      {
        Name:'Dr fixit',
        logo:'/Bg/FIXIT BG.png',
        para:"Authorised Dealer of Dr Fixit"   
    },
    
    

  ]
  return (
    <section>
      <div className="top-container-1 " id='Dealership'>
        <div className="container ">
              <h2 className='title-text'>Dealership</h2>
          <div className='exp-div-card text-black'>
      <div className="min-w-4">
        <Swiper
      
      freeMode={true}
      onSlideChange={(cur) => setActive(cur.realIndex)}
      
      loop={true}
      grabCursor={true}
      centeredSlides={true}
      speed={800}
      className='mySwiper'
      autoplay={{
        delay:3000,
      }}
      modules={[Autoplay,FreeMode]}
      breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:40,
        },
        480:{
          slidesPerView:1,
          spaceBetween:40,
        },
         768:{
           spaceBetween:10,
           slidesPerView:3,
        },
         1024:{
         spaceBetween:40,
         slidesPerView:3,
        },
          1280:{
         spaceBetween:80,
         slidesPerView:3,
        },
      }}
    >
      
      {
        lang.map((lang,i)=>(
          <SwiperSlide key={i}>
        <div className="h-80 max-md:h-44 w-90 flex justify-center " > 
          <div className={`exp-card ${active === i && 'exp-card-active transition-all duration-300 group transform hover:-translate-y-2 '} shadow-2xl`}>
            <div className=' mx-auto min-w-[2rem] min-h-[10rem] max-md:min-h-[3rem] rounded-md grid place-items-center'>
            <img className='max-md:w-16' src={lang.logo} alt="#logo" />
              
            </div>
          
            <h3 className=" text-sm md:text-xl font-bold text-gray-800 lg:mb-1 group-hover:text-[#FFF200]">
                      {lang.Name}
                    </h3>
                    <p className="text-gray-600 max-md:text-sm ">{lang.para}</p>
  
          </div>
        </div>
      </SwiperSlide>
        ))
      }
      
      
    </Swiper>
      </div>
      
    </div>
    </div>
    </div>
    </section>

  )
}

export default Dealership
