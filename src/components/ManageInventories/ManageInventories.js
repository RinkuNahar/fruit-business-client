import React, { useEffect, useState } from 'react';

const ManageInventories = () => {

    const [supplies, setSupplies] = useState([]);
    useEffect(()=>{
        fetch('https://blooming-citadel-24075.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setSupplies(data));
    },[]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure?');
        if(proceed){
            const url = `https://blooming-citadel-24075.herokuapp.com/inventory/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const rest = supplies.filter(product => product._id !== id);
                setSupplies(rest);
            })
        }

    }

    return (
        <div>
            <h2 className='pb-2'>Manage your Products</h2>
            {
                supplies.map(product => <div key={product._id}>
                    <h4>{product.name} <button className='btn-primary btn' onClick={()=>handleDelete(product._id)}> Delete </button></h4>
                    
                </div>)
            }
        </div>
    );
};

export default ManageInventories;