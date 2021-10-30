import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../hooks/useAuth';
import login from '../images/login.jpg'
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
   // reDirect url
    const history = useHistory();
    const location = useLocation();
    const reDirectUrl = location.state?.from || "/home";

    const handleGoogleLogin = () => {
        signInUsingGoogle()
           .then(result => {
               history.push(reDirectUrl);
           })
    }

    return (
        <div className="mt-4">
            <h2 className="text-primary">Please Login With Google</h2><br />
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button><br />
            <img className="login-img" src={login} alt=""  />
        </div>
    );
};

export default Login;