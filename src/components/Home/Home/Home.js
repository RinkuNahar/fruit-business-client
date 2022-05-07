import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Review from '../Review/Review';
import Supplies from '../Supplies/Supplies';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Supplies></Supplies>
            <Review></Review>
            <Contact></Contact>
        </div>
    );
};

export default Home;