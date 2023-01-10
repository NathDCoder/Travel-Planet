import React, {useState} from "react";
import {BsPersonBadge} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {MdFastfood} from 'react-icons/md';
import {MdNoFood} from 'react-icons/md'
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from 'react-icons/fa'


const NavBar = () => {

    const [nav, setNav] = useState(false);
    const [title, setTitle] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setTitle(!title)
    };

    return (
        <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
            <div>
                <h1 onClick={handleNav} className={title ? 'hidden' : 'block'}>PLACES.</h1>
            </div>
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className="hidden md:flex">
                <BiSearch size={30}/>
                <BsPersonBadge size={30}/>
            </div>
            {/*Hamburger Menu*/}
            <div onClick={handleNav} className="md:hidden z-10">
                {nav ? <MdNoFood size={30} /> : <MdFastfood size={30} />}
            </div>
            {/* Mobile Menu drop down */}
            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/70 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                 <h1>PLACES.</h1>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                    <div className="flex m-2">
                        <button className="absolute left-32">Search</button>
                        <button>Account</button>
                    </div>
                    <div className="flex justify-between my-6">
                        <FaFacebook className='icon' size={20}/>
                        <FaTwitter className='icon' size={20}/>
                        <FaYoutube className='icon' size={20}/>
                        <FaPinterest className='icon' size={20}/>
                        <FaInstagram className='icon' size={20}/>
                    </div>
                </ul>
            </div>
        </div>
    )  
}

export default NavBar
