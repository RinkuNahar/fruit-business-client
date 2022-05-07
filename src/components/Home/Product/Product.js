import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const { _id,img, name, quantity, price, supplier_name, about } = props.product;
    const navigate = useNavigate()

    const navigateToSuppliesDetail = id =>{
        navigate(`/supplies/${id}`);
    }


    return (    
        <div>
            <div className='product-review container' >
                <img className='img-fluid' src={img} alt="" />
                <h2>{name}</h2>
                <h4>Quantity: {quantity}</h4>
                <h4>Price:  {price}</h4>
                <h4>Supplier Name: {supplier_name}</h4>
                <h4>{about}</h4>
                <button onClick={()=>navigateToSuppliesDetail(_id)}  className='mb-2 btn-primary btn'>Update</button>
                {props.children}
            </div>
        </div>
    );
};

export default Product;
