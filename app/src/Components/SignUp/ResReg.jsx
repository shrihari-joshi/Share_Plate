import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    quantity: '',
    expiry:'',

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
    console.log(formData); // Debug statement to check the formData object

    // Store name and location in local storage
    localStorage.setItem('name', formData.name);
    localStorage.setItem('location', formData.location);

    // Optional: Clear form fields after submission
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: '',
      contactNumber: '',
      location: '',
    }));
  };

  return (
    <div>
      <h2>Community</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="contactNumber">Expiry Date:</label>
          <input
            type="date"
            id="expiry"
            name="expiry"
            value={formData.expiry}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
