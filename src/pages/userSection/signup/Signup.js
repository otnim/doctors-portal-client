import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleSignup } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');

    const handleSignup = data => {
        setSignupError('');
        const name = data.name;
        const email = data.email;
        const password = data.password;
        //console.log(name, email, password);
        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log(user);
                toast.success('Successfully created!');
                const userInfo = {
                    displayName: name,
                }
                updateUser(userInfo)
                .then(() => {
                    alert('Profile Updated')
                })
                .catch(err => alert(err.message));
            })
            .catch(error => {
                const errorMessage = error.message;
                //toast.error(errorMessage);
                setSignupError(errorMessage);
            })
    }

    const handleGoogleSignup = event => {
        event.preventDefault();
        //console.log("Google me");
        const provider = new GoogleAuthProvider();

        googleSignup(provider)
            .then(result => {
                alert('Google Signup Successful.')
            })
            .catch(error => {
                //const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            })
    }

    return (
        <div className="card w-96 mx-auto shadow-2xl border border-indigo-700 p-5">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSubmit(handleSignup)}>
                <div className="form-control w-full">
                    <label className="label">
                        <h3 className="label-text text-xl">Name</h3>
                    </label>
                    <input type="text"
                        {...register("name")}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <h3 className="label-text text-xl">Email</h3>
                    </label>
                    <input type="email"
                        {...register("email", { required: "Email address is required" })}
                        className="input input-bordered w-full"
                    />
                    <label>
                        {errors.email && <p className='text-error'>{errors.email.message}</p>}
                    </label>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <h3 className="label-text text-xl">Password</h3>
                    </label>
                    <input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 4, message: "Password must be at least 4 characters long" },
                            maxLength: { value: 8, message: "Password length cannot be > 8" }
                        })}

                        className="input input-bordered w-full"
                    />
                    <label>
                        {errors.password && <p className='text-error'>{errors.password.message}</p>}
                    </label>
                </div>
                {signupError && <p className='text-error text-center'> {signupError} </p>}
                <input type="submit" value="Signup" className="mt-3 btn btn-accent text-white w-full" />
            </form>
            <p className='text-center mt-6'> Alreay have an account? <Link to='/login' className='text-primary'> Login here </Link> </p>
            <div className="divider mt-5">OR</div>
            <button onClick={handleGoogleSignup} className="btn btn-outline w-full mt-4"> Continue with Google </button>
        </div>
    );
};

export default Signup;