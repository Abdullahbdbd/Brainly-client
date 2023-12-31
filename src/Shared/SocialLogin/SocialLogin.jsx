import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveUser } from '../../api/auth';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    console.log('login page', location)
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const loggedInUser = result.user;
               console.log(loggedInUser)
               saveUser(result.user)
               navigate(from, {replace: true});
        })
    }

    return (
        <div>
            <div className='divider'></div>
            <div className='text-center mb-5'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;