import React from "react";

function HowItWorks() {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8" style={{ color: "#37474F" }}>
        Comment ça marche ?
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {/* Tri */}
        <div className="bg-gray-200 shadow-md rounded-lg p-6 w-72 text-center">
          <div className="text-4xl text-green-500 mb-4">
          <div className="flex items-center justify-center bg-gray-100 w-16 h-16 rounded-full mx-auto mb-4">
              <img src="../images/Tri.png" alt="icône tri" className="w-8 h-8 object-contain"/>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Tri</h3>
          <p className="text-gray-600">
            En triant vos déchets, vous réduisez votre impact sur l’environnement.
          </p>
        </div>

        {/* Vente */}
        <div className="bg-gray-200 shadow-md rounded-lg p-6 w-72 text-center">
          <div className="text-4xl text-green-500 mb-4">
            <div style={{backgroundColor: '#A2DBA4'}} className="flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4">
              <img src="../images/money.png" alt="icône tri" className="w-8 h-8 object-contain"/>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Vente</h3>
          <p className="text-gray-600">
            Faites de vos déchets une source de revenus ! Gagnez de l’argent en les revendant.
          </p>
        </div>

        {/* Recyclage */}
        <div className="bg-gray-200 shadow-md rounded-lg p-6 w-72 text-center">
          <div className="text-4xl text-green-500 mb-4">
          <div className="flex items-center justify-center bg-gray-100 w-16 h-16 rounded-full mx-auto mb-4">
              <img src="../images/recycle2.png" alt="icône tri" className="w-8 h-8 object-contain"/>
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Recyclage</h3>
          <p className="text-gray-600">
            Chaque déchet est précieux. Redonnez-les une seconde vie et contribuez à une économie circulaire.
          </p>
        </div>
      </div>

      <div className="mt-8 px-6 text-center text-gray-700">
        <p className="text-sm md:text-base">
          Les <span className="text-green-500 font-bold">déchets</span> que vous produisez est de l’or pur.{" "}
          <span className="font-bold text-red-500">Ne les jetez plus dans la nature.</span> Commencez le tri dès aujourd’hui.{" "}
          <span className="font-bold text-green-500">Gagnez de l’argent</span> en les vendant ou échangez-les contre des{" "}
          <span className="font-bold text-green-500">objets recyclés</span> que vous trouverez dans la marketplace.
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;