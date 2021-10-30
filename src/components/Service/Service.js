import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, id, img, price, short} = service;
    return (
        <div className="service pb-3">
            <img src={img} height="350px" weigh="525px" alt="" />
            <h2>Visit {name}</h2>
            <h5 className="px-3">{short}</h5>
            <h4>Price {price}</h4>
            <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Click for Visit {name.toLowerCase()}</button>
                </Link>
        </div>
    );
};

export default Service;