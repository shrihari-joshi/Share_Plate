import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Community from './Components/SignUp/community/Community';
import Distributors from './Components/Distributors';
import Navbar from './Components/Navbar/Navbar';
import Volunteers from './Components/Volunteers';
import Homepage from './Components/Homepage/Homepage';
import Donate from './Donate';
import NGO from './Components/NGO';
import FoodBank from './Components/FoodBank';

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const pathname = window.location.pathname;

    // Set background image based on the current pathname
    if (pathname === '/') {
      setBackgroundImage('https://fitandflex.in/cdn/shop/articles/20_Protein-Rich_Foods-_High_Protein_Food_Items_For_A_Healthy_Life_1000x1000.png?v=1659504286');
    } else if (pathname === '/aboutus') {
      setBackgroundImage('https://annamrita.org/wp-content/uploads/2023/02/Everything-you-need-to-know-about-the-functions-of-a-food-NGO.jpg');
    } else if (pathname === '/contactus') {
      setBackgroundImage('https://media.istockphoto.com/id/1303107115/photo/volunteers-standing-hands.jpg?s=612x612&w=0&k=20&c=V10cwe1VPSQifCyGlIwTNTaSkfHY6rP3jsAnQbijD7o=');
    } else if (pathname === '/volunteers') {
      setBackgroundImage('path_to_your_volunteers_bg_image.jpg');
    } else if (pathname === '/distributors') {
      setBackgroundImage('https://www.narayanseva.org/wp-content/uploads/2022/11/6-charity-donation.jpg');
    } else if (pathname === '/community') {
      setBackgroundImage('path_to_your_community_bg_image.jpg');
    } else if (pathname === '/donate') {
      setBackgroundImage('path_to_your_donate_bg_image.jpg');
    } else if (pathname === '/ngo') {
      setBackgroundImage('path_to_your_ngo_bg_image.jpg');
    } else if (pathname === '/foodbank') {
      setBackgroundImage('path_to_your_foodbank_bg_image.jpg');
    }
  }, []);

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/aboutus' element={<Aboutus />} />
          <Route exact path='/contactus' element={<Contactus />} />
          <Route exact path='/volunteers' element={<Volunteers />} />
          <Route exact path='/distributors' element={<Distributors />} />
          <Route exact path='/community' element={<Community />} />
          <Route exact path='/donate' element={<Donate />} />
          <Route exact path='/ngo' element={<NGO />} />
          <Route exact path='/foodbank' element={<FoodBank />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
