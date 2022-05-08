import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {suppliesId} = useParams();

    const [supply, setSupply] = useState({});
    const [user] = useAuthState(auth);

    useEffect(()=>{
        const url = `https://blooming-citadel-24075.herokuapp.com/inventory/${suppliesId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSupply(data));
    },[]);

    const handleOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            supply: supply.name,
            suppliesId : suppliesId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post('https://blooming-citadel-24075.herokuapp.com/order', order)
        .then(response=>{
           const {data} = response;
           if(data.insertedId){
               toast('Your Order is booked');
               event.target.reset();
           }
        })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {supply.name}</h2>
            <form onSubmit={handleOrder}>
            <input className='w-100 mb-2' value={user?.displayName} type="text" name='name' placeholder='Name' required readOnly/>

            <input className='w-100 mb-2' type="email" name='email' value={user?.email}  placeholder='Email' required readOnly/>

            <input className='w-100 mb-2' type="text" name='product' value={supply.name} placeholder='product Name' required/>

            <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
                <br />

            <input className='btn btn-primary mb-2' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;