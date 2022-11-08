import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../routes/useTitle';
import Service from '../shared/Service';

const Services = () => {
    useTitle("Services")

    let returnedData = useLoaderData()
    let services = returnedData.data;
    return (
        <div className='px-5'>
        <h1 className='text-4xl my-10 font-medium '>Our All Services : {services.length}</h1>
        <div className='grid grid-cols-3 gap-5 mb-10'>
        {
            services.map(s => <Service 
                key={s._id}
                service={s}/>)
        }</div>
            
        </div>
    );
};

export default Services;