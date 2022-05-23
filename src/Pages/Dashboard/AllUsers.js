import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersBody from './UsersBody';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div class="overflow-x-auto w-11/12">
            <table class="table w-full text-left">

                <thead className='text-left'>
                    <tr>
                        <th>Index</th>
                        <th>Email</th>
                        <th>Make admin</th>
                        <th>Remove User</th>
                    </tr>
                </thead>
                {
                    users.map((user, index) => <UsersBody
                        key={user._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                    ></UsersBody>)
                }
            </table>
        </div >
    );
};

export default AllUsers;