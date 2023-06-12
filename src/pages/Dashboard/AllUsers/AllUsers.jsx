import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserTie, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = id =>{
        fetch(`https://summer-camp-school-server-amber.vercel.app/users/admin/${id}`,{
            method: 'PATCH'
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Made Admin Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = id =>{
        fetch(`https://summer-camp-school-server-amber.vercel.app/users/instructor/${id}`,{
            method: 'PATCH'
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Made Instructor Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <>
        <Helmet>
            <title>Dashboard | Manage Users</title>
        </Helmet>
        <div className='w-full'>
            <div className="overflow-x-auto">
                <table className="table table-zebra text-xl font-semibold">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=><tr
                            key={user._id}
                            >
                                <th>{index+1}</th>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'Admin':<button onClick={()=> handleMakeAdmin(user._id)}><FaUserTie></FaUserTie></button>}</td>


                                <td>{user.role === 'instructor' ? 'Instructor':<button onClick={()=> handleMakeInstructor(user._id)}><FaUsers></FaUsers></button>}</td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default AllUsers;