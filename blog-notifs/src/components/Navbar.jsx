import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='flex flex-col sm:flex-row justify-between items-center bg-gray-10 border-b-4 border-gray-300 py-4 px-4 sm:px-8 gap-4 sm:gap-8'>
            
           
            <div className="logo flex items-center">
                <span className='font-bold text-lg sm:text-xl mr-2 sm:mr-3 px-1 border-r-2 border-gray-300'>HUB X</span>
                <span className='font-semibold text-lg sm:text-xl text-gray-400 px-2'>FOOD HUB</span>
            </div>

            <div className='flex items-center gap-4 sm:gap-6 text-gray-500 flex-wrap justify-center'>
                <FaEdit className='w-5 h-5 sm:w-6 sm:h-6' />
                <button className='cursor-pointer text-sm sm:text-base hover:text-black transition-all'>Write</button>
                <button><FaBell className='w-5 h-5 sm:w-6 sm:h-6' /></button>
                <img
                    src="https://i.pravatar.cc/40"
                    alt="profile"
                    className='w-8 h-8 rounded-full border-2 border-gray-300'
                />
            </div>
        </nav>
    );
};

export default Navbar;
