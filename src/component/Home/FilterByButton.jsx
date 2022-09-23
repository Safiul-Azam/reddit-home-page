import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import ShowProducts from './ShowProducts';
import { GiRunningShoe, GiClothes,GiOfficeChair} from 'react-icons/gi';
import { TbDeviceWatchStats } from 'react-icons/tb';
import { MdOtherHouses } from 'react-icons/md';

const FilterByButton = () => {
    const [products] = useProducts()
    const [filterByBtn, setFilterByBtn] = useState([])
    const [productName, setProductName] =useState('')
    const btnByProductName = [
        { id: 2, name: 'clothes', icon: <GiClothes /> },
        { id: 3, name: 'shoes', icon: <GiRunningShoe /> },
        { id: 4, name: 'electronics', icon: <TbDeviceWatchStats /> },
        { id: 5, name: 'furniture', icon: <GiOfficeChair /> },
        { id: 1, name: 'others', icon: <MdOtherHouses /> },
    ]

    const handleClick = (btn) => {
        setFilterByBtn(products.filter(product => product?.category?.name.toLowerCase() === btn))
        setProductName(products.find(product => product?.category?.name.toLowerCase() === btn))
    }
    console.log(filterByBtn);
    return (
        <>
            <div className='flex justify-center space-x-10 mb-20'>
                {
                    btnByProductName.map((btn) => <div className='border flex justify-center w-28 h-28' key={btn.id}>
                        <button className='' onClick={() => handleClick(btn.name)}>
                            <h3 className='text-7xl'>{btn.icon}</h3>
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