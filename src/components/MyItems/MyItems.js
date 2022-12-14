import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [orders,setOrders] = useState([]);

    const navigate = useNavigate();
    
    useEffect(()=>{
        const getOrders =async()=>{
            const email = user.email
            const url = `https://blooming-citadel-24075.herokuapp.com/order?email=${email}`;
         try{
            const {data} = await axios.get(url,{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setOrders(data);
         }
         catch(error){
            console.log(error.message);
            if(error.response.status === 403 || error.response.status === 401){
                signOut(auth);
                navigate('/login');
            }
         }
        }
        getOrders();
       

    },[user])
    return (
        <div>
            <h2>My Items: {orders.length}</h2>
        </div>
    );
};

export default MyItems;