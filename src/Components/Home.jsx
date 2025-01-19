import React from 'react'
import 'animate.css';


const Home = () => {
  return (
    <div id='home' className='flex flex-row bg-slate-950 text-white  items-center justify-center    p-6 w-full h-screen'>
        <div className='flex-1 max-w-2xl '>
       <p className=' font-bold p-1 ml-0 sm:ml-3  text-yellow-300 font-raleway'>Bonjour je m'appelle  </p>
       <h1 className='text-3xl text-slate-200 sm:text-7xl font-extrabold mr-5 animate_animated animate__bounceInLeft font-raleway'> Josue Kisa</h1>
       <h2 className='text-3xl text-slate-200 font-bold sm:text-7xl font-raleway'>Développeur Web</h2>
       
     
       
       
       </div>    

       
    </div>
  )
}

export default Home