import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const [error, setError] = useState('');

    const { signIn, providerLogin, setLoading } = useContext(AuthContext)
    const navigate = useNavigate();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                form.reset();
                setError('');
                setLoginUserEmail(email);
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }


    return (
        <div>
            <div className="hero mt-5 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className='mx-auto mt-5'>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline">Login with Google</button>
                        </div>

                        <div className="card-body">
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
                                    <p className="text-sm">Don't have an account?<Link to='/signup' className="text-blue-600 hover:underline dark:text-blue-500 font-semibold text-sm"> Sign Up</Link></p>
                                </label>
                            </div>
                            <div className='bg-red-700 text-white font-semibold rounded text-sm text-center'>
                                <h1>{error}</h1>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;