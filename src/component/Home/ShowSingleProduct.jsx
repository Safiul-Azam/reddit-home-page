import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';

const ShowSingleProduct = () => {
    const productId = useParams()
    const id = parseInt(productId?.id)
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    return (
        <div className='container mx-auto mb-20'>
            <p className='text-sm font-semibold'>Category : {product?.category?.name}</p>
            <div className='w-50 mx-auto mb-4 grid grid-cols-3 gap-3'>
                {
                    product?.images?.map((img, index) => <div className='border shadow-xl' key={index}>
                        <img src={img} alt="" />
                    </div>)
                }
            </div>
            <div className='w-1/2 mx-auto'>
                <h2 className='text-center text-amber-500 mt-10 text-xl'>{product?.title}</h2>
                <p className='text-3xl text-teal-500 text-center'>${product.price}</p>
                <hr className='my-3' />
                <h5 className='text-lg font-semibold text-center'>Description :</h5>
                <p className='text-lg text-center'>{product.description}</p>
            </div>

            <div className='text-center mt-10'>
                <Link className='hover:bg-amber-400 bg-amber-200 hover:text-gray-800 px-12 py-2 text-gray-700 font-medium hover:duration-500 hover:ease-in-out ease-in-out duration-500 text-xl' to='/'>Proceed Check Out</Link>
            </div>
        </div>
    );
};

export default ShowSingleProduct;