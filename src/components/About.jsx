import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export const About = () => {
    return (



        <section className="top-container-1">
            <Helmet>
                <meta charset="UTF-8" />
                <link rel="icon" href="/assets/natarajan and co mrng.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="IE=7" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Natarajan And Co , Karaikudi" />
                <meta property="og:url" content="https://natarajanandco.com/ " />
                <meta property="og:image" content="https://natarajanandco.com/assets/natarajan.jpg" />
                <title>Natarajan And Co Ultratech Buliding solution ,karaikudi </title>
                <meta name="description"
                    content="Natarajan And Co Ultratech Building Solution and we specialize in providing high-quality construction products." />
                <meta name="keywords" content="natarajanandco,natarajan,natarajanand,natarajanco,natarajan and co,natarajan and co karaikudi,karaikudi natarajan and co,karaikudinatarajanandco, karaikudicementshop,karaikudibulidingshop,
                           ultratech buliding solution karaikudi,utech natarajan and co ultratechbulidingsolutionkaraikudi,ultratechkaraikudi, ultratech karaikudi,ultratech cement karaikudi,ultratechcementkaraikudi"/>
                <meta name="url" content="https://natarajanandco.com/" />


            </Helmet>


            <div id="about" className="py-2 bg-gray-50">
                <div className=" Title-div ">
                    <h2 className="title-text">About us</h2>
                </div>
                <div className="flex justify-center md:justify-between items-center py-2 ">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                        <div className="flex justify-center">
                            <motion.div
                                className="flex justify-center"
                                initial={{ scale: 1, opacity: 0 }}
                                whileInView={{ scale: 1.1, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <img
                                    src="/assets/natarajan.webp"

                                    className="w-full max-w-md rounded-lg shadow-lg"
                                    alt="Natarajan and co ultratech buliding solution" title="natarajanandco ultratech buliding solution "
                                />
                            </motion.div>
                        </div>
                        <div>
                            <h2 className="md:text-3xl text-xl font-bold text-gray-800 mb-4">Natarajan and co</h2>
                            <p className="text-gray-600 leading-relaxed max-md:text-sm">
                                With 21 years of expertise as a Proud <strong> UltraTech</strong> partner, we specialize in providing high-quality construction products. Committed to excellence, we offer a complete range of materials to support your construction needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;
