import React from 'react';
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'
import image4 from '../Assets/image4.jpg'
import image5 from '../Assets/image5.jpg'
import image6 from '../Assets/image6.jpg'
import image7 from '../Assets/image7.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Photographer's Pick</h1>
        <p className='py-4 font-bold'>People's most Desired Destinations</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={image1} alt='places' />
            <img className='w-full h-full object-cover' src={image2} alt='places' />
            <img className='w-full h-full object-cover' src={image3} alt='places' />
            <img className='w-full h-full object-cover' src={image4} alt='places' />
            <img className='w-full h-full object-cover' src={image5} alt='places' />
            <img className='w-full h-full object-cover col-span-2 md:col-span-3' src={image6} alt='places' />
            <img className='w-full h-full object-cover' src={image7} alt='places' />
        </div>
    </div>
  )
}

export default Destinations