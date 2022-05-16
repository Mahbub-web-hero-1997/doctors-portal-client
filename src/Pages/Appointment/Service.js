import React from 'react';
const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg shadow-xl  hover:shadow-none duration-300">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                {
                    slots.length ? <>
                        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                    </> : <>
                        <span className='text-red-500'>No space available</span>
                    </>
                }
                <div className="card-actions justify-end">
                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="Booking_Modal" className=" btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">Book-Now</label>
                    {/* <ButtonPrimary >Book-Now</ButtonPrimary> */}
                </div>
            </div>
        </div>
    );
};

export default Service;