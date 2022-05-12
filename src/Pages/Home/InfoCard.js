import React from 'react';


const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (

        <div class={`card lg:card-side shadow-xl p-5 ${bgClass}`}>
            <figure><img class='' src={img} alt="Album" /></figure>
            <div class="card-body text-white text-left">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>

    );
};

export default InfoCard;