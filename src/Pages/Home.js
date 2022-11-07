import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useTitle } from '../routes/useTitle';
import Service from '../shared/Service';
import Banner from './components/Banner';
import logo from '../images/logo.jpg'
const Home = () => {
    useTitle('Home')

    let returnedData = useLoaderData()
    console.log(returnedData)
    let services = returnedData.data;

    return (
        <div>
            <Banner/>
            <div className='grid grid-cols-2  mt-32  mb-10 pb-10 border-b-4'>
                <div className='w-fit mx-auto text-amber-600'>
                <h1 className='text-xl text-left'>Welcome to</h1>
                    <h1 className='text-5xl italic my-5 font-bold text-warning-content'>CLICKZZZ</h1>
                    <h1 className='text-xl text-right'>Official Website</h1>
                </div>
                <div>
                    <img className='h-full rounded-2xl' src={logo} alt="" />
                </div>
            </div>
            <h1 className='text-4xl mb-10 font-medium'>Our Services</h1>
            <div className='grid grid-cols-3 gap-5 mb-10'>
            {
                services.map(s => <Service 
                    key={s._id}
                    service={s}/>)
            }
            </div>
            <Link to='/services' className='link link-primary font-bold text-2xl'>See all</Link>
        </div>
    );
};

export default Home;