import React from 'react';
import { toast } from 'react-toastify';

const UsersBody = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = (user) => {
        fetch(`http://localhost:5000/user/admin/${user}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('Successfully Make an admin')
            })
    }
    return (
        <tbody className='w-full'>
            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>{role !== 'admin' ? < button onClick={(e) => makeAdmin(user?.email)} class="btn btn-xs">Make-admin</button> : <td>{role === 'admin' && < button class="btn btn-xs bg-green-700">Already-admin</button>}</td>}</td>

                <td><button class="btn btn-xs">Remove-user</button></td>
            </tr>
        </tbody>
    );
};

export default UsersBody;