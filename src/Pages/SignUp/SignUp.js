import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const [error, setError] = useState(null);
    const [type, setType] = useState();
    const { createUser, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }



    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userType = form.userType.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                setError('')
                form.reset();
                toast.success('User Created Successfully.');
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email, userType);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            });
    }

    const saveUser = (name, email, userType) => {
        const user = { name, email, userType };
        console.log(user)
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    return (
        <div>
            <div className="hero mt-5 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <div className="card-body">
                            <div className='form-control'>
                                <select id="fruits" defaultValue="Select type"
                                    onChange={(e) => setType(e.target.value)} required>
                                    <option value="Buyer">Buyer</option>
                                    <option value="Seller">Seller</option>
                                </select>
                                <input type="text" name="userType" disabled value={type} defaultValue="Buyer" placeholder="User type" className="input input-bordered input-xs w-full max-w-xs mt-2" required /></div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="text-sm">Already have an account?<Link to='/login' className="text-blue-600 hover:underline dark:text-blue-500 font-semibold text-sm"> Login</Link></p>
                                </label>
                            </div>
                            <div className='bg-red-700 text-white font-semibold rounded text-sm text-center'>
                                <h1>{error}</h1>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;