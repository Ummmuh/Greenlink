import React from "react";

function MarketplaceSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
          La marketplace - le yénguèma des déchets
        </h2>
        <p className="text-gray-600">
          Les déchets n’attendent que vous pour être valorisés.{" "}
          <a href="/" className="text-green-500 font-medium hover:underline">
            Achetez-les dès maintenant.
          </a>
        </p>
      </div>

      <div className="mb-6">
        <span className="bg-green-500 text-gray-100 text-sm font-semibold px-4 py-2 rounded-lg inline-block transform -skew-x-12 ml-6">
          Les plus récents
        </span>
      </div>

      {/* Grille des produits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* Produit 1 */}
        <div className="bg-gray-100 shadow-md rounded-lg p-4 text-center">
          <img
            src="../images/plastic.jpg"
            alt="Déchets plastiques"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold text-gray-700">Déchets plastiques</h3>
          <p className="text-sm text-gray-600">Poids : 5 kg</p>
          <p className="text-sm text-gray-600">Prix : 500 GNF/kg</p>
          <p className="text-sm text-gray-600">Quartier : Sangoyah</p>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-full mt-4 hover:bg-green-200">
            Achetez
          </button>
        </div>

        {/* Produit 2 */}
        <div className="bg-gray-100 shadow-md rounded-lg p-4 text-center">
          <img
            src="../images/alimentaire.jpg"
            alt="Déchets alimentaires"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold text-gray-700">Déchets alimentaires</h3>
          <p className="text-sm text-gray-600">Poids : 15 kg</p>
          <p className="text-sm text-gray-600">Prix : 1000 GNF/kg</p>
          <p className="text-sm text-gray-600">Quartier : Cosa</p>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-full mt-4 hover:bg-green-200">
            Achetez
          </button>
        </div>

        {/* Produit 3 */}
        <div className="bg-gray-100 shadow-md rounded-lg p-4 text-center">
          <img
            src="../images/papier.jpg"
            alt="Papiers usagés"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold text-gray-700">Papiers usagés</h3>
          <p className="text-sm text-gray-600">Poids : 3 kg</p>
          <p className="text-sm text-gray-600">Prix : 1000 GNF/kg</p>
          <p className="text-sm text-gray-600">Quartier : Enta</p>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-full mt-4 hover:bg-green-200">
            Achetez
          </button>
        </div>

        {/* Produit 4 */}
        <div className="bg-gray-100 shadow-md rounded-lg p-4 text-center ">
          <img
            src="../images/métallique.jpg"
            alt="Déchets métalliques"
            className="w-full h-32 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold text-gray-700">Déchets métalliques</h3>
          <p className="text-sm text-gray-600">Poids : 5 kg</p>
          <p className="text-sm text-gray-600">Prix : 1500 GNF/kg</p>
          <p className="text-sm text-gray-600">Quartier : Kipé</p>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-full mt-4 hover:bg-green-200">
            Achetez
          </button>
        </div>
      </div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="mt-6 text-center">
        <a href="/" className="text-green-500 font-medium hover:underline">
          Voir plus
        </a>
      </div>

      <div className="mt-12 text-center">
  {/* Economie circulaire */}
  <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
    Nous faisons de <span className="text-green-600">l'économie circulaire</span>
  </h2>

  <p className="text-gray-600 mb-8">
    Encouragez les producteurs locaux en achetant leurs{" "}
    <span className="text-green-600">articles 100% recyclés</span>
  </p>

  {/* Grille des objets */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
    {/* Objet 1 */}
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
        <img
          src="../images/fauteil.png"
          alt="Fauteuils"
          className="w-16 h-16 object-contain"
        />
      </div>
      <p className="text-sm font-medium text-gray-800 mt-2">Fauteil</p>
    </div>

    {/* Objet 2 */}
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{backgroundColor: '#A2DBA4'}}>
        <img
          src="../images/sac.png"
          alt="Sacs craft"
          className="w-16 h-16 object-contain"
        />
      </div>
      <p className="text-sm font-medium text-gray-800 mt-2">Sacs craft</p>
    </div>

    {/* Objet 3 */}
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
        <img
          src="../images/bracelet.png"
          alt="Bracelets à main"
          className="w-16 h-16 object-contain"
        />
      </div>
      <p className="text-sm font-medium text-gray-800 mt-2">Bracelets à main</p>
    </div>

    {/* Objet 4 */}
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{backgroundColor: '#A2DBA4'}}>
        <img
          src="../images/rangement.png"
          alt="Meuble de rangement"
          className="w-16 h-16 object-contain"
        />
      </div>
      <p className="text-sm font-medium text-gray-800 mt-2">Meuble de rangement</p>
    </div>
  </div>
</div>
    </section>
  );
}

export default MarketplaceSection;