import React from "react";

import m5 from "../../img/m5.png";
import resume from "../../assest/Resume/Aditya_FrontEnd.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedinIn, faTwitter, faHtml5,} from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faGears, faServer, faUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";
import ServiceCom from "../page_component/Service_page.js";
import { Link } from "react-router-dom";


function About() {
    return (
        <div className="absolute bg-black z-20 w-screen">
            <div className="w-[90%] m-auto my-[10px] pt-[100px] px-2 ">
                <div className="text-center mb-[40px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">About Me</h1>
                </div>
                <div className="flex g-4 flex-col md:flex-col lg:flex-row justify-between mb-[90px]">
                    <div className=" w-[100%] lg:w-[100rem] md:w-[100%]  pt-3">
                        <img className=" rounded-[20px] w-full h-full removeb" src={m5} alt="" />
                    </div>
                    <div className="">
                        <h2 className=" text-[25px] mb-4 font-bold text-[#009e66]">Who am i?</h2>
                        <p className="text-[27px] font-bold ">I'm Aditya Rajpoot,  a Web Developer & Software Engineer </p>
                        <p className="text-[15px] text-[#9f9f9f] py-2"> I am a freelancer based in the India. Results-oriented Web Developer with a passion for crafting dynamic and user-friendly web applications. Proven expertise in front-end development using frameworks like ReactJS, complemented by a strong foundation in back-end technologies such as Node.js and MySQL.</p>
                        <div className="mt-4">
                            <div className="flex flex-col md:flex-row lg:flex-row about_content py-4">
                                <div className="w-full">
                                    <p className="py-2 w-max">Name: <span>Aditya Rajpoot</span></p>
                                    <p className="py-2 w-max">Age: <span>22</span></p>
                                </div>
                                <div className="w-[100%]  w-max">
                                    <p className="py-2 w-max">Email: <span><Link to="mailto:adityakumar8279@gmail.com"  className="text-[#009e66]">adityakumar8279@gmail.com</Link></span></p>
                                    <p className="py-2 w-max">From: <span>Noida,India</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mt-4">
                            <div>
                                <a href={resume} download><button className="btn p-3 px-7 ">Downlode CV</button></a>
                            </div>

                            <div className="social_btn pt-7 md:p-3 ">
                                <a href="https://github.com/adityarajpoot44" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                                <a href="https://www.linkedin.com/in/aditya-rajpoot44/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                                <a href="https://www.instagram.com/aditya_rajpoot_44/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                                <a href="https://twitter.com/adityar_44" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="px-2 text-xl hover_social hover:text-[#009e66]" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold mb-[100px]">My Services</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 ">
                        <ServiceCom 
                        name="Design Trends"
                        para="Design trends growing emphasis on voice user interfaces, and dark mode."
                        icon={faHtml5}
                        />
                         <ServiceCom 
                        name="Fully Responsive"
                        para="Creating websites that adapt to different screen sizes and devices."
                        icon={faUpDownLeftRight}
                        />
                         <ServiceCom 
                        name="SEO"
                        para="Optimizing websites for better search engine rankings."
                        icon={faGears}
                        />
                         <ServiceCom 
                        name="Web Development"
                        para="Building the foundation of websites using these core web technologies."
                        icon={faCode}
                        />
                         <ServiceCom 
                        name="Database Management"
                        para="Working with databases like MySQL, PostgreSQL, or MongoDB."
                        icon={faDatabase}
                        />
                         <ServiceCom 
                        name="Server-Side Development"
                        para=" Building the logic and functionality behind websites."
                        icon={faServer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;