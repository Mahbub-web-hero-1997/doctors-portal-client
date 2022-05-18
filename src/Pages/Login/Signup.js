import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleUser)

    }
    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }
    if (user || googleUser) {
        console.log(user);
    }
    return (
        <div className='flex justify-center items-center h-screen my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-secondary">Sign up!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">name</span>
                            </label>
                            <input
                                type="text" placeholder="Your Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email" placeholder="Your Email"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Please Provide a valid Email'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password" placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters of longer '
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {
                            error && <p className='text-red-500 mb-2 text-center'>*Maybe have a problem! Please try again.*</p>
                        }
                        {
                            googleError && <p className='text-red-500 mb-2 text-center'>*Maybe have a problem! Please try again.*</p>
                        }
                        {
                            updateError && <p className='text-red-500 mb-2 text-center'>*Maybe have a problem! Please try again.*</p>
                        }
                        <input className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold w-full " type="submit" value='Sign up' />
                    </form>
                    <p><small>Already have an account?<Link className='text-primary ml-1' to='/login'>Sign in!</Link></small></p>

                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className="btn font-bold text-white btn-primary bg-gradient-to-r from-secondary to-primary">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;