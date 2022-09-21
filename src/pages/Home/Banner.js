import React from 'react';
import banner from '../../images/banner/svelte-banner.jpg'
import logo from '../../images/icons/logo-2.png'

const Banner = () => {
    return (
        <div className='h-full bg-white'>
            <div className='h-full' style={
                {
                    background: `url(${banner})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }
            }>
            </div>
            <div className='flex items-center justify-start ml-20 space-x-7 relative bottom-5'>
                <img width={100} className=' bg-white rounded-full p-3' src={logo} alt="" />
                <h2 className='text-4xl font-bold'>Svelte the JavaScript Non-Framework</h2>
                <button className='bg-[#FF3D00] text-white px-10 py-1 rounded-full font-bold text-lg'>Join</button>
            </div>
        </div>
    );
};

export default Banner;