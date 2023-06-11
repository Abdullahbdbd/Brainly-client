import React from 'react';
import useData from '../../../hooks/useData';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [teachers, , refetch] = useData();
    const [axiosSecure] = useAxiosSecure()

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
                // fetch(` https://bistro-boss-server-abdullahbdbd.vercel.app/carts/${item._id}`, {
                //     method: 'DELETE'
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         if (data.deletedCount > 0) {
                //             refetch();
                //             Swal.fire(
                //                 'Deleted!',
                //                 'Class has been deleted.',
                //                 'success'
                //             )
                //         }
                //     })

                axiosSecure.delete(`/school/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className='w-full'>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            teachers
                                .filter(item => item.category === "Class")
                                .map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.teacher}
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.seat}</td>
                                    <td>$ {item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs bg-red-500">denied</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;