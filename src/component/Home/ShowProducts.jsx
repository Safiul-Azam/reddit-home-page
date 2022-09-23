import React from 'react';
import useProducts from '../../hooks/useProducts';

const ShowProducts = ({ filterByBtn, productName }) => {
    const [products] = useProducts()
    return (
        <div className='container  mx-auto '>
            {filterByBtn.length >0 && <div className='border rounded-md shadow-md mb-4 p-3 flex justify-between'>
                <div>
                    <h2 className='text-xl font-semibold'>All { productName?.category?.name}</h2>
                </div>
                <div>
                    <select>
                        <option value="">Default</option>
                        <option value="">Low to Hight</option>
                        <option value="">Hight To Low</option>
                    </select>
                </div>
            </div>}
            <div className='grid grid-cols-5 gap-5'>
                {filterByBtn?.length > 0 ?
                    filterByBtn.map(product => <div key={product.id} className=''>
                        <img src={product?.images[2]} alt="" />
                    </div>) :
                    products.map(product => <div className=''>
                        <img src={product?.images[2]} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default ShowProducts;