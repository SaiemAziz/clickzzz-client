import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    return (
        <div className='card shadow-xl outline-double outline-gray-400 p-5 text-left justify-between'>
            <img className='rounded-xl' src={service.img} alt="" />
            <h1 className='text-2xl my-5 font-bold'>{service.title}</h1>
            <h1 className='font-medium'>Description:</h1>
            <h1 className=''>{service.description.length>100 ? `${service.description.slice(0,100)}...`: service.description}</h1>
            <Link to={`details/${service._id}`}><div className="btn btn-outline w-full mt-5">Details</div></Link>
        </div>
    );
};

export default Service;