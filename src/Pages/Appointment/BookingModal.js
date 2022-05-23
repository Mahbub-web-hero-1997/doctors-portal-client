import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots, } = treatment;
    const [user] = useAuthState(auth);
    const treatmentDate = format(date, "PP")
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(slot, _id, name);
        const bookingData = {
            treatmentId: _id,
            treatmentName: name,
            date: treatmentDate,
            slot,
            patientName: user.displayName,
            patientEmail: user.email,
            phone: event.target.phone.value,
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.success) {
                    toast.success('Your appointment is successful')
                }
                else {
                    toast.error('You already appointed!')
                }
                setTreatment(null)
                refetch()
            })
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
                        <label htmlFor="Booking_Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default BookingModal;