// Abt.js

import React from 'react';
import './Abt.css';
import Deal from '../../LOGO.jpg'

const Abt = () => {
  return (
    <div className="container" id='About'>
      <div className="nested-div1"><h1 className="cmp">ABOUT OUR COMPANY</h1></div>
      <div className="nested-div2">
        <div className="photolagao">
        <img src={Deal} alt="Deal" className="Deal" />
        </div>
        <div className="jagah"><h1>
            Drive anywhere with ease</h1>
            <p>Welcome to Pick-A-Car, your trusted partner in car rental 
                services. We understand that convenience, reliability, and exceptional 
                customer service are of utmost importance when it comes to renting a car.
                At Pick-A-Car, we strive to exceed your expectations by
                 offering a wide selection of well-maintained vehicles to suit your 
                 needs. Whether you're a traveler looking for a comfortable ride, 
                 a family in need of a spacious vehicle, or a business professional 
                 requiring a sleek and stylish car, we have the perfect solution for you.
                </p>
        </div>
      </div>
      <div className="nested-div3">
        <div className="r1"><h1 className="cars30">30</h1>Cars</div>
        <div className="r1"><h1 className="cars30">4</h1>Car Types</div>
        <div className="r1"><h1 className="cars30">100</h1>Repair Shops</div>
        <div className="r1"><h1 className="cars30">24hr</h1>Customer Services </div>
        
        
      </div>
    </div>
  );
}

export default Abt;
