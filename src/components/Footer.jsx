import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <footer className=" bg-black opacity-90 text-white  ">
            <div className=" top-0 left-0 w-[100%] overflow-hidden ">
                <svg data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="relative block h-[600px] fill-white"></path>
                </svg>
                <div className="grid lg:grid-cols-4 gap-20 md:grid-cols-4 grid-cols-2 px-1 md:px-4 lg:px-24 mb-4 ">
                    <div className="flex flex-col ">
                        <h2 className="text-lg text-white">Abouts us</h2>
                       <li className="foot-cont">home</li>
                        <li className="foot-cont">abouts</li>
                        <li className="foot-cont">products</li>
                        <li className="foot-cont">Dealership</li>
                    </div>



                    <div>
                        <h2 className="text-lg text-white">
                            PhoneNumber
                        </h2>
                       <a href='tel:+91 9842611032' className="foot-cont"> 9842611032 </a>
                      <a href='tel:+91 8667408717' className="foot-cont">8667408717</a>
                       <a href='tel:+91 9629789197' className="foot-cont"> 9629789197</a>
                        <a href='tel:+91 9788766490' className="foot-cont"> 9788766490 </a>
                    </div>
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-lg text-white">
                            contact
                        </h2>
                        <li className="foot-cont ">Karaikudinatarajan@gmail.com</li>
                        <p className="foot-cont">Phone: +1 113-456-7890 </p>
                        <p className="foot-cont">karaikudi </p>
                       
                    </div>
                                        <div>
                        <h2 className="text-lg text-white">
                            Landline
                        </h2>
                        <a href="tel:04565-401379" className="foot-cont">04565-401379 </a>
                        <a href="tel:04565-232145" className="foot-cont">04565-232145 </a>
                        
                    </div>
                </div>


                 <div>
                        <h6 className=" text-gray-400 text-center ">&copy; SK {Year}</h6>
                    </div>
                 <div className="">
                   

                    <div className="flex gap-5 justify-end items-start pb-5 pr-10 ">
                             <a 
                                className="text-white hover:text-yellow-500 transform hover:scale-150 
                            transition-all duration-150 ease-in-out text-2xl" href="https://wa.me/6385217117?text=hello how can help you" target="_blank">
                                <FaWhatsapp />
                            </a>
                            <a
                                className="text-white hover:text-yellow-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out text-2xl" href="https://wa.me/91+9600417117?text=hello how can help you" target="_blank">
                                <FaLinkedinIn />
                            </a>
                            <a
                                className="text-white hover:text-yellow-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out text-2xl" href="https://wa.me/91+9842611032?text=hello how can help you" target="_blank">
                                <FaTwitter />
                            </a>
                            <a
                                className="text-white hover:text-yellow-500 transform hover:scale-150
                            transition-all duration-150 ease-in-out text-2xl" href="https://wa.me/91+8667408717?text=hello how can help you"  target="_blank">
                                <FaInstagram />
                            </a>
                    </div>
                           
                        </div>
            </div>
        </footer>
    );
};

export default Footer;