import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/images/login.png';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loginUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = data => {
        const email = data.email;
        const password = data.password;
        setLoginError('');

        loginUser(email, password)
            .then(userCredential => {
                alert('Login Successful, Enjoy.')
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message);
            })
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" className='hidden lg:block' />
                </div>
                <div className="card w-96 mx-auto shadow-2xl border border-indigo-700 p-5">
                    <h1 className="text-4xl font-bold text-center">Ensure Login!</h1>
                    <form onSubmit={handleSubmit(handleLogin)}>
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
                                {...register("password", { required: "Password is required", })}
                                className="input input-bordered w-full"
                            />
                            <label>
                                {errors.password && <p className='text-error'>{errors.password.message}</p>}
                            </label>

                            <label className="label">
                                <span className="label-text">Forgot password?</span>
                            </label>
                        </div>
                        {loginError && <p className='text-error text-center'> {loginError} </p>}
                        <input type="submit" value="Login" className="btn btn-accent text-white w-full mt-3" />
                    </form>
                    <p className='text-center mt-6'> New to Doctors Portal? <Link to='/signup' className='text-primary'> Create an Account </Link> </p>
                    <div className="divider mt-5">OR</div>
                    <button className="btn btn-outline w-full mt-4"> Continue with Google </button>
                </div>
            </div>
        </div>
    );
};

export default Login;