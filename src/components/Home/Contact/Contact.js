import React from 'react';
import rinku from '../../../images/myself/rinku.jpg';
import './Contact.css';

const Contact = () => {
    return (
     <div>
            <hr />
            <h2 className='text-danger mt-4 mb-4'>Contact Me</h2>
            <hr />
        <div className='container contact-container'>
          <div>
            <img className='contact-img' src={rinku} alt="" />
          </div>
          
          <div>
              <h3>Rinku Nahar Hossan</h3>
              <h4>Business Woman</h4>
              <h3>E-mail : rinkunaharhossan2022@gmail.com</h3>
              <h3>Phone: 0111143222</h3>
              <p>Here, you will get juicy juicy fresh fruits.I have a big garden where I plant all kinds of fruits.You can also visit my garden at any time.But before that please contact with me and then come.And I can give you guarantee that you will love it also you will get it at a lowest price ever.</p>
          </div>
        </div>
        <hr />
     </div>
    );
};

export default Contact;