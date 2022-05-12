import React from 'react';
import img from '../../Images/images/chair.png'
import ButtonPrimary from '../Shared/ButtonPrimary';
import backgroundImg from '../../Images/images/bg.png'

const Banner = () => {
    return (
        <div>
            <div style={{
                background: `url(${backgroundImg})`

            }} className="hero min-h-screen " >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl w-11/12" />
                    <div >
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <ButtonPrimary>Get-Started</ButtonPrimary>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Banner;