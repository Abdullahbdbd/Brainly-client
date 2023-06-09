import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { saveUser } from "../../api/auth";


const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                .then(()=>{
                    console.log('user profile info updated', )
                    reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User Sign up Successful',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    saveUser(result.user)
                    navigate('/')
                })
                .catch(error => console.log(error))
            })
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="ml-5">
                    <img src="https://globalrecognitions.com/r-r/public/assets/vendors/images/login-page-img.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-5">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className="text-4xl font-bold">Sign up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600 mt-1">Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="Your Email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600 mt-1">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} name='password' placeholder="Your Password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className="text-red-600 mt-1">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600 mt-1">Password must be 6 characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600 mt-1">Password must have one uppercase one lower case and one special character</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirm password")} name='confirm password' placeholder="Confirm Password" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Photo URL" className="input input-bordered" />
                            {errors.photo && <span className="text-red-600 mt-1">Photo url is required</span>}
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign up" />
                        </div>
                    </form>
                    <p className='ml-9'>Already have an account? <Link className='text-blue-800' to='/login'>Log in</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;