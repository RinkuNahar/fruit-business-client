import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SuppliesDetails = () => {
    const {suppliesId} = useParams();
    return (
        <div>
            <h2>Service detail {suppliesId}</h2>
            <Link to='/checkout'>
                    <button className='btn btn-primary mb-4'>Proceed Checkout</button>
            </Link>

        </div>
    );
};

export default SuppliesDetails;