import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Community from './Components/Community';
import Distributors from './Components/Distributors';
import Navbar from './Components/Navbar/Navbar';
import Volunteers from './Components/Volunteers';
import Homepage from './Components/Homepage/Homepage';

const App = () => {
  return (
    <div>
      <div>
        <Navbar /> 
      </div>
      <div>
        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/volunteers' element={<Volunteers />} />
          <Route path='/distributors' element={<Distributors />} />
          <Route path='/community' element={<Community />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
