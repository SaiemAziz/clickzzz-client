import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useTitle } from '../routes/useTitle';
import Service from '../shared/Service';
import Banner from './components/Banner';

const Home = () => {
    useTitle('Home')

    let returnedData = useLoaderData()
    console.log(returnedData)
    let services = returnedData.data;

    return (
        <div>
            <Banner/>
            <h1 className='mt-20 text-3xl'>Welcome to</h1>
            <h1 className='text-5xl italic my-3 font-bold text-warning-content'>CLICKZZZ</h1>
            <h1 className='mb-10 text-3xl'>Official Website</h1>
            <div className='grid grid-cols-3 gap-5 mb-10'>
            {
                services.map(s => <Service 
                    key={s._id}
                    service={s}/>)
            }
            </div>
            <Link className='link link-primary font-bold'>See all</Link>
        </div>
    );
};

export default Home;