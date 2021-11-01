import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/services')
         .then(res=>res.json())
         .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    alert('Deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                }
            })
    }
    return (
        <div className="container">
            <div className="container">
            <div className="container pb-3">
            <h2 className="mt-4">Manage Booking</h2>
            {
                services.map(service => <div className="container service mt-5 pb-3" key={service._id}>
                    <img src={service.img}  height="250px" weigh="100px" alt="" />
                    <h3>{service.name}</h3>
                    <h3>Booking Price: {service.price} BDT</h3>
                    <h5>{service.description}</h5>
                    <button className="btn btn-danger" onClick={() => handleDelete(service._id)}>Delete {service.name.toLowerCase()}</button><br />
                </div>)
            }
            </div>
        </div>
        </div>
    );
};

export default ManageServices;