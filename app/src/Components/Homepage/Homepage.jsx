import React, { useEffect, useState } from 'react';
import Example from '../Example/Example'
import pic1 from './image1.jpg';
import pic2 from './image2.jpg';
import pic3 from './image3.jpg';
import './Homepage.css';

const Homepage = () => {
  const images = [pic1, pic2, pic3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  // const Texts = [" surplus into sustenance"," waste into welfare","hunger into hope"];
  // const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTextIndex((prevIndex) => (prevIndex + 1) % 3);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="container">
      <div className="description">
        <h1>Welcome Enthusiasts</h1>
        <div>Let's Turn <Example/> </div>
      </div>
        <div class="slider-frame">
              <img src={images[currentImageIndex]} className='img-container' alt="" />
      
        </div>

    </div>
  );
};

export default Homepage;
