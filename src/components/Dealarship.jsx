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
        para:"Authorised Dealer of ultratech INDIA'S NO.1 Cement"
        
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
      <div className="md:min-w-2xl lg:min-w-3xl  xl:minw-5xl min-w-8">
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
            <h2 className='text-3xl font-bold md:text-2xl mb-5'>{lang.Name}</h2>
            <p className=' text-left text-2xl font-semibold md:text-xl'>{lang.para}</p>
           
             
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
