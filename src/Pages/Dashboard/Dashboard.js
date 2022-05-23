import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile index-[-1]">
            <input id="dashboard_Sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center ">
                <h2 className='text-4xl text-purple-500'>Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side z-0">
                <label htmlFor="dashboard_Sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard' >My Dashboard</Link></li>
                    <li><Link to='/dashboard/review' >My Reviews</Link></li>
                    <li><Link to='/dashboard/history' >My history</Link></li>
                    <li><Link to='/dashboard/users' >All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;