import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useTitle } from '../routes/useTitle';
import Service from '../shared/Service';
import Banner from './components/Banner';
import logo from '../images/logo.jpg'
import { AuthContext } from '../context/Auth';
import SecondSlider from './components/SecondSlider';
const Home = () => {
    useTitle('Home')

    let {user} = useContext(AuthContext)
    let returnedData = useLoaderData()
    
    let services = returnedData.data;

    return (
        <div>

            {/* header  */}
            <Banner/>
            <div className='w-fit mx-auto mt-8   p-8 text-amber-600'>
                <h1 className='text-3xl text-left'>Welcome to</h1>
                    <h1 className='text-7xl italic my-2 font-bold text-warning-content'>CLICKZZZ</h1>
                    <h1 className='text-3xl text-right'>Official Website</h1>
               
            </div>

            {/* service section  */}
            <h1 className='text-5xl font-medium border-t-4 p-5'>Our Services</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10 p-5'>
            {
                services.map(s => <Service 
                    key={s._id}
                    service={s}/>)
            }
            </div>
            <Link to='/services' className='block link link-primary font-bold text-2xl my-10 border-b-4 pb-10'>See all</Link>
            
            {/* extra 2 sections  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 text-2xl'>
                <div className='sm:p-20 p-10'>
                    <img className='w-full rounded-2xl' src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/95589264_922217678200403_6696236305208049664_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHcQSTQgo0QYvDX5vmBEGkvbPZA8krVRWJs9kDyStVFYp5V1TsYgW6MeglqOpb8s_3SxxknyZPLcERH15LnOs-J&_nc_ohc=9r661w85kkgAX8bpJOK&tn=2KGHVoq7SJ_6Yq9s&_nc_ht=scontent.fcgp7-1.fna&oh=00_AfDJlBZtzUCXD2bLhe2OspIYKTfJ2-t0dpyHvaUS2SsOQw&oe=63945250" alt="" />
                </div>
                <div className='flex flex-col justify-center px-10 text-left'>
                    <h1 className='text-5xl font-bold text-green-600 border-b-4 border-black w-fit pb-2 mb-2'>About Me</h1>
                    <p><span className='font-bold'>Name:</span> Sayem Aziz Chowdhury</p>
                    <p><span className='font-bold'>Address:</span> Bhatiary, Chittagong, Bangladesh</p>
                    <p className='text-justify'><span className='font-bold '>Description:</span> I am a professional photographer taking photos since 2010. I am currently studing CSE at CU. Photography is my hobby, my passion. And most importantly, I cares for my clients satisfaction.</p>
                    <h1 className='text-2xl font-bold text-green-600 border-b-4 border-black w-fit pb-2 my-2 ml-auto'>Contact Me</h1>
                    <div className='flex justify-end'>
                    <a target={'_blank'} rel="noreferrer" href='https://www.facebook.com/sayem.azizchowdhury.3/' className="btn mr-5 btn-primary">Facebook</a>
                    <a target={'_blank'} rel="noreferrer" href='https://www.linkedin.com/in/md-abu-saiem-aziz-chowdhury-9b7217247/' className="btn btn-info">Linkedin</a>
                    </div>
                </div>
            </div>


            {/* More demo  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                <div className='md:text-left flex justify-center items-center flex-col'>
                    <h1 className='text-5xl border-b-4 border-orange-500 p-5'>More Demo??</h1>
                    <h1 className='p-5 text-3xl'>Here you go</h1>
                </div>
                <SecondSlider/>
            </div>
        </div>
    );
};

export default Home;