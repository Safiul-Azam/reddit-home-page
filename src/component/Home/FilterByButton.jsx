import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ShowProducts from './ShowProducts';
import { GiRunningShoe, GiClothes, GiOfficeChair } from 'react-icons/gi';
import { TbDeviceWatchStats } from 'react-icons/tb';
import { MdOutlineMore } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

const FilterByButton = () => {
    const [products] = useProducts()
    const [filterByBtn, setFilterByBtn] = useState([])
    const [productName, setProductName] = useState('')
    const [active,setActive] =useState('all')

    
    const btnByProductName = [
        { id: 2, name: 'all', icon: <FaHome /> },
        { id: 2, name: 'clothes', icon: <GiClothes /> },
        { id: 3, name: 'shoes', icon: <GiRunningShoe /> },
        { id: 4, name: 'electronics', icon: <TbDeviceWatchStats /> },
        { id: 5, name: 'furniture', icon: <GiOfficeChair /> },
        { id: 1, name: 'others', icon: <MdOutlineMore className=' rotate-180' /> },
    ]

    const handleClick = (btn) => {
        setFilterByBtn(products.filter(product => product?.category?.name.toLowerCase() === btn))
        setProductName(products.find(product => product?.category?.name.toLowerCase() === btn))
        setActive(btn)
    }
    return (
        <>
            <div className='flex justify-center space-x-10 mb-20'>
                {
                    btnByProductName.map((btn) => <div className={`border flex justify-center w-28 h-28 hover:bg-teal-500 hover:text-white ${active === btn.name ? 'bg-teal-500 text-white':''}`} key={btn.id}>
                        <button className='' onClick={() => handleClick(btn.name)}>
                            <h3 className='text-5xl'>{btn.icon}</h3>
                            <p className='text-lg capitalize'>{btn.name}</p>
                        </button>
                    </div>)
                }
            </div>
            <ShowProducts filterByBtn={filterByBtn} productName={productName} />
        </>
    );
};

export default FilterByButton;