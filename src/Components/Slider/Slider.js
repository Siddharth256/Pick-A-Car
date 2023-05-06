import React, { useState, useEffect } from 'react';
import './Slider.css';
import BookARide from './Bookride'
import Products from './Products';
import Testimonial from './Test';
import FAQ from './FAQ';
import Contact from './Contact';
import Abt from './Abt'

export default function Slider() {
    const slideData = `[
        {
          "imageUrl": "/Imgs/img1.png",
          "backurl":"/Imgs/back1.png",
          "caption": "Slide 1"
        },
        {
          "imageUrl": "/Imgs/img2.png",
           "backurl":"/Imgs/back2.png",
          "caption": "Slide 2"
        },
        {
          "imageUrl": "/Imgs/img3.png",
          "backurl":"/Imgs/back3.png",
          "caption": "Slide 3"
        },
        {
          "imageUrl": "/Imgs/img4.png",
          "backurl":"/Imgs/back4.png",
          "caption": "Slide 4"
        }
      ]`;
      const slides = JSON.parse(slideData);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides && slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [slides]);

  if (!slides || slides.length === 0) {
    return null; // Return null or handle the case when slides are not available
  }


  return (
    <div className='main_box'>
      {/* <HashRouter> */}
      {/* <Navbar></Navbar> */}
      <div className="container-slider">
        {slides.map((slide, index) => (
          <div key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
            {/* Render your slide content here */}
            <img src={slide.imageUrl} alt="H" className='front' />
            <img src={slide.backurl} alt={slide.caption} className='back' />
            {/* <h3>{slide.caption}</h3> */}
          </div>
        ))}
        <div className='box'>
          <p style={{ fontStyle: 'italic' }}>Plan your trip now</p>
          <h3>Rent at the<br />
            <span style={{ color: "red" }}>lowest price.</span>
          </h3>
        
        
          
        </div>
      </div>
      <BookARide></BookARide>
<Products></Products>
<Testimonial></Testimonial>
<FAQ ></FAQ>
<Contact/>
<Abt/>
    {/* </HashRouter> */}
    </div>
  );
}
