import { format } from 'date-fns';
import React from 'react';


const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots, } = treatment;
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(slot, _id, name);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="Booking_Modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-secondary">Booking For : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-4'>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered w-full" disabled />
                        <select name='slot' class="select select-bordered w-full">
                            {slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" placeholder="Your Name" name='name' class="input input-bordered w-full " />
                        <input type="email" placeholder="Email Address" name='email' class="input input-bordered w-full " />
                        <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered w-full " />
                        <input type="submit" value="Confirm" className='btn btn-primary text-white font-bold uppercase block w-full ' />
                    </form>

                    <div class="modal-action">
                        <label for="Booking_Modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookingModal;