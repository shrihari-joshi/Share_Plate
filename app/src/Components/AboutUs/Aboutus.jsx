import React from 'react'
import './Aboutus.css'
import { useState, useEffect } from 'react'
import pic1 from './image.png'
import pic2 from './image1.png'
import pic3 from './image2.png'
import pic4 from './image3.png'
const Aboutus = () => {
  const images = [pic1, pic2, pic3, pic4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='Main'>
      <div className='bee'>
        <div className='hello'>
          <h2>About US</h2>
          <h3>
            Connecting Communities Through Food
          </h3>
          <p>Welcome to [Website Name], where we believe in the power of food to unite communities and make a meaningful difference in the lives of those in need.

            Our platform serves as a bridge between NGOs and restaurants, fostering a symbiotic relationship where surplus food finds its way to those who need it the most. We understand that food wastage is not just an environmental concern but a social injustice, which is why we are committed to facilitating the redistribution of excess food to the underserved.</p>
          <h3>
            Our Mission
          </h3>
          <p>
            At [Website Name], our mission is simple yet impactful: to alleviate hunger and reduce food waste by connecting generous restaurants with local NGOs dedicated to serving the community. We strive to create a seamless process where surplus food is redirected from restaurants to NGOs, and finally into the hands of individuals and families who are facing food insecurity.
          </p>
          <h3>How It Works</h3>
          <p>
            NGOs and restaurants can easily connect on our platform, creating a network of support that transcends geographical boundaries. Restaurants with excess food can post their available surplus on our website, specifying the type and quantity of food ready for donation.

            NGOs in the vicinity receive real-time notifications about available food items and can claim them based on their requirements. This streamlined approach ensures that surplus food reaches those in need quickly and efficiently.</p>
          <h3>The Heart of Our Operation: Our Volunteers</h3>
          <p>Central to our operation are our dedicated volunteers, the unsung heroes who make it all possible. These passionate individuals step up to collect surplus food from partner NGOs and deliver it to community centers, shelters, and individuals who rely on this support.

            Their commitment and enthusiasm drive the core of our mission, creating a ripple effect of compassion and solidarity within the communities we serve.</p>
         </div>

      </div>
      <div className='bee'>
        <div className='ImgDiv'>
          <img src={images[currentImageIndex]} className='sideImage' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Aboutus