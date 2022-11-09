import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../routes/useTitle';
import Service from '../shared/Service';

const Services = () => {
    useTitle("Services")
    let [loading, setLoading] = useState(true)

    let [services, setServices] = useState([])
    
    useEffect(()=>{
        fetch("https://service-review-three.vercel.app/services")
        .then(res => res.json())
        .then(data => {
            setServices(data.data)
            setLoading(false)
        })
    },[])

    return (
        <div className='px-5'>
        {!loading ?
        
        // all services 
        <><h1 className='text-5xl my-10 font-medium '>Our All Services : {services.length}</h1>
        <div className='grid grid-cols-3 gap-5 mb-10'>
        {
            services.map(s => <Service 
                key={s._id}
                service={s}/>)
        }</div></> : 
        
        // spinner 
            <div className="flex items-center justify-center mt-10 ">
        <div className="w-10 h-10 border-b-4 border-r-4 border-red-900 rounded-full animate-spin"></div>
        </div>
        }
            
        </div>
    );
};

export default Services;