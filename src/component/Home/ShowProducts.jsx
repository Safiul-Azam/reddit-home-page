import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiAddToQueue } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const ShowProducts = ({ filterByBtn, productName, handleChange }) => {
    const [products] = useProducts()
    const [option, setOption] = useState([])
    const [option2, setOption2] = useState([])
    const [activeLow, setActiveLow] = useState(false)
    const [activeHigh, setActiveHigh] = useState(false)
    const handleLow = () => {
        setOption(filterByBtn.sort((a, b) => a.price - b.price))
        setOption(products.sort((a, b) => a.price - b.price))
        option2 && setOption([])
        setActiveLow(true)
        setActiveHigh(false)
    }
    const handleHigh = () => {
        setOption2(filterByBtn.sort((a, b) => b.price - a.price))
        setOption2(products.sort((a, b) => b.price - a.price))
        option && setOption2([])
        setActiveHigh(true)
        setActiveLow(false)
    }
    console.log(activeLow);
    return (
        <div className='container  mx-auto '>
            {<div className='border rounded-md shadow-md mb-4 p-3 flex justify-between'>
                <div>
                    <h2 className='text-xl font-semibold'>All {productName?.category?.name || 'Products'}</h2>
                </div>
                <div className='space-x-8 flex '>
                    <div>
                        <span className='text-sm text-gray-600 font-medium'>Show: </span>
                        <select defaultValue={products} onChange={handleChange} className='bg-gray-100 focus:outline-none text-sm px-3 py-2'>
                            <option value="5" selected>5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                    <div className=' space-x-5 flex'>
                        <button className={`hover:bg-teal-700 hover:text-white text-teal-700 text-sm p-1 flex items-center justify-center hover:duration-500 hover:ease-in-out ease-in-out duration-500 ${activeLow ? 'bg-teal-500 text-gray-100':'bg-teal-100'}`} onClick={handleLow}>Low To High</button>
                        <button className={`hover:bg-teal-700 hover:text-white text-teal-700 text-sm p-1 flex items-center justify-center hover:duration-500 hover:ease-in-out ease-in-out duration-500 ${activeHigh ? 'bg-teal-500 text-gray-100':'bg-teal-100'}`} onClick={handleHigh}>High To Low</button>
                    </div>
                </div>
            </div>}
            <div className='grid grid-cols-5 gap-5'>
                {filterByBtn?.length > 0 ?
                    filterByBtn.map(product => <div key={product.id} className='border pb-3 h-96'>
                        <img src={product?.images[1] || product.category.image} alt="" />
                        <div className='px-3 mt-2'>
                            <h2 className='text-lg font-semibold'>{product.title}</h2>
                            <p className='text-sm font-medium'>category :- {product.category.name}</p>
                            <hr className='my-2' />
                            <h3 className='text-xl text-center text-amber-600'>${product.price}</h3>
                        </div>
                        <div className='px-2 space-y-2 flex flex-col my-2'>
                            <button className='hover:bg-teal-700 bg-teal-100 hover:text-white text-teal-500 text-sm p-1 flex items-center justify-center hover:duration-100 hover:ease-in-out ease-in-out duration-500'>
                                <AiOutlineShoppingCart className='text-xl mr-3' />
                                Buy Now
                            </button>
                            <button className='hover:bg-gray-200 bg-white text-sm p-1 flex items-center justify-center hover:duration-200 hover:ease-in-out ease-in-out duration-100'>
                                <BiAddToQueue className='text-xl mr-3' />
                                Add To Cart
                            </button>
                        </div>
                    </div>) :
                    products.map(product => <div key={product.id} className='border pb-3 h-96'>
                        <img src={product?.images[2] || product.category.image} alt="" />
                        <div className='px-3 mt-2'>
                            <h2 className='text-lg font-semibold'>{product.title}</h2>
                            <p className='text-sm font-medium'>category :- {product.category.name}</p>
                            <hr className='my-2' />
                            <h3 className='text-xl text-center text-amber-600'>${product.price}</h3>
                        </div>
                        <div className='px-2 space-y-2 flex flex-col my-2'>
                            <Link to={`/${product?.id}`} className='hover:bg-teal-700 bg-teal-100 hover:text-white text-teal-500 text-sm p-1 flex items-center justify-center hover:duration-500 hover:ease-in-out ease-in-out duration-500'>
                                <AiOutlineShoppingCart className='text-xl mr-3' />
                                Buy Now
                            </Link>
                            <button className='hover:bg-gray-200 bg-white text-sm p-1 flex items-center justify-center hover:duration-200 hover:ease-in-out ease-in-out duration-500'>
                                <BiAddToQueue className='text-xl mr-3' />
                                Add To Cart
                            </button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ShowProducts;