import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = ({ phone }) => {

  return (
    <div className=' mt-16 px-4 md:px-16 lg:px-24 mb-20 max-md:mt-8 max-md:text-base ' id='contact'>

      <div className=' flex flex-col mx-auto  md:px-12 lg:px-24 xl:px-24 bg-gray-50   text-black   ' id='contact'>
        <h2 className='title-text'>contact me</h2>
        <div className=' flex flex-col md:flex-row items-center md:space-x-12 w-full '>
          <div className=' w-full grid grid-cols-2 gap-4 md:grid-cols-3 '>
            {phone
            ? phone.map((d) => (
              <div className=' text-center '>
            <FaPhone className='inline-block  text-[#FFF200] hover:scale-110 duration-300 delay-100 hover:text-2xl mr-2 '></FaPhone>
            <span><a href={`tel:${d.ph1}`} className=''>{d.ph}</a></span> 
          </div>
            ))
          : "Loading..."}
          
           
</div>
    
        </div> 
           <div className="mb-4 mt-4   ">
            <FaEnvelope className='inline-block  text-[#FFF200] hover:scale-110 duration-300 delay-100 hover:text-2xl mr-2  '></FaEnvelope>
            <a href="mailto:karaikudinatarajan@gmail" className='hover:border-b-2 hover:border-[#EFB036]'>
              karaikudinatarajan@gmail
            </a>
          </div> 
       <div className='mb-4'>
            <FaMapMarkedAlt className='inline-block  text-[#FFF200] hover:scale-110 duration-300 delay-100 hover:text-2xl mr-2'></FaMapMarkedAlt>
            <span>14 PARUPPOORANI SOUTH, V.O.C ROAD,SRI MUTHU MARIAMMAN KOVIL STREET,KARAIKUDI,TAMILNADU-630001 </span>
             
           </div>
           <div className='h-0 overflow-hidden relative pb-[40%]'>
          <iframe className='h-full w-full left-0 right-0 top-0 absolute' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.2704303470796!2d78.76214647485969!3d10.076913590032438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00675c9dfc161b%3A0x69bc1b0ab7639fa4!2sNATARAJAN%20%26%20CO!5e0!3m2!1sen!2sin!4v1739297700769!5m2!1sen!2sin" width="600" height="450"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
       
      
    </div>
  )
}

export default Contact
