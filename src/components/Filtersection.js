import React from "react";

function FilterSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[70vh]"
      style={{
        backgroundImage: "url('../images/headerbg.jpg')",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="bg-white bg-opacity-90 shadow-md rounded-lg p-6 w-11/12 md:w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Quartier
              </label>
              <input
                type="text"
                placeholder="Entrez un quartier"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Catégories
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option>Selectionnez catégorie</option>
                <option>Déchets plastiques</option>
                <option>Déchets alimentaires</option>
                <option>Déchets métalliques</option>
                <option>Papiers usagés</option>
                
              </select>
            </div>
          </div>
          <button className="bg-gradient-to-r from-green-500 to-green-100 text-white w-full py-3 rounded-lg hover:from-green-600 hover:to-green-800 transition">
            Rechercher
          </button>
        </div>

        <div className="mt-8 flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
            Vendre des déchets
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
            Acheter des déchets
          </button>
        </div>
      </div>

      
    </section>
  );
}

export default FilterSection;
