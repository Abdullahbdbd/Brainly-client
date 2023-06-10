import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { FaBook, FaBookMedical, FaBookOpen, FaBookReader, FaUsers } from 'react-icons/fa';

const Dashboard = () => {

    //TODO
    const isAdmin = true
    const isInstructor = true

    return (
        <>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                           isAdmin  ?
                                <>
                                    <li><Link to='/dashboard/manageClass'><FaBook></FaBook> Manage Classes</Link></li>
                                    <li><Link to='/dashboard/allUsers'><FaUsers></FaUsers> Manage Users</Link></li>

                                </> :

                                <>
                                    {
                                         isInstructor ?
                                            <>
                                                <li><Link to='/dashboard/instructorClass'><FaBook></FaBook> My Class</Link></li>
                                                <li><Link to='/dashboard/addClass'><FaBookMedical></FaBookMedical> Add Classes</Link></li>
                                            </>
                                            : <>
                                                <li><Link to='/dashboard/myclass'><FaBookOpen></FaBookOpen> My Selected Classes</Link></li>
                                                <li><Link to='/dashboard/enrolledClass'><FaBookReader></FaBookReader> My Enrolled Classes</Link></li>
                                            </>
                                    }
                                </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Dashboard;