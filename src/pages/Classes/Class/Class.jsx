import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelectedClass from '../../../hooks/useSelectedClass';

const Class = ({ item }) => {
    const { img, teacher, name, seat, price, _id } = item;
    const {user} = useContext(AuthContext);
    const [, refetch]= useSelectedClass();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelectClass = item => {
          console.log(item)
         if(user && user.email){
            const selectedClass = {classId: _id, name, img, price, seat, teacher, email: user.email}
            fetch('http://localhost:5000/booked',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res=> res.json())
            .then(data =>{
                if(data.insertedId){
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
         else{
            Swal.fire({
                title: 'Please login to selected the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
         }
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='h-full' src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Class Name: {name}</h2>
                <h2 className="card-title">Teacher Name: {teacher}</h2>
                <h2 className="card-title">Available seats: {seat}</h2>
                <h2 className="card-title">Price: ${price}</h2>

                <div className="card-actions justify-end mt-5">
                    <button onClick={() => handleSelectClass(item)} className="btn btn-active btn-neutral btn-sm">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Class;