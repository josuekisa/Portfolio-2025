import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeFill } from "react-icons/ri";
import Logo from '../assets/jk.svg';



export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
 
  return (
    <div className=" bg-slate-950 fixed top-0 z-50 right-0 left-0 shadow-lg">
      <div className="flex justify-between items-center px-4 ">
        {/* Logo */}
        <div className="text-white text-xl">
          <img src={Logo} alt="pdp" className='w-20 bg-slate-950' />
        </div>

        {/* Navigation normale (visible uniquement au-dessus de 768px) */}
        <div className="hidden md:flex space-x-6">
          <a className="block text-white hover:text-gray-300" href="#home"> Accueil</a>
          <a className="block text-white hover:text-gray-300" href="#about">Présentation</a>
          <a className="block text-white hover:text-gray-300" href="#skills">Compétences</a>
          <a className="block text-white hover:text-gray-300" href="#project">Projets</a>
          <a className="block text-white hover:text-gray-300" href="#contact">Contact</a>
        </div>

        {/* Bouton Burger (visible uniquement en dessous de 768px) */}
        <button
          className="block md:hidden ml-auto"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <RiCloseLargeFill color='white' className="w-6" alt="Close menu" />
          ) : 
            <TiThMenu color='white' className="w-6  " alt="Open menu" />
          }
        </button>
      </div>

      {/* Menu burger (affiché si showMenu est true) */}
      {showMenu && (
        <div className="flex flex-col items-center p-5 text-white text-xl blur-1">
          <a href="#home">Accueil</a>
          <a href="#about">Présentation</a>
          <a href="#skills">Compétences</a>
          <a href="#project">Projets</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
};
