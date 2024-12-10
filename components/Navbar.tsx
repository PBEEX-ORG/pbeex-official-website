import React from 'react'

const navLinkModify = "text-gray-950 hover:bg-gray-200 hover:text-brandred px-4 py-2 rounded-full transition-transform duration-400"

const Navbar = () => {
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
        <nav className="md:flex space-x-6 px-1 py-1 font-medium bg-slate-100 rounded-full border border-slate-900">
          <a
            href="#home"
            className={navLinkModify}
          >
            Home
          </a>
          <a
            href="#projects"
            className={navLinkModify}
          >
            Projects
          </a>
          <a
            href="#partners"
            className={navLinkModify}
          >
            Partners
          </a>
          <a
            href="#blog"
            className={navLinkModify}
          >
            Blog
          </a>
          <a
            href="#about"
            className={navLinkModify}
          >
            About
          </a>
          <a
            href="#contact"
            className={navLinkModify}
          >
            Contact
          </a>
        </nav>

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
