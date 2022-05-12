import React from 'react';

const Service = ({ img, serviceTitle, serviceDetail }) => {
    return (
        <>
            <div class="card bg-base-100 shadow-xl hover:bg-base-200 transition-all pt-5 mb-4">
                <figure><img src={img} alt="#" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{serviceTitle}</h2>
                    <p>{serviceDetail}</p>
                </div>
            </div>
        </>
    );
};

export default Service;