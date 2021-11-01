import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, _id, img, price, description} = service;
    return (
        <div className="service pb-3">
            <img className="" src={img} height="350px" weigh="525px" alt="" />
            <h2> {name}</h2>
            <h5 className="px-3">{description}</h5>
            <h4>Booking Price {price}</h4>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Booking {name.toLowerCase()}</button>
                </Link>
        </div>
    );
};

export default Service;