import React from 'react';

const Service = ({ img, serviceTitle, serviceDetail }) => {
    return (
        <>
            <div className="card bg-base-100 shadow-xl hover:bg-base-200 transition-all pt-5 ">
                <figure><img src={img} alt="#" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceTitle}</h2>
                    <p>{serviceDetail}</p>
                </div>
            </div>
        </>
    );
};

export default Service;