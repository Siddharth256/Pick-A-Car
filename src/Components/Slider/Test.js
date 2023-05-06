import React from 'react';
import './Test.css'; // CSS file import kare
import client1 from '../../client1.jpg'
import client2 from '../../client2.jpg'

const Testimonial = () => {
  // Rating value for the testimonials
  const rating = 5;

  // Function to generate the star icons based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="star-icon">&#9733;</span>);
    }
    return stars;
  };
  return (
    <div>
      <div >
        <h1 className='Testimonial-Heading'>Our Client's Testimonials</h1>
        <p className='cust-para'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
      </div>
    <div className="testimonial-container" id='Test'>
      <div className="testimonial-card">
        <img src={client1} alt="client1" className="client-photo" />
        <p className="testimonial-text">
          I had a fantastic experience with the car rental service. The vehicle
          was in excellent condition, and the entire process was smooth and hassle-free.
          I highly recommend their services.
        </p>
        <div className="rating">{renderStars()}</div>
        <p className="client-name">Raj Singh</p>

      </div>
      <div className="testimonial-card">
        <img src={client2} alt="client2" className="client-photo" />
        <p className="testimonial-text">
          I rented a car for my vacation, and I must say, it was the best decision.
          The car was clean, comfortable, and reliable. The staff was friendly and
          provided excellent customer service. I would definitely choose them again
          for my future car rental needs.
        </p>
        <div className="rating">{renderStars()}</div>
        <p className="client-name">Suman Joshi</p>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
