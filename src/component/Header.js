import React from 'react'

import { NavLink } from 'react-router-dom';
function Header() {
    var css_prop = "hidden";
    return (
        <div className='absolute w-full flex justify-between p-10 z-50' >
            <div className=''>
                <img className='header_logo w-24' src={null} />
            </div>
            <div>
                <ul className='header_li flex gap-10 cursor-pointer'>
                    {/* <li className={`sm:${css_prop} hover:text-orange-500`}><FontAwesomeIcon icon={faBars} size="lg" /></li> */}
                    <li>
                        <NavLink to='/' className={({ isActive }) => `hover:text-orange-700 header_hide ${isActive ? "text-orange-700" : "text-white"}`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => `hover:text-orange-700 header_hide ${isActive ? "text-orange-700" : "text-white"}`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/resume' className={({ isActive }) => `hover:text-orange-700 header_hide ${isActive ? "text-orange-700" : "text-white"}`}>
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/project' className={({ isActive }) => `hover:text-orange-700 header_hide ${isActive ? "text-orange-700" : "text-white"}`}>
                            Project
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => `hover:text-orange-700 header_hide ${isActive ? "text-orange-700" : "text-white"}`}>
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    );
}
export default Header;
