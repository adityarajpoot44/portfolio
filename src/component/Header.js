import React from "react";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <>
            <header className="fixed flex flex-wrap md:justify-start md:flex-nowrap  z-50 w-full">
                <nav className="mt-1 w-full bg-neutral-900/90 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900/90 dark:border-[#099e66] ">
                    <div className="px-4 md:px-0 flex justify-end items-center">
                        <div className="md:hidden">
                            <button type="button" className="hs-collapse-toggle flex justify-center items-center size-9 border border-[#099e66] text-white rounded-full hover:bg-[#099e66]/70 focus:outline-none focus:bg-[#099e66]/70 dark:border-[#099e66] dark:text-[#099e66] dark:hover:bg-[#099e66]/70 dark:focus:bg-[#099e66]/30" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating">
                                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </button>
                        </div>
                    </div>

                    <div id="hs-navbar-header-floating" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-header-floating-collapse">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-8 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
                            <NavLink className={({ isActive }) => `py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => `py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/about">About</NavLink>
                            <NavLink className={({ isActive }) => `py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/resume">Resume</NavLink>
                            <NavLink className={({ isActive }) => `py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/project">Project</NavLink>
                            <NavLink className={({ isActive }) => `py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 hover:text-[#099e66] md:border-b-2 border-transparent hover:text-text-[#099e66] focus:outline-none text-lg  ${isActive ? "text-[#099e66] border-[#099e66]" : "text-white"}`} to="/contact">Contact</NavLink>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}
export default Header;