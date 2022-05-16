import React from 'react';
import Service from './Service';
import img from '../../../Images/images/fluoride.png'
import cavity from '../../../Images/images/cavity.png'
import whitening from '../../../Images/images/whitening.png'
import treatment from '../../../Images/images/treatment.png'
import ButtonPrimary from '../../Shared/ButtonPrimary';

const Services = () => {
    return (
        <div className='my-20'>
            <div className='text-center'>
                <h3 className='text-xl font-bold uppercase text-secondary mb-3'>Our Services</h3>
                <h2 className='text-4xl uppercase font-bold text-secondary mb-4'>Services We Provide</h2>
            </div>
            <hr className='w-1/3 mx-auto mb-8 bg-primary' />
            <div className=' grid gap-5 grid-cols-1 lg:grid-cols-3 '>
                <Service serviceTitle='Fluoride Treatment' serviceDetail='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' img={img}></Service>
                <Service serviceTitle='Cavity Filling' serviceDetail='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' img={cavity}></Service>
                <Service serviceTitle='Teeth Whitening' serviceDetail='Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' img={whitening}></Service>
            </div>
            <div className="hero w-11/12 mx-auto mt-5">
                <div className="hero-content flex-col lg:flex-row p-0 m-0">
                    <img alt='' src={treatment} className="max-w-sm rounded-sm shadow-2xl w-11/12  " />
                    <div className='ml-20'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <ButtonPrimary>Get-Started</ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;