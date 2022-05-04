import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const { _id,img, name } = props.product;
    const navigate = useNavigate()

    const navigateToSuppliesDetail = id =>{
        navigate(`/supplies/${id}`);
    }


    return (    
        <div>
            <div className='product-review container' >
                <img className='img-fluid' src={img} alt="" />
                <h3>{name}</h3>
                <button onClick={()=>navigateToSuppliesDetail(_id)}  className='mb-2 btn-primary btn'>Detail Information</button>
                {props.children}
            </div>
        </div>
    );
};

export default Product;
