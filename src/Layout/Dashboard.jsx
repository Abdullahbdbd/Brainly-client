import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { FaBook, FaBookMedical, FaBookOpen, FaBookReader, FaUsers } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    return (
        <>
         <Helmet>
            <title>Dashboard</title>
        </Helmet>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                           isAdmin  ?
                                <>
                                    <li><Link to='/dashboard/manageItems'><FaBook></FaBook> Manage Classes</Link></li>
                                    <li><Link to='/dashboard/allUsers'><FaUsers></FaUsers> Manage Users</Link></li>

                                </> :

                                <>
                                    {
                                         isInstructor ?
                                            <>
                                                <li><Link to='/dashboard/myclasses'><FaBook></FaBook> My Classes</Link></li>
                                                <li><Link to='/dashboard/addItem'><FaBookMedical></FaBookMedical> Add Classes</Link></li>
                                            </>
                                            : <>
                                                <li><Link to='/dashboard/myclass'><FaBookOpen></FaBookOpen> My Selected Classes</Link></li>
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