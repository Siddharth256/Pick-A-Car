import React, { useState } from "react";
import './Bookride.css'

const BookARide = () => {
  const [carType, setCarType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("Delhi");
  const [dropoffLocation, setDropoffLocation] = useState("Delhi");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
  };

  const handlePickupLocationChange = (e) => {
    setPickupLocation(e.target.value);
  };

  const handleDropoffLocationChange = (e) => {
    setDropoffLocation(e.target.value);
  };

  const handlePickupDateChange = (e) => {
    setPickupDate(e.target.value);
  };

  const handleDropoffDateChange = (e) => {
    setDropoffDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
       <div>
    <div className="rectangle" id="Bk">
      <h1 className="Rat">Book a car</h1>
      
      <form onSubmit={handleSubmit} className="bookform" >
        <label>
          Select your car type:
          <select value={carType} onChange={handleCarTypeChange} className="front-select">
            <option value="">Select</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="Hatchback">Hatchbacks</option>
            <option value="Limousine">Limousine</option>
          </select>
        </label>

        <label>
          Pick-up location:
          <select value={pickupLocation} onChange={handlePickupLocationChange} className="front-select">
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bengalore">Bangalore</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </label>

        <label>
          Drop-off location:
          <select value={dropoffLocation} onChange={handleDropoffLocationChange} className="front-select">
          <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bengalore">Bangalore</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </label>

        <label>
          Pick-up date:
          <input type="date" value={pickupDate} onChange={handlePickupDateChange}
          className="pickupdate" />
        </label>

        <label>
          Drop-off date:
          <input type="date" value={dropoffDate} onChange={handleDropoffDateChange} 
          className="dropoffdate" />
        </label>

        <button type="submit" className="sub1">Search</button>
      </form>
    </div>
    </div>
  );
};

export default BookARide;
