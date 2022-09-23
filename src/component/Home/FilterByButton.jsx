import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ShowProducts from './ShowProducts';
import { GiRunningShoe } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const FilterByButton = () => {
    const [products] = useProducts()
    const [filterByBtn, setFilterByBtn] = useState([])
    const btnByProductName = [
        { id: 1, name: 'others', icon: <GiRunningShoe /> },
        { id: 2, name: 'clothes', icon: <GiRunningShoe /> },
        { id: 3, name: 'shoes', icon: <GiRunningShoe /> },
        { id: 4, name: 'electronics', icon: <GiRunningShoe /> },
        { id: 5, name: 'furniture', icon: <GiRunningShoe /> },
    ]

    const handleClick = (btn) => {
        setFilterByBtn(products.filter(product => product?.category?.name.toLowerCase() === btn))
    }
    console.log(filterByBtn);
    return (
        <div>
            <div  className='flex justify-center space-x-10 mb-20'>
                {
                    btnByProductName.map((btn) => <div className='border p-8' key={btn.id}>
                        <button className='text-4xl text-center' onClick={() => handleClick(btn.name)}>
                            {btn.icon}
                            {btn.name}
                        </button>
                    </div>)
                }
            </div>
            <ShowProducts filterByBtn={filterByBtn} />
        </div>
    );
};

export default FilterByButton;