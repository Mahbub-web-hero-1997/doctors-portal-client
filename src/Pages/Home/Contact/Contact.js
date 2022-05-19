
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        console.log("User Data", data.email, data.password);
        signInWithEmailAndPassword(data.email, data.password)
    };
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle(googleUser)
    }
    const navigate = useNavigate()

    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate('/')
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-secondary">Login!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email" placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
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
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password" placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
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
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {
                            error && <p className='text-red-500 mb-2'>Your Email or Password in Incorrect!</p>
                        }
                        {
                            googleError && <p>Something wants wrong!</p>
                        }
                        <input className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-bold w-full " type="submit" value='Login' />
                    </form>
                    <p><small>New to doctors portal? <Link className='text-secondary' to='/signup'>Create and account!</Link></small></p>

                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className="btn font-bold text-white btn-primary bg-gradient-to-r from-secondary to-primary">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;