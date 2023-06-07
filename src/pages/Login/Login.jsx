import React from 'react';

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="hero mt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left ml-5">
                    <img src="https://globalrecognitions.com/r-r/public/assets/vendors/images/login-page-img.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-5">

                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-4xl font-bold mb-3">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;