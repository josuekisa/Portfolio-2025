import React from 'react'
import node from '../assets/nodejs.svg';
import tailwind from '../assets/tailwind.svg';   
import R from '../assets/ReactLogo.svg';
import java from '../assets/java.svg';
import angular from '../assets/angularjs.svg';
import sql from '../assets/sql.svg';
import symfony from '../assets/symfony.svg';
import csharp from '../assets/csharp.svg';


const Skills = () => {
  return (
    <div id='skills' className='flex  flex-col justify-center items-center bg-slate-950 w-full h-screen mx-auto '>
        <h1 className='font-bold text-slate-100 text-4xl sm:text-6xl text-center font-raleway  '>Compétences</h1>
        <p className='text-white text-center mb-4 mt-4 sm:ml-3'>Voici les compétences que j'ai pu acquérir durant mes différentes formations.</p>
        <div className='grid grid-cols-2 sm:grid-cols-4  gap-4 sm:gap-6 p-6 size-1/3 sm:size-1/2  '>
            <div className='size-full  border-solid rounded-lg shadow shadow-black hover:shadow-slate-700 '>
            <img src={node} alt="node" className="  mt-3  mx-auto border-solid  " /> 
            <p className='text-white text-center text-xs sm:text-lg'>Node JS</p>
            </div>
            <div className=' border-solid rounded-lg shadow shadow-black hover:shadow-slate-700 '>
            <img src={tailwind} alt="tailwind" className="mt-3  mx-auto" />
              <p className='text-white text-center text-xs sm:text-lg '>Tailwind css</p>
            </div>
            <div className=' border-solid rounded-lg shadow shadow-black hover:shadow-slate-700'>
            <img src={R} alt="React" className="  mt-3  mx-auto border-solid " /> 
            <p className='text-white text-center text-xs sm:text-lg'>React JS</p>
            </div>
            <div className=' border-solid rounded-lg shadow shadow-black hover:shadow-slate-700'>
            <img src={java} alt="java" className="  mt-3  mx-auto border-solid " /> 
            <p className='text-white text-center text-xs sm:text-lg'>JAVA</p>
            </div>
            <div className=' border-solid rounded-lg shadow shadow-black hover:shadow-slate-700'>
            <img src={angular} alt="angular" className="  mt-3  mx-auto border-solid " /> 
            <p className='text-white text-center text-xs sm:text-lg'>Angular Js</p>
            </div>
            <div className=' border-solid rounded-lg shadow shadow-black hover:shadow-slate-700'>
            <img src={sql} alt="sql" className="  mt-3  mx-auto border-solid " /> 
            <p className='text-white text-center text-xs sm:text-lg'>SQL</p>
            </div>
            <div className=' border-solid rounded-lg shadow shadow-black hover:shadow-slate-700'>
            <img src={csharp} alt="csharp" className="  mt-3  mx-auto border-solid " /> 
            <p className='text-white text-center text-xs sm:text-lg'>C#</p>
            </div>
            <div className=' border-solid rounded-lg shadow shadow-black hover:shadow-slate-700'>
            <img src={symfony} alt="symfony" className="  mt-3  mx-auto border-solid " /> 
            <p className='text-white text-center text-xs sm:text-lg' >Symfony</p>
            </div>
        </div>
    </div>
  )
}

export default Skills