import React from 'react';
import './Review.css';
import man from '../../../images/review/man.png'
import woman from '../../../images/review/woman.png'
const Review = () => {
    return (
        <div id='reviews'>
        <div>
            <h1 className='text-danger mt-4 mb-4'>Reviews</h1>
            </div>
        <div className=' review-layout w-100 container mb-4'>
            <div className='d-flex review'>
                <div>
                    <img className='review-img' src={man} alt="" />
                    <h4 className='text-center'> Mr. BayMax</h4>
                </div>
                <div className='style-div ms-4'></div>
                <div className='py-4 mt-4 text-start ps-4' >
                    <p>You are the best supplier I have seen in my entire life.I have taken always fresh fruits from you at a good price.And that's why I always remember you in my every business process. And also now I came to place my order.Thank you so much for giving these fresh juicy juicy fruits.</p>
                </div>
            </div>
            <div className='d-flex review'>
                <div>
                    <img className='review-img-woman' src={woman} alt="" />
                    <h4 className='text-center'> Mrs. Scelton </h4>
                </div>
                <div className='style-div ms-4'></div>
                <div className='py-4 mt-4 text-start ps-4'>
                    <p>I am a business woman. So I couldn't give my full care to my business.I was so worried about my start-up. But after I found you, you just gave me hope to start newly.Now I can trust u blindly.Thank You So much</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Review;