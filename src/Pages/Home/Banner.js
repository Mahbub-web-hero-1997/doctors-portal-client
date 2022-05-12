import React from 'react';
import img from '../../Images/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200 px-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
                <div >
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn text-white uppercase font-bold btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;