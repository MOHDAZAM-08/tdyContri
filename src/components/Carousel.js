import React, { useState, useEffect } from 'react';
// import './Carousel.css';

import kit from '../img/kit.jpeg';   
import kit2 from '../img/kit (2).jpeg';
import kit3 from '../img/kit (3).jpeg';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideCount - 1 ? 0 : prevSlide + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === currentSlide ? 'active' : ''
          }`}
        >
          <img src={slide.imagePath} style={{width:"100%"}} alt={`Slide ${index + 1}`} />
          <div className="carousel-caption">{slide.text}</div>
        </div>
      ))}
    </div>
  );
};

export default function MyCarousel() {
  const slides = [
    {
      imagePath: require('../img/kit.jpeg'),
      text: 'ARCHITECTURAL DESIGN',
    },
    {
      imagePath: require('../img/kit (2).jpeg'),
      text: 'INTERIOR DESIGN',
    },
    {
      imagePath: require('../img/kit (3).jpeg'),
      text: 'TRUNKEY PROJECTS',
    },
  ];

  return <Carousel slides={slides} />;
}


