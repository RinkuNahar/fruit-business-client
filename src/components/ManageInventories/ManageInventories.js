import React, { useEffect, useState } from 'react';

const ManageInventories = () => {

    const [supplies, setSupplies] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data=>setSupplies(data));
    },[]);

    const handleDelete = id =>{
        const proceed = window.confirm('Are You Sure?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
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
            <h2>Manage your production</h2>
            {
                supplies.map(product => <div key={product._id}>
                    <h4>{product.name} <button onClick={()=>handleDelete(product._id)}> X </button></h4>
                    
                </div>)
            }
        </div>
    );
};

export default ManageInventories;