import React from 'react';

const Review = ({ img, personNam, country }) => {
    return (
        <div className='shadow-2xl p-5 rounded-sm hover:shadow-none'>
            <div>
                <p className='mb-5'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className='flex items-center'>
                    <img src={img} alt="" />
                    <div className='ml-4'>
                        <h6>{personNam}</h6>
                        <p>{country}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;