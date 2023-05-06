import React from 'react'
// import { useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
function Products() {
  // const [selectedButton, setSelectedButton] = useState('');

  // const handleButtonClick = (value) => {
  //   setSelectedButton(value);
  // };
  return (
    <div className='Products-main' id='Fleet'>
        <h1 className='prod-main-heading'>Our Fleet</h1>
        <p className='prod-statement'>Go on a journey with our world class cars.<br></br>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
        <div className='Products'>
        <div className="vehicles"><div className='hover-box'><h5>Hatchback</h5><p>Hatchbacks are best for economy</p><button className='Browse-Button'><Link to="/Hatchbacks" style={{color:"white"}}>Browse for More</Link> </button></div><img src="../../Imgs/car1.jpg" alt="" /></div>
        <div className="vehicles"><div className='hover-box'><h5>SUV</h5><p>Enjoy your family trips in the spacious SUVs</p><button className='Browse-Button'><Link to="/SUV" style={{color:"white"}}>Browse for More</Link> </button></div><img src="../../Imgs/car2.jpg" alt="" /></div>
        <div className="vehicles"><div className='hover-box'><h5>Sedan</h5><p>Go on adventure with a Sedan</p><button className='Browse-Button'><Link to="/Sedan" style={{color:"white"}}>Browse for More</Link> </button></div><img src="../../Imgs/car3.png" alt="" /></div>
        <div className="vehicles"><div className='hover-box'><h5>limousine</h5><p>Enjoy your social events in our Limos</p><button className='Browse-Button'><Link to="/Limousine" style={{color:"white"}}>Browse for More</Link> </button></div><img src="../../Imgs/car4.jpg" alt="" /></div>
    </div>
    </div>
  )
}

export default Products

