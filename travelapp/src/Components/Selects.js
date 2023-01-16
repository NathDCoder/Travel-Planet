import React from 'react'
import Australia from '../Assets/Australia.jpg'
import Trinidad from '../Assets/englishmans-bay-trinidad.jpg'
import NewZealand from '../Assets/NewZealand2.jpg'
import Thailand from '../Assets/Thailand.jpg'
import France from '../Assets/France.jpg'
import Seychelles from '../Assets/Seychelles.jpg'




const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3'>
        <div className='relative'>
            <img src={Australia} alt='Australia' />
        </div>
    </div>
  )
}

export default Selects