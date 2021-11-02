import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({})

    // for form
    const { register, handleSubmit, reset } = useForm();

    // use axios
    const onSubmit = data => {
        data.bookingImage = service.img
        data.bookingName = service.name
        data.bookingDescription = service.description

        console.log(data);
        
        axios.post('https://dry-savannah-25601.herokuapp.com/orders', data)
         .then(res => {
             if(res.data.insertedId){
                 alert('Booking Successfully');
                 reset();
             }
         })
    }

    useEffect(() => {
        fetch(`https://dry-savannah-25601.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div className="add-service mt-2 mb-5">
            <img className="mb-2" src={service.img} height="300px" weigh="500px" alt="" /><br />
            <h4>Your Booking Name: {service.name}</h4>
            <h6>Your Booking Id: {serviceId}</h6>
    
            <h3 className="text-primary">Please give me your info</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <input {...register("address", { required: true })} placeholder="Address" />
            <input type="number" {...register("Phone", { required: true })} placeholder="Phone" />
            <input type="email" {...register("email", { required: true })} placeholder="Email" />
            <button className="btn btn-danger" onClick={() => handleSubmit(service._id)}>Confirm Your Booking</button>
            
            </form>

        </div>
    );
};

export default Booking;