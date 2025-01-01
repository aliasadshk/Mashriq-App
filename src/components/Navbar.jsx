import React, { useState } from "react";
import logo from "../Images/logo.png"; // Importing logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full min-h-screen mx-auto px-4 ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://www.mashriqelite.com/frontend/video/Mashriq-Web.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      {/* Navbar */}
      <div className="relative z-10 mt-2">
        <nav className="bg-black bg-opacity-70 text-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <img src={logo} alt="Mashriq Elite Logo" className="h-12 w-auto" />

            <button
              className="block md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-haspopup="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <ul className="hidden md:flex gap-6 items-center">
              <li>
                <a href="#home" className="hover:text-teal-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-teal-400">
                  Divisions
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-teal-400">
                  Media Center
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400">
                  Contact Us
                </a>
              </li>
            </ul>

            {isMenuOpen && (
              <div className="absolute top-14 right-4 bg-black bg-opacity-90 text-white w-48 rounded-lg shadow-md p-4">
                <a href="#home" className="block py-2 hover:text-teal-400">
                  Home
                </a>
                <a href="#about" className="block py-2 hover:text-teal-400">
                  About Us
                </a>
                <a href="#projects" className="block py-2 hover:text-teal-400">
                  Projects
                </a>
                <a href="#divisions" className="block py-2 hover:text-teal-400">
                  Divisions
                </a>
                <a href="#media" className="block py-2 hover:text-teal-400">
                  Media Center
                </a>
                <a href="#contact" className="block py-2 hover:text-teal-400">
                  Contact Us
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
