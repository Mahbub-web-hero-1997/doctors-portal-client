import React, { useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='mx-10'>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;