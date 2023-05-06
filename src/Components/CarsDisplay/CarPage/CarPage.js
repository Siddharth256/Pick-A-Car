import React from 'react'
// import Navbar from './Navbar.js'
// import Footer from '../../Footer/Footer.js'
import './CarPage.css'

function CarPage() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="CarPageMain">
        <div className="CarDivs">
            <div className="CarImg">
                <img src="/Sedan/amaze.png" alt="" />
            </div>
            <div className="CarText">
                <div className="Name">
                    NAME
                </div>
                <div className="Features">
                    <div>Diesel</div>
                    <div>Manual</div>
                    <div>Seats</div>
                </div>
                <div className="RentCart">
                    <div>Rent</div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
      </div>
       {/* <Footer></Footer> */}
    </div>
  )
}

export default CarPage
