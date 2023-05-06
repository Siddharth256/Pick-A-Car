import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Products-List.css';

const ProductList = () => {
  const [selectedButton, setSelectedButton] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedCarType = event.target.value;
    setSelectedButton(selectedCarType);
    navigate(`/${selectedCarType}`);
  };

  return (
    <div>
      <div className='productspagemain'>
        <div className='prodbutton'>
          <select name="" id="" onChange={handleSelectChange} value={selectedButton} className='car-select'>
            <option value="">Car Type</option>
            <option value="Hatchbacks">Hatchbacks</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Limousine">Limousine</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
