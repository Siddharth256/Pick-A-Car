import React, { useState } from 'react';
import './Hatchbacks.css';
import Hatchbacks from './Hatchbacks.json';
// import CarPage from'./CarPage/CarPage'
import ProductList from './Products-List';

function Hatchback() {
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
      const sortedData = [...Hatchbacks].sort((a, b) => a.Rent - b.Rent);
      setSortedHatchbacks(sortedData);
    } else if (option === 'highToLow') {
      const sortedData = [...Hatchbacks].sort((a, b) => b.Rent - a.Rent);
      setSortedHatchbacks(sortedData);
    } else {
      setSortedHatchbacks(null);
    }
  };

  const renderHatchbacks = () => {
    const hatchbacksToRender = sortedHatchbacks || Hatchbacks;

    return hatchbacksToRender.map((HatchD) => (
      <div key={HatchD.id} className='cars-container'>
        <div className='Hatch-content' onClick={() => handleImageClick(HatchD)}>
          <div className='Img-Prod'>
            <img
              src={HatchD.src}
              alt=''
              
            />
          </div>
          <div className='Main-Info'>
            <div className='name'>
              <h3>{HatchD.Name}</h3>
            </div>
            <div className='features'>
              <div className='Fuel'>&#9981; {HatchD.Fuel}</div>
              <div className='type'><span className='gear'>&#9881;</span>{HatchD.Type}</div>
              <div className='seats'>
                <p>&#128186; {HatchD.Seats}</p>
              </div>
            </div>
          </div>
          <div className='price'>   &#8377; {HatchD.Rent}/Hour</div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {selectedImage ? (
        <div className="CarPageMain">
          <div className="CarDivs">
              <button onClick={handleGoBack} className='GoBack' >&#8592;</button>
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
                <div> &#8377; {selectedImage.Rent}/Hour</div>
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
          {renderHatchbacks()}
        </div>
      )}
    </div>
  );
}

export default Hatchback;

