import React from 'react';
import banner from '../../../images/banner.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <img className='w-100 banner-img ' src={banner} alt="" />
        </div>
    );
};

export default Banner;