import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SuppliesDetails = () => {
    const {suppliesId} = useParams();
    const [supply, setSupply] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${suppliesId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setSupply(data));
    },[]);

    return (
        <div>
            <h2>Supply Product Name: {supply.name}</h2>
            <Link to='/checkout'>
                    <button className='btn btn-primary mb-4'>Delivered</button>
            </Link>

        </div>
    );
};

export default SuppliesDetails;