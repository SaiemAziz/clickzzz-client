import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    let {data} = useLoaderData()
    return (
        <div className=''>
            <h1 className='my-10 text-5xl'>Details of: <span className='italic text-accent'>{data.title}</span></h1>
        <div className='shadow-2xl p-5 grid grid-cols-3 gap-5 m-5'>
            <img className='rounded-xl' src={data.img} alt="" />
            <div className='card col-span-2 flex flex-col justify-between'>
                <h1 className='text-justify text-2xl'>Description: {data.description}</h1>
                <h1 className='text-right text-3xl'>Price: <span>${data.price}</span></h1>
            </div>
        </div>
        </div>
    );
};

export default Details;