import React from 'react';
import error from '../images/error.png';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h2>Not Found</h2>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;