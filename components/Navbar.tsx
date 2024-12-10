"use client";



import React, { useEffect, useState } from 'react'

const navLinkModify = "text-gray-950 hover:bg-gray-200 hover:text-brandred px-4 py-2 rounded-full transition-transform duration-400"

const Navbar = () => {

  // make nav responsive
  const [openMenu, setMenuOpen] = useState(false);

  //initialize toggle button
  const toggle = () => {
    setMenuOpen(!openMenu)
  }

  // close menu of smaller screen on enlargment
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const Resize = () => {
      if (window.innerWidth >= 765) {
        //close mobile menu when screen size reaches 768
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', Resize);

    return () => {
      window.removeEventListener('resize', Resize);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/horizontal-colored-logo.png" 
            alt="PBEEX Logo"
            className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}

        <nav className="hidden md:flex space-x-6 px-1 py-1 font-medium bg-slate-100 rounded-full border border-slate-900">

          <a href="#home" className={navLinkModify}>Home</a>
          <a href="#projects" className={navLinkModify}>Projects</a>
          <a href="#partners" className={navLinkModify}>Partners</a>
          <a href="#blog" className={navLinkModify}>Blog</a>
          <a href="#about" className={navLinkModify}>About</a>
          <a href="#contact" className={navLinkModify}>Contact</a>

        </nav>

        {/*toggle Menu for mobile*/}

        <button
          className="md:hidden text-gray-950 focus:outline-none"
          onClick={toggle}>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>


        {/*Nav for mobile*/}

        {openMenu && (
          <nav className="absolute top-16 right-0 bg-white rounded-md shadow-md p-4 w-40 flex flex-col space-y-2">
            <a href="#home" className="nav-link">Home</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#partners" className="nav-link">Partners</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        )}

        {/* Call to Action Button */}
        <div>
            <a
                href="#"
                className="px-6 py-1 bg-red-500 text-white border rounded-full shadow-lg hover:scale-105 active:bg-red-600 flex items-center gap-2 transition-transform duration-500"
            >
                Get Involved
                <span className="w-8 items-center">
                    <img src="/arrow up-right.png" alt="Arrow Icon" className="transition-transform duration-300" />
                </span>
            </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
