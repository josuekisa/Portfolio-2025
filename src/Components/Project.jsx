import React from 'react'
import Black from '../assets/black-bg.jpg';
const Project = () => {
  return (
    <div id='project' className='flex flex-col justify-center items-center bg-slate-950 w-full h-screen'>
 <h1 className='text-slate-100 text-4xl sm:text-6xl font-bold mb-4 font-raleway'> Mes Projets</h1>
   <div>
    
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mt-6'>
      <img src={Black} alt="bg" className='hover:blur w-64 sm:w-96' />
      <img src={Black} alt="bg" className='hover:blur  w-64 sm:w-96' />
      <img src={Black} alt="bg"className='hover:blur  w-64 sm:w-96'  />

    </div>
   </div>
  <a href="https://github.com/josuekisa">
   <button className=' bg-yellow-500 rounded-lg  mt-6 text-slate-100 text-xl p-4 hover:bg-yellow-400'> Voir mes autres projets 
    
   </button>
   </a>
    </div>
  )
}

export default Project