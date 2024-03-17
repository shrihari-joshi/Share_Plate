import React, { useState } from 'react';
import './Volunteer.css';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    role: '', // Initialize role state
    contactNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission actions
    console.log(formData);
    // Reset form data
    setFormData({
      name: '',
      email: '',
      location: '',
      role: '',
      contactNumber: '',
    });
  };

  return (
    <div>
      <div className='Volu'>
        <div className='node'>
          <div className='details'>
            <h2>Want to join the fight against hunger?</h2>
            <p>
              Join us in our mission to combat food waste and hunger by donating your surplus food through our innovative web application. With just a few clicks, you can make a significant impact on the lives of those in need while also reducing environmental impact. Your contribution will ensure that perfectly good food reaches hungry mouths instead of ending up in landfills. Together, let's create a brighter future where everyone has access to nutritious meals. Donate today and be a part of the solution!
            </p>
          </div>
        </div>
        <div className='node'>
          <form className='form' onSubmit={(e) => handleSubmit(e)}>
            <h2>Join Us</h2>
            <label>
              <input
                className='input'
                type='text'
                placeholder='Name'
                name='name'
                value={formData.name}
                onChange={(e) => handleChange(e)}
                required
              />
              <span>Name</span>
            </label>

            <label>
              <input
                className='input'
                type='email'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={(e) => handleChange(e)}
                required
              />
              <span>Email</span>
            </label>

            <label>
              <input
                className='input'
                type='text'
                placeholder='Location'
                name='location'
                value={formData.location}
                onChange={(e) => handleChange(e)}
                required
              />
              <span>Location</span>
            </label>

            <label>
              <select
                className='input'
                placeholder='Role'
                name='role'
                value={formData.role}
                onChange={(e) => handleChange(e)}
                required
              >
                <option value=''>Select Role</option>
                <option value='Sorting'>Sorting</option>
                <option value='Packing'>Packing</option>
                <option value='Distribution'>Distribution</option>
              </select>
              <span>Role</span>
            </label>

            <label>
              <input
                className='input'
                type='text'
                placeholder='Contact Number'
                name='contactNumber'
                value={formData.contactNumber}
                onChange={(e) => handleChange(e)}
                required
              />
              <span>Contact Number</span>
            </label>

            <button className='submit' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
