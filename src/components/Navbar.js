import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <img
            src="../images/logo.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>

 
        <ul className="hidden md:flex ml-48 space-x-8 text-green-600 font-medium">
          <li>
            <a href="/" className="hover:text-green-800 transition">
              Accueil
            </a>
          </li>
          <li>
            <a href="/marketplace" className="hover:text-green-800 transition">
              MarketPlace
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-green-800 transition">
              À propos
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:text-green-800 transition">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-green-800 transition">
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
            Se connecter
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-green-600 font-medium">
            <li>
              <a href="/" className="hover:text-green-800 transition">
                Accueil
              </a>
            </li>
            <li>
              <a href="/marketplace" className="hover:text-green-800 transition">
                MarketPlace
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-800 transition">
                À propos
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-green-800 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-800 transition">
                Contact
              </a>
            </li>
            <li>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
                Se connecter
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;