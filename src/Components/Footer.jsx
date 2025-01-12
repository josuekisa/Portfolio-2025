import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-slate-900 h-auto'>
      <div className='flex flex-col items-center p-5'>
       
        <div className='flex justify-center'>
          <a href='https://github.com/josuekisa' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={32} className='text-white mx-3 w-6' />
          </a>
          <a href='https://www.linkedin.com/in/josue-kisa/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={32} className='text-white mx-3 w-6' />
          </a>
          <a href='https://twitter.com/josuekisa' target='_blank' rel='noopener noreferrer'>
            <BsTwitterX size={32} className='text-white mx-3 w-6' />
          </a>
        </div>

       
        <hr className="w-full my-4 border-t border-gray-700" />

        <p className='text-white text-center text-sm'>
          Copyright &copy; 2021 Josue Kisa. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default Footer;
