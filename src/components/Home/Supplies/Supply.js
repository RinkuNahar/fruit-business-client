import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Supply = () => {
    const [supplies, setSupplies] = useState([]);
    useEffect(()=>{
        fetch('https://blooming-citadel-24075.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setSupplies(data));
    },[]);
    return (
        <div className='supplies-container mt-4'>
        {
            supplies.map(product=><Product product={product} key={product.name}></Product> )
        }
      </div>
    );
};

export default Supply;