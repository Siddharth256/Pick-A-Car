import React from 'react';
import './Appdown.css';
import PHONE from './PHONE.PNG';
import GOOGLE from './GOOGLE.PNG';
import PHONENAYA from './PHONENAYA.PNG'

const Appdown = () => {
  return (
    <div className="appdown-container">
      <div className="left-side">
      <img src={PHONE} alt="PHONE" className="PHONE" />

      </div>
      <div className="right-side">
        <div className="top">
        <h1 className="pehlah1">DOWNLOAD OUR NEW APP</h1>
        <img src={PHONENAYA} alt="PHONENAYA" className="PHONENAYA" />
       
        <h2 className="dusrah1">FEATURES</h2>
        <ul>
          <li>
            <p>Renting a car through our app saves you valuable time and effort.
              You can quickly browse through our wide selection of vehicles, check
              availability, and complete the booking process in just a few simple
               steps.
               </p>
          </li>
          <br/>
          <li> <p> Our app keeps you updated with real-time information about your
             rental.
             You'll receive notifications regarding booking confirmations, pick-up and
              drop-off instructions, and any changes or updates related to your 
              reservation.2
              </p>
          </li>
        </ul>
        </div>
        <div className="bottom">
            <h1 className="teesrah1">DOWNLOAD IT TODAY ON:</h1>
            <img src={GOOGLE} alt="GOOGLE" className="GOOGLE" />
        </div>
      </div>
    </div>
  );
};

export default Appdown;
