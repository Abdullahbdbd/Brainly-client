import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const [show, setShow] = useState(false)
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, {replace: true});
            })

    }

    return (
        <>
         <Helmet>
            <title>Login</title>
        </Helmet>
        <div className="hero mt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-5 h-1/2 w-1/2">
                    <img src="https://www.vibrantacademy.com/entranceresult/img/login.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-5">

                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl font-bold mb-3">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text": "password"} name='password' placeholder="password" className="input input-bordered" required />
                            <p className='ml-72 -mt-8' onClick={()=> setShow(!show)}>
                                {
                                    show? <span><FaEyeSlash></FaEyeSlash></span>: <span><FaEye></FaEye></span>
                                }
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='ml-9'>New Here? <Link className='text-blue-800' to='/signup'>Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;