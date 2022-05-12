import React from 'react';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services/Services';
import Reviews from './Reviews';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;