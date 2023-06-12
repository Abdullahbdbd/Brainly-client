import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelectedClass from '../../../hooks/useSelectedClass';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';
import { Helmet } from 'react-helmet-async';

const Class = ({ item }) => {
    const { img, teacher, name, seat, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useSelectedClass();
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    const handleSelectClass = item => {
        console.log(item)
        if (user && user.email) {
            const selectedClass = { classId: _id, name, img, price, seat, teacher, email: user.email }
            fetch('https://summer-camp-school-server-amber.vercel.app/booked', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();

                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Selected Class',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to selected the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <>
            <Helmet>
                <title>Classes</title>
            </Helmet>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-full' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {name}</h2>
                    <h2 className="card-title">Teacher Name: {teacher}</h2>
                    <h2 className="card-title">Available seats: {seat}</h2>
                    <h2 className="card-title">Price: ${price}</h2>

                    <div className="card-actions justify-end mt-5">
                        {
                            isAdmin ?
                                <>
                                    <button className="btn btn-active btn-error btn-sm" disabled>Select</button></>
                                :
                                <>
                                    {isInstructor ?
                                        <button className="btn btn-active btn-error btn-sm" disabled>Select</button>
                                        :
                                        <button onClick={() => handleSelectClass(item)} className="btn btn-active btn-neutral btn-sm">Select</button>
                                    }
                                </>
                        }

                    </div>
                </div>
            </div>
        </>
    );
};

export default Class;