import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Supplies.css'

const Supplies = () => {
    const [supplies, setSupplies] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSupplies(data));
    }, []);
    return (
        <div>
          <div>
          <h2>My Supplies</h2>
          </div>
            <section  className='supplies-container'>

                {
                    supplies.slice(0,6).map(product => <Product
                         product={product}
                          key={product._id}
                          ></Product>)   
                }
              
            </section>

            <div className=' mt-4 mb-4'>
                <Link to="/supplies" >
                    <button className='supplies-button border-0 p-2'>See More</button>
                </Link>
            </div>

        </div>
    );
};

export default Supplies;
