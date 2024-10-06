import React from "react";
import m1 from "../../img/m1.avif";
import m2 from "../../img/m2.png";
import m3 from "../../img/m3.jpg";
import m4 from "../../img/m4.png";
import m5 from "../../img/m5.png";
import resume from "../../assest/Resume/Aditya_FrontEnd.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faLinkedinIn, faTwitter, faHtml5,} from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faGears, faServer, faUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";


function About() {
    return (
        <div className="absolute z-20 bg-black w-screen">
            <div className="w-[80%] m-auto my-[50px] pt-[100px] ">
                <div className="text-center mb-[70px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">About Me</h1>
                </div>
                <div className="flex g-4 flex-col md:flex-col lg:flex-row justify-between mb-[200px]">
                    <div className=" w-[100%] lg:w-[100rem] md:w-[100%]  pt-3">
                        <img className=" rounded-[20px] w-full h-full removeb" src={m5} />
                    </div>
                    <div className=" p-8  ">
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
                                    <p className="py-2 w-max">Email: <span><a href="mailto:adityakumar8279@gmail.com" className="text-[#009e66]">adityakumar8279@gmail.com</a></span></p>
                                    <p className="py-2 w-max">From: <span>Noida,India</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mt-4">
                            <div>
                                <a href={resume} download><button className="btn p-3 px-7 ">Downlode CV</button></a>
                            </div>

                            <div className="social_btn pt-7 md:p-3 ">
                                <a href="https://github.com/adityarajpoot44" target="_blank"><FontAwesomeIcon icon={faGithub} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                                <a href="https://www.linkedin.com/in/aditya-rajpoot44/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                                <a href="https://www.instagram.com/aditya_rajpoot_44/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                                <a href="https://twitter.com/adityar_44" target="_blank"><FontAwesomeIcon icon={faTwitter} className="px-2 text-xl hover_social hover:text-[#009e66]" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" mt-[50px]">
                    <h1 className="text-4xl font-bold mb-[100px]">My Services</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 ">
                        <div className="p-7 about_card">
                            <div className="">
                                <FontAwesomeIcon icon={faHtml5} className="text-5xl text-[#009e66] mb-4" />
                            </div>
                            <div className="about_services">
                                <p>Design Trends</p>
                            </div>
                            <div className="text-[15px] text-[#777] pb-2">
                                <p>Design trends growing emphasis on voice user interfaces, and dark mode</p>
                            </div>
                        </div>
                        <div className=" p-7 about_card">
                            <div className="">
                                <FontAwesomeIcon icon={faUpDownLeftRight} className="text-5xl text-[#009e66] mb-4" />
                            </div>
                            <div className="about_services">
                                <p>Fully Responsive</p>
                            </div>
                            <div className="text-[15px] text-[#777] pb-2">
                                <p>Creating websites that adapt to different screen sizes and devices</p>
                            </div>
                        </div>
                        <div className=" p-7 about_card">
                            <div className="">
                                <FontAwesomeIcon icon={faGears} className="text-5xl text-[#009e66] mb-4" />
                            </div>
                            <div className="about_services">
                                <p>SEO</p>
                            </div>
                            <div className="text-[15px] text-[#777] pb-2">
                                <p>Optimizing websites for better search engine rankings.</p>
                            </div>
                        </div>
                        <div className=" p-7 about_card">
                            <div className="">
                                <FontAwesomeIcon icon={faCode} className="text-5xl text-[#009e66] mb-4" />
                            </div>
                            <div className="about_services">
                                <p>Web Development</p>
                            </div>
                            <div className="text-[15px] text-[#777] pb-2">
                                <p>Building the foundation of websites using these core web technologies.</p>
                            </div>
                        </div>
                        <div className=" p-7 about_card">
                            <div className="">
                                <FontAwesomeIcon icon={faDatabase} className="text-5xl text-[#009e66] mb-4" />
                            </div>
                            <div className="about_services">
                                <p>Database Management</p>
                            </div>
                            <div className="text-[15px] text-[#777] pb-2">
                                <p>Working with databases like MySQL, PostgreSQL, or MongoDB</p>
                            </div>
                        </div>
                        <div className=" p-7 about_card">
                            <div className="">
                                <FontAwesomeIcon icon={faServer} className="text-5xl text-[#009e66] mb-4" />
                            </div>
                            <div className="about_services">
                                <p>Server-Side Development</p>
                            </div>
                            <div className="text-[15px] text-[#777] pb-2">
                                <p> Building the logic and functionality behind websites</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;