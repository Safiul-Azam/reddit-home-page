import React from 'react';

const ShowProducts = ({ProductMySearch}) => {
    return (
        <div className='container mx-auto grid grid-cols-4 gap-5'>
            {
                ProductMySearch?.map(product => <div className=''>
                    <img src={product.images[2]} alt="" />
                </div>)
            }
        </div>
    );
};

export default ShowProducts;