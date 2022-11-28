import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import logo from '../../../asset/logo.jpg'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (
        <div className="navbar bg-cyan-200 flex flex-wrap lg:flex-nowrap">
            <div className="flex-1">
                <img src={logo} alt="" className='w-12' />
                <a href="/" className="btn btn-ghost normal-case text-3xl font-semibold ">The Story Keeper</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="/blog" ><span className='text-md font-bold mx-auto'>Blog</span></a></li>
                    <div className="menu menu-horizontal p-0">
                        {
                            user?.uid ?

                                <>
                                    <li><Link to="/dashboard"><span className='text-md font-bold mx-auto'>Dashboard</span></Link></li>
                                    <button className='justify-center items-center flex hover:bg-base-300 px-3' onClick={handleLogOut}><span className='text-md font-bold mx-auto'>Log Out</span></button>
                                </>
                                :
                                <>
                                    <li><a href="/login"><span className='text-md font-bold mx-auto'>Login</span></a></li>
                                    <li><a href="/signup"><span className='text-md font-bold mx-auto'>Sign Up</span></a></li>
                                </>
                        }

                    </div>

                </ul>
            </div>
        </div>
    );
};

export default Header;