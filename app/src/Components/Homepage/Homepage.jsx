import React, { useEffect, useState } from 'react';
import Example from '../Example/Example'
import './Homepage.css';

const Homepage = () => {
  // const images = [pic1, pic2, pic3];
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);
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
        <h1 className='Head'>Welcome Enthusiasts</h1>
        <div className='Faltu'>
          <div className='A'>Let's Turn</div>
          <div><Example /></div>
        </div>
      </div>

    </div>
  );
};

export default Homepage;
