import React from 'react';


const InfoCard = ({ img, cardTitle, bgClass, className }) => {
    return (

        <div className={`card lg:card-side shadow-xl p-5 mt-50 ${bgClass}`}>
            <figure><img className='' src={img} alt="Album" /></figure>
            <div className="card-body text-white text-left">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>


    );
};

export default InfoCard;