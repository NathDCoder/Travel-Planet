import React from 'react';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';



const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
          <div>
            <h2>Family and Couple Packages to Three Destinations</h2>
            <p className='font-semibold py-4'>
                Make memories now with budget friendly packages for everyone.
                Pick a variety of packages from around the world from resorts
                to remote locations. Have a big family? No problem, pick a family 
                adventure package in the wilds of the safari or a taste of island life.
                Need a romantic getaway? You've come to the right place. Couples can 
                elope to the best secluded spots searched out by our team of adveturous 
                photographers. What are you waiting for Book Today!
            </p>
          </div>
          <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                    <RiCustomerServiceFill size={50} />
                </button>
                <div>
                    <h3 className='py-2'>First CLass Service</h3>
                    <p className='py-1'>Voted the #1 easiest most customizable Trip Planner for the last 10 years</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                    <MdOutlineTravelExplore size={50} />
                </button>
                <div>
                    <h3 className='py-2'>First CLass Service</h3>
                    <p className='py-1'>Voted the #1 easiest most customizable Trip Planner for the last 10 years</p>
                </div>
            </div>
          </div>
        </div>

        <div>
            <div className='border text-center font-semibold'>
                <p className='py-2'>20% off Next Vacation</p>
                <p className='py-4'>14 Days Left</p>
                <p className='bg-slate-800 text-gray-200 py-2'>Book Now to Get this Deal</p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label className='p-2'>Destination</label>
                    <select className='bg-slate-500 text-white border rounded-md p-2'>
                        <option>Trinidad and Tobago</option>
                        <option>New Zealand</option>
                        <option>Thailand</option>
                        <option>France</option>
                        <option>Gambia</option>
                    </select>
                </div>
                <div className='flex flex-col my-4 border rounded-md p-2'>
                    <label>Check-In</label>
                    <input type="date" />
                </div>
                <div className='flex flex-col my-2 border border rounded-md p-2'>
                    <label>Check-Out</label>
                    <input type="date" />
                </div>
                    <button className='w-full my-4'>Rates & Availability</button>
            </form>
        </div>
    </div>
  )
}

export default Search