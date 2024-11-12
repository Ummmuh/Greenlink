import React from "react";

function Footer() {
  return (
    <footer className="bg-green-500 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-6 md:mb-0">

          <div className="flex items-center">
              <img src="../images/logo.png" alt="logo" className="h-20 w-auto"/>
          </div>


          <nav className="flex space-x-4 text-sm text-gray-100">
            <a href="/" className="hover:underline">Accueil</a>
            <a href="/" className="hover:underline">Marketplace</a>
            <a href="/" className="hover:underline">À propos</a>
            <a href="/" className="hover:underline">Blog</a>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <span className="text-sm">Newsletter</span>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Entrez votre email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
            />
            <button className="bg-gray-100 text-green-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              Souscrire
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm">
        <p>GreenLink - 2024 | Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;