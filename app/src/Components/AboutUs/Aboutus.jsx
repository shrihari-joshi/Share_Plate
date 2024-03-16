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
          <h2>Thodasa Hatke</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae soluta pariatur maiores culpa minima quam ab eligendi numquam nam aperiam tenetur delectus quia, consectetur perspiciatis rerum esse. Unde totam dolore exercitationem iure soluta laboriosam consequatur earum modi, labore deserunt consequuntur impedit eligendi ab et blanditiis quidem accusamus eum possimus maxime? Non a aperiam similique ab quasi, id repellat explicabo laudantium, rem iusto reiciendis fugiat quaerat harum neque quibusdam consectetur maiores maxime ipsa aliquam eveniet alias porro nobis? Praesentium nesciunt cupiditate aut, necessitatibus adipisci, nihil hic, saepe tempore omnis quasi quidem veniam officia tenetur vitae molestiae non nobis facilis a unde sequi perspiciatis. Modi eligendi, ipsum unde odio in aliquid dolorum illum rerum at optio fugiat reprehenderit, blanditiis dolorem nobis debitis aliquam? Dignissimos numquam maxime veritatis, unde non consequatur consequuntur et praesentium iure. Doloremque laborum sapiente error ullam alias voluptate non corrupti dicta minima voluptas beatae eos sequi explicabo rem minus atque ipsam provident, placeat quam? Dicta ullam unde architecto, iusto iure dignissimos quam! Corporis tempora molestias odit harum quisquam quidem laboriosam, neque a illo sit provident temporibus, voluptas, repellat sequi perferendis nisi mollitia libero consequuntur similique reprehenderit eligendi. Adipisci illum accusamus aliquam saepe. Nostrum mollitia facilis blanditiis dolorem, repellat numquam.
          </p>
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