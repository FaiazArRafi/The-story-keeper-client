import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (

        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay flex justify-end"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin ?
                                <>
                                    <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                    <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                </>
                                :
                                isSeller ?
                                    <>
                                        <li><Link to="/dashboard/addproduct" className="btn btn-outline btn-info">Add a Product</Link></li>
                                        <li><Link to="/dashboard/myproducts" className="btn btn-outline btn-info">My Products</Link></li>
                                    </>
                                    :
                                    <li><Link to="/dashboard/myorders">My Orders</Link></li>

                        }

                    </ul>
                </div>
            </div>
        </div>

    );
};

export default DashboardLayout;