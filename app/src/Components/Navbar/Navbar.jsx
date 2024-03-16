// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='NavContainer'>
        <div className='NavHead'>
          <div className='Logo'>LOGO</div>
          <div className='Title'>Company</div>
        </div>
        <div className='ElemContainer'>
          <div className='NavLink'>Home</div>
          <div className='NavLink'>Community</div>
          <div className='NavLink'>Volunteers</div>
          <div className='NavLink'>Distributors</div>
          <div className='NavLink'>Donation</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
