import React from 'react';
import PDP from '../assets/PDP-r.png'

const About = () => {
  return (
    <div id='about'className=' p-6 bg-slate-950 h-screen w-full text-white   '>
  <div class="container mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-6">
  
    <div class=" sm:w-1/3">
      <img
        src={PDP} 
        alt="Pdp"
        class="rounded-full w-full max-w-[150px] mx-auto sm:max-w-full"
      />
    </div>
  
    <div class="text-container sm:w-2/3 text-center sm:text-left">
      <h1 class="text-3xl font-bold">À propos de moi</h1>
      <h2 class="text-xl text-yellow-400">Jeune Développeur passionné à la recherche d'une alternance</h2>
      <p class="mt-4">
      Actuellement facteur au sein de La Poste, je suis à la recherche d'une alternance dans le domaine du développement web 
      pour la rentrée 2025-2026, afin de préparer un master (école en cours de sélection).
      </p>
      <p class="mt-2">
        Titulaire d’un Bac +3 en Conception de Systèmes d’Informations, je suis passionné par le développement
        d’applications web et mobiles responsives.
      </p>
      <p class="mt-2">
        Mes compétences incluent React, Next.js, Tailwind CSS, Node.js et Express.js, avec une expérience sur
        divers frameworks et bibliothèques. Je me spécialise dans le développement web full-stack et souhaite
        évoluer dans une équipe dynamique.
      </p>
      <p className='mt-2' >
      Sur mon portfolio, les visiteurs pourront suivre les projets que je réaliserai tout au long de cette année. 
      Je n'ai pas encore d'école validée,mais je suis activement en recherche de la formation qui correspondra
       à mes ambitions professionnelles.
      </p>
      <div class=" bg-gray-800 text-white text-center mt-3 py-6">
  <h2 class="text-2xl font-bold mb-4">Intéressé par mon profil ?</h2>
  <a
    href="cv.pdf"
    class="bg-yellow-500 text-dark font-bold py-2 px-6 rounded hover:bg-yellow-400"
    download
  >
    Télécharger mon CV
  </a>
</div>
    </div>
  </div>
     
   
    </div>
  )
}

export default About