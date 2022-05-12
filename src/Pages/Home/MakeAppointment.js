import React from 'react';
import doctor from '../../Images/images/doctor.png'
import appointment from '../../Images/images/appointment.png'
import ButtonPrimary from '../Shared/ButtonPrimary';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex flex-col md:flex-row lg:flex-row  items-center p-5'>
            <div className='flex-1'>
                <img className='mt-[-100px] none ' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white '>
                <b className='font-bold text-yellow-200'>Appointment</b>
                <h1 className='text-3xl font-bold'>Make an appointment Today</h1>
                <p className='my-4 w-11/12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <ButtonPrimary>Get-Started</ButtonPrimary>
            </div>
        </section>
    );
};

export default MakeAppointment;