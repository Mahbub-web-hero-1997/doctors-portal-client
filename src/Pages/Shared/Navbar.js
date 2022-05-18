import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Login from '../Login/Login';
import Signup from '../Login/Signup';
import ButtonPrimary from './ButtonPrimary';

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className="navbar sticky top-0 z-10 bg-base-200 mx-auto">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors-Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            {
                user ? <div className="navbar-end">
                    <ButtonPrimary><Link to='/login' onClick={handleSignOut} element={<Signup></Signup>}>Log out</Link></ButtonPrimary>
                </div> : <div className="navbar-end">
                    <ButtonPrimary><Link to='/login' element={<Login></Login>}>Login</Link></ButtonPrimary>
                </div>
            }
        </div>
    );
};

export default Navbar;