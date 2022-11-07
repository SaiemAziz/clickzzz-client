import React from 'react';
import { useTitle } from '../routes/useTitle';
import Banner from './components/Banner';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <Banner/>
            
        </div>
    );
};

export default Home;