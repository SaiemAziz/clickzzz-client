import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    let {data} = useLoaderData()
    return (
        <div className=''>
            <h1 className='mt-10 pb-10 text-6xl border-b-4'>Details of: <span className='italic text-accent'>{data.title}</span></h1>

        {/* details of a service  */}
        <div className='shadow-2xl p-5 grid grid-cols-3 gap-5 m-5'>
            <img className='rounded-xl my-auto' src={data.img} alt="" />
            <div className='card col-span-2 flex flex-col justify-between'>
                <h1 className='text-justify text-3xl p-10'><span className='font-bold'>Description: </span>{data.description}</h1>
                <h1 className='text-right text-3xl'>Price: <span className='text-success font-bold'>${data.price}</span></h1>
            </div>
        </div>

        {/* all reviews */}
        </div>
    );
};

export default Details;