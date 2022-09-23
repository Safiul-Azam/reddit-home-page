import React from 'react';
import useProducts from '../../hooks/useProducts';

const ShowProducts = ({ filterByBtn }) => {
    const [products] = useProducts()
    return (
        <div className='container mx-auto grid grid-cols-4 gap-5'>
            <h2>{products?.length}to{filterByBtn?.length}</h2>
            {filterByBtn?.length > 0 ?
                filterByBtn.map(product => <div className=''>
                    <img src={product.images[2]} alt="" />
                </div>) :
                products.map(product => <div className=''>
                    <img src={product.images[2]} alt="" />
                </div>)
            }

        </div>
    );
};

export default ShowProducts;