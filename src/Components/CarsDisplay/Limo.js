import React, { useState } from 'react';
import data from './Limo.json';
import ProductList from './Products-List';
import './CarPage/CarPage.css'

function Limo() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [sortedHatchbacks, setSortedHatchbacks] = useState(null);
  const [sortOption, setSortOption] = useState('');

  const handleImageClick = (HatchD) => {
    setSelectedImage(HatchD);
  };

  const handleGoBack = () => {
    setSelectedImage(null);
  };

  const handleSortChange = (event) => {
    const option = event.target.value;
    setSortOption(option);

    if (option === 'lowToHigh') {
      const sortedData = [...data].sort((a, b) => a.Rent - b.Rent);
      setSortedHatchbacks(sortedData);
    } else if (option === 'highToLow') {
      const sortedData = [...data].sort((a, b) => b.Rent - a.Rent);
      setSortedHatchbacks(sortedData);
    } else {
      setSortedHatchbacks(null);
    }
  };

  const renderLimousines = () => {
    const limousinesToRender =sortedHatchbacks|| data;

    return limousinesToRender.map((limo) => (
      <div key={limo.id}>
        <div className='Hatch-content'  onClick={() => handleImageClick(limo)}>
          <div className='Img-Prod'>
            <img
              src={limo.src}
              alt=''
             
            />
          </div>
          <div className='Main-Info'>
            <div className='name'>
              <h3>{limo.Name}</h3>
            </div>
            <div className='features'>
              <div className='Fuel'>&#9981; {limo.Fuel}</div>
              <div className='type'><span className='gear'>&#9881;</span> {limo.Type}</div>
              <div className='seats'>
                <p>&#128186; {limo.Seats}</p>
              </div>
            </div>
          </div>
          <div className='price'>&#8377; {limo.Rent}/Hour</div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {selectedImage ? (
         <div className="CarPageMain">
         <div className="CarDivs">
        <button onClick={handleGoBack} className='GoBack'>&#8592;</button>
          <div className="CarImg">
          <img src={selectedImage.src} alt="" />
          </div>
          <div className="CarText">
        <h2 className="Name">{selectedImage.Name}</h2>
        <div className="Features">
                  <div>&#9981;{selectedImage.Fuel}</div>
                  <div><span className='gear'>&#9881;</span>{selectedImage.Type}</div>
                  <div>&#128186;{selectedImage.Seats}</div>
              </div>
              <div className="RentCart">
                  <div>&#8377;{selectedImage.Rent}/Hour</div>
                  <button>Add to Cart</button>
              </div>

       
      </div>
      </div>
      </div>
      ) : (
        <div className='Hatchbacks-main'>
         <div className='sort-select'>
            <select value={sortOption} onChange={handleSortChange}>
              <option value=''>Sort by</option>
              <option value='lowToHigh'>Rent (Low to High)</option>
              <option value='highToLow'>Rent (High to Low)</option>
            </select>
          </div>
          <ProductList />
          {renderLimousines()}
        </div>
      )}
    </div>
  );
}

export default Limo;
