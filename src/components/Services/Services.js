import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1 className="text-primary mt-4">Our Services</h1>
            <div className="service-container">
           {
               services.map(service => <Service
                  key={service._id}
                  service ={service}></ Service>)
           }
           </div>
        </div>
    );
};

export default Services;