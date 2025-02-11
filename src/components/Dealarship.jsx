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
        Name:'Ultratech Buliding solution',
        logo:'/Bg/ultra.png',
        para:"Authorised Dealer of ultratech India's no.1 Cement"
        
    },
    {
        Name:'Birla white cement and wall care putty',
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
       <div className="top-container-1 ">
        <div className="container ">
              <h2 className='text-4xl font-bold text-center mb-10 hover:text-[#EFB036]'>Dealership</h2>
          <div className='exp-div-card text-black'>
      <div className="md:min-w-2xl lg:min-w-28  xl:min-w-5xl min-w-10 ">
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
           spaceBetween:20,
           slidesPerView:1,
        },
         1024:{
         spaceBetween:80,
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
        <div className="h-80  flex  "> 
          <div className={`exp-card ${active === i && 'exp-card-active'}  `}>
            <div className=' max-w-[10rem] mx-auto min-w-[10rem] min-h-[10rem] rounded-md grid place-items-center'>
             <img src={lang.logo} alt="" />
              
            </div>
          
            <h3 className="text-2xl lg:text-lg font-bold text-gray-800 lg:mb-1 mb-6 hover:text-[#FFF200]">
                      {lang.Name}
                    </h3>
                    <p className="text-gray-600 text-sm ">{lang.para}</p>
  
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
