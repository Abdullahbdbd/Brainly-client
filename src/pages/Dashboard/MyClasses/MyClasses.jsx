import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MyClass from './MyClass';

const MyClasses = () => {
    const [classes, setClasses] = useState([]);
    console.log(classes)
    const { user } = useAuth()

    useEffect(() => {
        fetchClasses();
    }, [user]);

    const fetchClasses = () => {
        fetch(`http://localhost:5000/school/${user.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setClasses(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            {/* {
                classes.map((item, index) => <MyClass
                key={item._id}
                item={item}
                index={index}
                ></MyClass>)
            } */}




            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Seat</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
                                <th>{index+1}</th>
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
                                <td>{item.seat}</td>
                                <td> ${item.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;
