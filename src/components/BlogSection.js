import React from "react";

function BlogSection() {
  return (
    <section className="bg-gray-100 py-12">

      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700">BLOG</h2>
        <p className="text-gray-600">
          Apprenez davantage sur comment vous pouvez devenir acteur de la{" "}
          <span className="text-green-600">salubrité</span>.
        </p>
      </div>

      {/* Grille des articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {/* Article 1 */}
        <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img
            src="../images/blogcover.jpg"
            alt="Article"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Article title
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Article description jdsjk,ds;nfnn;ds,;snsnjdljlhjjjjjjjjzuz.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
              Lire plus
            </button>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img
            src="../images/blogcover.jpg"
            alt="Article"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Article title
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Article description jdsjk,ds;nfnn;ds,;snsnjdljlhjjjjjjjjzuz.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
              Lire plus
            </button>
          </div>
        </div>

        {/* Article 3 */}
        <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
          <img
            src="../images/blogcover.jpg"
            alt="Article"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Article title
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Article description jdsjk,ds;nfnn;ds,;snsnjdljlhjjjjjjjjzuz.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
              Lire plus
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="border border-gray-400 text-gray-600 px-6 py-2 rounded-full hover:bg-green-500 transition">
          Charger plus
        </button>
      </div>
    </section>
  );
}

export default BlogSection;