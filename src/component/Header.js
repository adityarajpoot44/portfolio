import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/LOGO.png"
import '../App.css'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Nav() {
    return (
        <>
            <NavLink className={({ isActive }) => `py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => `py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => `py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/resume">Resume</NavLink>
            <NavLink className={({ isActive }) => `py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/project">Project</NavLink>
            <NavLink className={({ isActive }) => `py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/contact">Contact</NavLink>
        </>
    )

}


function Header() {
    const [ham, setHam] = useState(faBars);
  const [content, setContent] = useState('hidden');

  useEffect(() => {
    if (ham === faXmark) {
      setContent('block');
    } else {
      setContent('hidden');
    }
  }, [ham]);

  const toggleSidebar = () => {
    setHam(ham === faBars ? faXmark : faBars);
  };


    return (
        <>
            <header className="fixed z-50 w-full pt-3 flex justify-between">
                <div className="">
                    <NavLink to="/" ><img alt="" src={logo} width="100px" className="absolute top-0" /></NavLink>
                </div>
                <div className="block md:hidden px-7 text-xl py-3 ">
                        <span><FontAwesomeIcon icon={ham} onClick={toggleSidebar} /></span>
                        <div className={`absolute w-[120px] ${content} right-1 py-10 side_nav`}>
                            <div className="flex-col flex gap-2">
                                <Nav/>
                            </div>
                            
                        </div>

                </div>
                <nav className="hidden  md:block px-5">
                    <div className="  md:flex md:gap-6" >
                        <Nav />
                    </div>
                </nav>
            </header>

        </>
    )
}
export default Header;