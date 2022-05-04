import React from 'react';
import { useParams } from 'react-router-dom';

const SuppliesDetails = () => {
    const {suppliesId} = useParams();
    return (
        <div>
            <h2>Service detail {suppliesId}</h2>
        </div>
    );
};

export default SuppliesDetails;