import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots, } = treatment;
    const [user] = useAuthState(auth);
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(slot, _id, name);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="Booking_Modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-secondary">Booking For : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-4'>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {slots.map((slot, index) =>
                                < option
                                    key={index}
                                    value={slot} > {slot}</option>
                            )}
                        </select>
                        <input type="text" value={user?.displayName} disabled name='name' className="input input-bordered w-full " />
                        <input type="email" value={user?.email} disabled name='email' className="input input-bordered w-full " />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <input type="submit" value="Confirm" className='btn btn-primary text-white font-bold uppercase block w-full ' />
                    </form>

                    <div className="modal-action">
                        <label for="Booking_Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default BookingModal;