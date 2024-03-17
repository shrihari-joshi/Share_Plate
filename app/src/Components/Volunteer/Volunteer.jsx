import React, { useState } from 'react';
import './Volunteer.css';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    role: '', // State for selected role
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
    // You can perform form validation here before submitting
    // For now, we'll just log the data to the console
    console.log(formData);
    // You can also send this data to your backend for further processing
  };

  return (
    <div>
      <div className='Volu'>
        <div className='node'>
          <div className='details'>
            <h2>Want to join the fight against hunger?</h2>
            <p>
              Be a part of our fight against hunger. If you’re an individual, organization, institution, donor, the press, or an artist who would like to join us or partner with us, please reach out here or write to us at:
            </p>
          </div>
        </div>
        <div className='node'>
          <form className="form" onSubmit={handleSubmit}>
            <h2>Join Us</h2>
            <label>
              <input
                className="input"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span>Name</span>
            </label>

            <label>
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span>Email</span>
            </label>

            <label>
              <input
                className="input"
                type="text"
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
              <span>Location</span>
            </label>

            <label>
              <select
                className="input"
                placeholder="Role"
                /*name="role"*/
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">select</option>
                <option value="Sorting">Sorting</option>
                <option value="Packing">Packing</option>
                <option value="Distribution">Distribution</option>
              </select>
              <span>Role</span>
            </label>

            <label>
              <input
                className="input"
                type="text"
                placeholder="Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
              <span>Contact Number</span>
            </label>

            <button type="submit" className="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
