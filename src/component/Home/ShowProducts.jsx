import React from 'react';
import useProducts from '../../hooks/useProducts';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiAddToQueue } from 'react-icons/bi'

const ShowProducts = ({ filterByBtn, productName }) => {
    const [products] = useProducts()
    console.log(products);
    return (
        <div className='container  mx-auto '>
            {filterByBtn.length > 0 && <div className='border rounded-md shadow-md mb-4 p-3 flex justify-between'>
                <div>
                    <h2 className='text-xl font-semibold'>All {productName?.category?.name}</h2>
                </div>
                <div className='space-x-8 flex '>
                    <div>
                        <span className='text-sm text-gray-600 font-medium'>Show: </span>
                        <select className='bg-gray-100 focus:outline-none text-sm px-3 py-2'>
                            <option value="" selected>5</option>
                            <option value="">10</option>
                            <option value="">15</option>
                            <option value="">20</option>
                        </select>
                    </div>
                    <div>
                        <span className='text-sm text-gray-600 font-medium'>Sort By: </span>
                        <select className='bg-gray-100 focus:outline-none text-sm px-3 py-2'>
                            <option value="" selected>Default</option>
                            <option value="">Low to Hight</option>
                            <option value="">Hight To Low</option>
                        </select>
                    </div>
                </div>
            </div>}
            <div className='grid grid-cols-5 gap-5'>
                {filterByBtn?.length > 0 ?
                    filterByBtn.map(product => <div key={product.id} className='border h-80'>
                        <img src={product?.images[1] || product.category.image} alt="" />
                        <div className='px-3 mt-2'>
                            <h2 className='text-lg text-center font-semibold'>{product.title}</h2>
                        </div>
                    </div>) :
                    products.map(product => <div key={product.id} className='border pb-3'>
                        <img src={product?.images[2] || product.category.image} alt="" />
                        <div className='px-3 mt-2'>
                            <h2 className='text-lg font-semibold'>{product.title}</h2>
                            <p className='text-sm font-medium'>category :- {product.category.name}</p>
                            <hr className='my-2' />
                            <h3 className='text-xl text-center text-amber-600'>${product.price}</h3>
                        </div>
                        <div className='px-2 space-y-2 flex flex-col my-2'>
                            <button className='hover:bg-teal-700 bg-teal-100 hover:text-white text-teal-500 text-sm p-1 flex items-center justify-center hover:duration-500 hover:ease-in-out ease-in-out duration-500'>
                                <AiOutlineShoppingCart className='text-xl mr-3' />
                                Buy Now
                            </button>
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