import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyBooking.css';


// dandle delete
// const [services, setServices] = useState

const MyBooking = () => {
    const {user} = useAuth()
    console.log(user.email);
    const [orders, setOrders] = useState([])
    // console.log(orders)
    useEffect( () =>{
        fetch(`https://dry-savannah-25601.herokuapp.com/orders/${user?.email}`)
         .then(res=>res.json())
         .then(data => setOrders(data))
    }, [user]);
    console.log(orders);
    

    // handle delete
    const handleDelete = id => {
        const url = `https://dry-savannah-25601.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.deletedCount){
                    alert('Your Booking Canceled')
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining);
                }
            })
    }

    return (
        <div className="my-booking">
            <h2>My Booking</h2>
            {
                orders.map(order => <div className="container service mt-3 pb-3" key={order._id}>
                <img className="service-img img-fluid" src={order.bookingImage}  alt="" />
                <h3>{order.bookingName}</h3>
                <h3>Booking Price: {order.price} BDT</h3>
                <h5 className="mx">{order.bookingDescription}</h5>
                <button className="btn btn-danger" onClick={() => handleDelete(order._id)}>Cancel Booking {order.bookingName.toLowerCase()}</button><br />
            </div>)
            }
        </div>
    );
};

export default MyBooking;