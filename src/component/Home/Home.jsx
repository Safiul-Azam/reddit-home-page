import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);
    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                data.map(d => <div className=''>
                    <img src={d.images[2]} alt="" />
                </div>)
            }
        </div>
    );
};

export default Home;