import React from 'react';
import River1 from '../Assets/River1.mp4';
import {RiSearch2Line} from 'react-icons/ri';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
            <video className='w-full h-screen object-cover' src={River1} 
                autoPlay 
                loop 
                muted />
        
        <div className='absolute w-full h-full top-0 bg-slate-600/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1>Your #1 Spot for Wanderlust</h1>
            <h2 className='py-4'>Voted for Best Travel Experience Worldwide</h2>

            <form className='flex justify-between  items-center max-w-[700p] mx-auto w-full border-none p-1
             rounded-md text-black bg-slate-600/70 hidden md:flex'>
                <div>
                <input className='bg-transparent w-[300px] sm:w-[400px] font-[Montserrat] focus:outline-none' 
                 type='text' placeholder='Find Your Next Spot'/>
                </div>
                <div>
                    <button><RiSearch2Line className='icon' size={20}/></button>
                </div>
            </form>

        </div>
        

    </div>
  )
}

export default Hero