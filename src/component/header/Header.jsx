/* eslint-disable react/prop-types */
import logo from "../../assets/logo.png";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { useState } from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#101446] dark:bg-current fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="main-div py-2 flex items-center justify-between">
        
          <div className="logoSection">
            <img className="w-14" src={logo} alt="Logo" />
          </div>

          
          <div className="menuSection hidden md:block">
            <ul className="flex gap-4">
              <li><a className="text-white" href="/">Home</a></li>
              <li><a className="text-white" href="/">About</a></li>
              <li><a className="text-white" href="/">Services</a></li>
              <li><a className="text-white" href="/">Work</a></li>
              <li><a className="text-white" href="/">Blog</a></li>
              <li><a className="text-white" href="/">Contact</a></li>
            </ul>
      
          </div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {/* Hamburger Icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <div>      <button
        onClick={toggleDarkMode}
        className="bg-black text-white px-4 py-2 rounded dark:bg-black"
      >
        {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button></div>

        </div>
        {isMenuOpen && (
          <div className="menuSection block md:hidden">
            <ul className="flex flex-col gap-4 py-5">
              <li><a className="text-white" href="/">Home</a></li>
              <li><a className="text-white" href="/">About</a></li>
              <li><a className="text-white" href="/">Services</a></li>
              <li><a className="text-white" href="/">Work</a></li>
              <li><a className="text-white" href="/">Blog</a></li>
              <li><a className="text-white" href="/">Contact</a></li>
            </ul>

         
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

