import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date, setDate }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, "PP")
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     // fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     //     .then(res => res.json())
    //     //     .then(data => setServices(data))
    // }, [formattedDate])
    // console.log('all-services', services);
    return (
        <div>
            <h4 className='text-center text-2xl text-secondary mx-auto mb-2'>Available Appointment {format(date, 'PP')}
            </h4>
            <hr className='w-2/5 mx-auto bg-primary mb-4 ' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    ></Service>)
                }
                {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
            </div>
        </div>
    );
};

export default AvailableAppointment;