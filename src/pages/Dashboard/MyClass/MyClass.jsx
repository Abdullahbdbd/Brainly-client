import React from 'react';
import useSelectedClass from '../../../hooks/useSelectedClass';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyClass = () => {
    const [selectedClass, refetch] = useSelectedClass();

    const total = selectedClass.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booked/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }



    return (
        <div className='mt-10'>
            <div className='uppercase font-semibold h-[60] flex justify-between'>
                <h3 className='text-3xl'>Total Price: ${total}</h3>
                <Link to='/dashboard/payment'>
                    <button className="btn btn-active bg-green-500 text-xl">Pay</button>
                </Link>
            </div>


            <div className="overflow-x-auto w-full">
                <table className="table w-[900px] text-2xl font-semibold">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClass.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td><button onClick={() => handleDelete(item)} className="btn btn-square text-xl">
                                    <FaTrash></FaTrash>
                                </button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;