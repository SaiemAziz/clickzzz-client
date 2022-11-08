import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth';
import { useTitle } from '../routes/useTitle';

const Details = () => {

    useTitle("Details")
    let [reviews, setReviews] = useState([])
    let [check, setCheck] = useState(false)
    let {user, setRedirect} = useContext(AuthContext)
    let navigate = useNavigate()
    let location = useLocation()
    let {data} = useLoaderData()

    useEffect(()=>{
        fetch(`http://localhost:5000/service-reviews?id=${data._id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data.data))
    },[])

    if(user)
        setRedirect(null)

    let clickedLogin = () => {
        setRedirect(location.pathname)
        navigate('/login')
    }

    let reviewForm = e => {
        e.preventDefault()
        let time = new Date().getTime()
        let review = {
            text: e.target.review.value,
            email: user.email,
            displayName : user.displayName,
            service_id: data._id,
            time: time,
        }
        e.target.reset()
        reviews.push(review)
        fetch(`http://localhost:5000/service-reviews`, {
            method : 'POST',
            headers: {
                "content-type": "application/json"
            },
            body : JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => console.log(data.status))
    }

    // toggle disabled
    let checkReview = e => {
        if(e.target.value.length > 20)
            setCheck(true)
        else
            setCheck(false)
    }

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
        <div className='my-10 px-5 text-3xl flex justify-between items-center'>
            <h1 className=' text-left'>All Reviews regarding this service:</h1>
            {
                !user &&
                <div>
                    <h1 className='text-2xl'>Please <span className='btn btn-primary btn-sm btn-outline' onClick={clickedLogin}>LogIn</span> to give review</h1>
                </div>
            }
        </div>
        {
            user && 
            <form onSubmit={reviewForm} className='flex items-center justify-center mx-auto'>
                <img src={user?.photoURL} className="w-[60px] h-[60px] rounded-full mr-5" alt="" />
                <textarea name="review" className='textarea textarea-primary w-1/2' placeholder='Type minimum 20 characters' onChange={checkReview}/>
                <input className={`btn ml-5 btn-info`} type="submit" value="Submit Review" disabled={!check} />
            </form>
        }
        <div className='grid grid-cols-3 gap-5 p-5'>

        </div>
        </div>
    );
};

export default Details;