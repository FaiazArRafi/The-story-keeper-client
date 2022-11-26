import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">Books Resale</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="/">Item 1</a></li>
                    <div className="menu menu-horizontal p-0">
                        {
                            user?.uid ?

                                <>
                                    <li><Link to="/dashboard">Dashboard</Link></li>
                                    <button className='justify-center items-center flex hover:bg-base-300 px-3' onClick={handleLogOut}>Log Out</button>
                                </>
                                :
                                <>
                                    <li><a href="/login">Login</a></li>
                                    <li><a href="/signup">Sign Up</a></li>
                                </>
                        }

                    </div>

                </ul>
            </div>
        </div>
    );
};

export default Header;