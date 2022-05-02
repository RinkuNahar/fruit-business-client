import React from 'react';
import './Product.css'
const Product = (props) => {
    const { img, name } = props.product;
    return (
        <div>
            <div className='product-review container' >
                <img className='img-fluid' src={img} alt="" />
                <h3>{name}</h3>
                {props.children}
            </div>
        </div>
    );
};

export default Product;
