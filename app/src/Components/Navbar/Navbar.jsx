// Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // State to control dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click occurs outside the distributors tab
      if (!event.target.closest('.NavLink')) {
        setDropdownVisible(false);
      }
    };

    // Add event listener to handle outside clicks
    document.addEventListener('click', handleOutsideClick);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='Navbar'>
      <div className='NavContainer'>
        <div className='NavHead'>
          <div className='Logo'>LOGO</div>
          <div className='Title'>Company</div>
        </div>
        <div className='ElemContainer'>
          <div className='NavLink'>
            <Link className='linked' to='/'>Home</Link>
          </div>
          <div className='NavLink'>
            <Link className='linked' to='/community'>Community</Link> 
          </div>
          <div className='NavLink'>
            <Link className='linked' to='/volunteers'>Volunteers</Link>
          </div>
          {/* Distributors tab with dropdown */}
          <div className='NavLink' onClick={toggleDropdown}>
            <div className='linked'>Distributors</div>
            {/* Dropdown menu */}
            {dropdownVisible && (
              <div className='DropdownMenu'>
                <div>
                  <Link className='linked' to='/ngo'>NGO</Link>
                </div>
                <div>
                  <Link className='linked' to='/foodbank'>Food Bank</Link>
                </div>
              </div>
            )}
          </div>
          <div className='NavLink'>
            <Link className='linked' to='/donate'>Donate</Link>
          </div>

          <div className='NavLink'>
            <Link className='linked' to='/aboutus'>About US</Link>
          </div>
          <div className='NavLink'>
            <Link className='linked' to='/contactus'>Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
