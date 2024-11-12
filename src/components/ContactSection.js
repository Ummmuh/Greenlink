import React from "react";

function ContactSection() {
  return (
    <section className="bg-gray-200 py-12 px-6 rounded-t-xl">

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Contactez-nous
        </h2>
        <div className="mt-2 w-20 h-1 bg-green-500 mx-auto"></div>
      </div>

 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-12">

        <div className="flex flex-col items-center">
          <div className="bg-green-500 rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <img src="../images/enveloppe.png" alt="enveloppe"/>
          </div>
          <p className="mt-2 text-sm text-gray-700">oumouhdiallo11@gmail.com</p>
        </div>


        <div className="flex flex-col items-center">
          <div className="bg-green-500 rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <img src="../images/phone.png" alt="phone"/>
          </div>
          <p className="mt-2 text-sm text-gray-700">+224 621 94 52 35</p>
        </div>


        <div className="flex flex-col items-center">
          <div className="bg-green-500 rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <img src="../images/marker.png" alt="marker"/>
          </div>
          <p className="mt-2 text-sm text-gray-700">Foulamadina, Conakry</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-green-500 rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <img src="../images/clock.png" alt="clock"/>
          </div>
          <p className="mt-2 text-sm text-gray-700">Lundi - samedi 8h - 18h</p>
        </div>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Nous laisser un message...
        </h3>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Prénom et nom"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 mb-6"
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      <div className="text-center">
        <p className="text-gray-700 text-lg">
          Il n’y a pas de petites actions. Chaque action positive contribue à
          faire avancer le monde.{" "}
          <span className="text-green-600 font-bold">Agissons !</span>
        </p>
      </div>
    </section>
  );
}

export default ContactSection;