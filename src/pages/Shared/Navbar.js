import React from 'react';
import logo from '../../images/icons/logo.png'
import { BsSearch } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const Navbar = () => {
    return (
        <div className='mx-10 z-10 mb-10 mt-2'>
            <div className="flex justify-between items-center pb-2">
                <img width={100} src={logo} alt="" />
                <div className='flex space-x-4 pb-2 w-2/3'>
                    <div className='w-3/4 flex items-center hover:outline-1 hover:outline outline-blue-400 bg-gray-100 px-4 space-x-3'>
                        <BsSearch className='text-gray-500 text-xl ' />
                        <input type="text" placeholder="Search Reddit" className=" bg-gray-100 py-1 px-2 w-3/4 focus:outline-none text-lg" />
                    </div>
                    <div className="space-x-5 flex items-center">
                        <button className='border border-[#1484D6] px-10 py-1 rounded-full font-bold text-lg'>Login</button>
                        <button className='bg-[#1484D6] border-[#1484D6] border-1 text-white px-10 py-1 rounded-full font-bold text-lg'>Signup</button>
                        <button className='flex items-center hover:outline-1 hover:outline outline-gray-400 p-2'>
                            <FaRegUser className='text-2xl text-gray-400' />
                            <IoIosArrowDown className='text-2xl text-gray-400' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;