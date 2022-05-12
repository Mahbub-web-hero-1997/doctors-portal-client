import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../Images/icons/clock.svg'
import marker from '../../Images/icons/marker.svg'
import phone from '../../Images/icons/phone.svg'

const info = () => {
    return (
        <div className='grid mt-10 gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 '>
            <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' img={clock}></InfoCard>
            <InfoCard bgClass='bg-accent' cardTitle='Our Locations' img={marker}></InfoCard>
            <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact Us' img={phone}></InfoCard>
        </div>
    );
};

export default info;