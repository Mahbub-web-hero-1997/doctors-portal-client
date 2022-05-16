import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle(user)
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-secondary">Login!</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white font-bold ">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;