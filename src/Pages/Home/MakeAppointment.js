import React from 'react';
import doctor from '../../Images/images/doctor.png'
import appointment from '../../Images/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex  items-center'>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='text-3xl'>Make an appointment Today</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            </div>
        </section>
    );
};

export default MakeAppointment;