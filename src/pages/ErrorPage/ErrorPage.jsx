import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Zoom triggerOnce>
            <div className='-mt-10'>
                <img className='h-screen mx-auto' src="https://img.freepik.com/premium-vector/flat-concept-404-error-page-file-found-web-page-banner-presentation-social-media-documents-website-maintenance-error-webpage-construction-vector-ultraviolet-illustration_317038-348.jpg" alt="" />
            <div className='text-center'>
            <Link to='/'><button className="btn btn-neutral"><FaAngleDoubleLeft></FaAngleDoubleLeft> Home</button></Link>
            </div>
            </div>

        </Zoom>
    );
};

export default ErrorPage;