import React from 'react';
import Review from './Review';
import quote from '../../Images/icons/quote.svg'
import img from '../../Images/images/people1.png'
import people2 from '../../Images/images/people2.png'
import people3 from '../../Images/images/people3.png'

const Reviews = () => {
    return (
        <section className='px-10 my-20 '>
            <div className='flex mb-10'>
                <div className='flex-1 text-center'>
                    <b className='text-secondary'>Testimonial</b>
                    <h4 className='text-4xl text-white'>What Our Patients Says</h4>
                    <hr className='w-1/2 mt-5 mx-auto' />
                </div>
                <img className='w-1/12 opacity-20' src={quote} alt="" />
            </div>
            <div className='grid gap-5 grid-cols lg:grid-cols-3 '>
                <Review country='California' personNam='Winson Herry' img={img}></Review>
                <Review country='California' personNam='Winson Herry' img={people2}></Review>
                <Review country='California' personNam='Winson Herry' img={people3}></Review>
            </div>
        </section>
    );
};

export default Reviews;