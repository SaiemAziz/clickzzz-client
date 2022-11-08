import React from 'react';

const ReviewCards = ({reviews}) => {

    return (
        <div className='grid grid-cols-3 gap-5 p-5'>
            {
                reviews.map(r => <div 
                key={r._id}
                className="p-5 rounded-xl border-4 border-double"
                >
                    <div className='flex justify-start'>
                    <img className='w-[60px] rounded-full m-5' src={r.img} alt="" />
                    <h1 className='text-left text-sm my-auto font-bold'>{r.displayName}</h1>
                    </div>
                    <h1 className='text-left text-xl font-medium text-blue-500'>Review: </h1>
                    <h1 className='text-left text-xl '>{r.details}</h1>
                </div>)
            }
        </div>
    );
};

export default ReviewCards;