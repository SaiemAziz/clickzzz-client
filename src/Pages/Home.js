import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useTitle } from '../routes/useTitle';
import Service from '../shared/Service';
import Banner from './components/Banner';
import logo from '../images/logo.jpg'
import { AuthContext } from '../context/Auth';
const Home = () => {
    useTitle('Home')

    let {user} = useContext(AuthContext)
    let returnedData = useLoaderData()
    
    let services = returnedData.data;

    return (
        <div>
            <Banner/>
            <div className='w-fit mx-auto mt-8   p-8 text-amber-600'>
                <h1 className='text-3xl text-left'>Welcome to</h1>
                    <h1 className='text-7xl italic my-2 font-bold text-warning-content'>CLICKZZZ</h1>
                    <h1 className='text-3xl text-right'>Official Website</h1>
               
            </div>
            <h1 className='text-5xl font-medium border-t-4 p-5'>Our Services</h1>
            <div className='grid grid-cols-3 gap-5 mb-10 p-5'>
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