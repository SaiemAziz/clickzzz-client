import React from 'react';

const ReviewCards = ({reviews}) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 mb-10'>
            {
                reviews.map(r => <SingleReview
                    key={r._id} r={r}/>)
                }
        </div>
    );
};


// component for single review
const SingleReview = ({r}) => {
    let blankPhoto = "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_960_720.png";
    let time = new Date(r.time)
    return (
            <div 
                className="p-5 rounded-xl border-4 border-double flex flex-col justify-between"
                >
                    <div className='flex justify-start'>
                        <img className='w-[60px] rounded-full m-5' src={r.img || blankPhoto} alt="" />
                        <h1 className='text-left text-sm my-auto font-bold'>{r.displayName || "No Name"}</h1>
                    </div>
                    <h1 className='text-left text-xl font-medium text-blue-500'>Review: </h1>
                    <h1 className='text-left text-xl '>{r.details}</h1>
                    <h1 className='text-sm text-right mt-5'>Date: {time.getDate()}/{time.getMonth()+1}/{time.getFullYear()}</h1>
                    <h1 className='text-sm text-right'>Time: {time.getHours() % 12 !== 0 ? time.getHours() % 12 : 12}:{time.getMinutes()} {time.getHours() >= 12 ? 'PM' : 'AM'}</h1>
                </div>
    )

}

export default ReviewCards;