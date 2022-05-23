import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointments(data)
                })
        }
    }, [user])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full border-2">

                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Patient Name</th>
                        <th>Treatment Name</th>
                        <th>Date</th>
                        <th>Time</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) =>
                            <tr className='hover'>
                                <th>{index + 1}</th>
                                <td>{appointment?.patientName}</td>
                                <td>{appointment?.date}</td>
                                <td>{appointment?.slot}</td>
                                <td>{appointment?.treatmentName}</td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;