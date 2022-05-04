import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
        <div className='footer bg-dark '>
                <h2 className='footer-title text-white'> <span className='side'> Juicy</span>   <span className='ps-3 side'>Warehouse</span></h2>
                <h4 className='text-white'>Always there for you as a helping hand</h4>
                <p className='text-white'>© Copyright 2021, All Rights Reserved {year}</p>
                {/* <h5>{today}{year}</h5> */}
        </div>
    </div>
    );
};

export default Footer;