import React from "react";

function AboutSection() {
  return (
    <section className="bg-white">
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage: "url('../images/aboutcover.jpg')",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100">À propos de nous</h1>
      </div>

      <div className="bg-green-600 text-white py-12 px-6 md:px-20">

        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">Les déchets killers</h2>

        <p className="mb-6 leading-relaxed">
          Greenlink est une plateforme dédiée à l’action climatique et à la préservation de notre environnement. 
          Nous croyons en un avenir où chaque geste compte et où les initiatives locales, comme globales, 
          peuvent transformer notre planète. En connectant des citoyens engagés, des jeunes leaders, et des organisations, 
          Greenlink crée un réseau où l’impact collectif renforce les efforts individuels. Ensemble, nous agissons 
          pour une planète plus verte et un avenir durable.
        </p>

        <div className="flex justify-center mb-8">
          <img
            src="../images/team.jpg"
            alt="TEAM"
            className="w-full max-w-lg rounded-lg"
          />
        </div>

        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8">Une vision d'aigle</h3>
        <p className="leading-relaxed">
          Chez Greenlink, nous aspirons à un monde où les communautés s’unissent pour faire face aux défis climatiques. 
          Nous croyons que chaque individu, en tant qu’acteur de changement, peut jouer un rôle dans la transition vers 
          un environnement durable. Notre vision est celle d’un réseau mondial qui favorise l’engagement écologique, 
          l’éducation, et l’action concrète pour préserver la planète.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;