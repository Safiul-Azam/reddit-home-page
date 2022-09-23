import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs'
import useProducts from '../../hooks/useProducts';
import ShowProducts from '../Home/ShowProducts';
const ScrollNavbar = () => {
    const [products] = useProducts()
    const [searchProducts, setSearchProducts] = useState(undefined)

    const ProductMySearch = products.filter(product => product?.category?.name.toLowerCase() === searchProducts)
    return (
        <div className='w-full bg-teal-200 fixed mx-auto z-10 py-3'>
            <div className='flex space-x-4 pb-2 w-full justify-around items-center'>
                <h2 className='text-2xl text-teal-500 font-bold'>SAFI <span className='text-amber-500'>SHOP</span></h2>
                <div className='w-1/3 flex justify-between items-center hover:outline-1 hover:outline outline-teal-500 bg-gray-100 px-4 space-x-3 py-2'>
                    <input onChange={(e) => setSearchProducts(e.target.value)} type="text" placeholder="Search" className=" bg-gray-100 focus:outline-none text-xs" />
                    <BsSearch className='text-gray-500 text-lg cursor-pointer' />
                </div>
                <AiOutlineShoppingCart className='text-amber-800 text-2xl cursor-pointer' />
            </div>
        </div>
    );
};

export default ScrollNavbar;