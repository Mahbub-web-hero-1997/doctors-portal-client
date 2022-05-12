import React from 'react';
import img from '../../Images/images/chair.png'
import ButtonPrimary from '../Shared/ButtonPrimary';

const Banner = () => {
    return (
        <div class="hero min-h-screen  pb-0 ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} alt='' class="max-w-sm rounded-lg shadow-2xl w-11/12" />
                <div >
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <ButtonPrimary>Get-Started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Banner;