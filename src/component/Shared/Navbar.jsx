import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs'
import useProducts from '../../hooks/useProducts';
import ShowProducts from '../Home/ShowProducts';
import ScrollNavbar from './ScrollNavbar';

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })
    }, [])
    const [products] = useProducts()
    const [searchProducts, setSearchProducts] = useState(undefined)

    const ProductMySearch = products.filter(product => product?.category?.name.toLowerCase() === searchProducts)
    return (
        <>

            {
                scroll ? <ScrollNavbar /> : <div className='w-full bg-gray-100 mx-auto z-10 mb-10 shadow-sm py-3'>
                    <div className='flex space-x-4 pb-2 w-full justify-around items-center'>
                        <h2 className='text-2xl text-teal-500 font-bold'>SAFI <span className='text-amber-500'>SHOP</span></h2>
                        <div className='w-1/3 flex justify-between items-center hover:outline-1 hover:outline outline-teal-500 bg-white px-4 space-x-3 py-2'>
                            <input onChange={(e) => setSearchProducts(e.target.value)} type="text" placeholder="Search" className=" focus:outline-none text-xs" />
                            <BsSearch className='text-gray-500 text-lg cursor-pointer' />
                        </div>
                        <AiOutlineShoppingCart className='text-amber-800 text-2xl cursor-pointer' />
                    </div>
                </div>
            }
        </>
    );
};

export default Navbar;