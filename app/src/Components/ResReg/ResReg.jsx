import React, { useState } from 'react';
import './ResReg.css'
function RestaurantForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    foodItems: [{ item: '', quantity: '', expiryDate: '' }],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedFoodItems = [...formData.foodItems];
    updatedFoodItems[index] = {
      ...updatedFoodItems[index],
      [name]: value,
    };

    setFormData({
      ...formData,
      foodItems: updatedFoodItems,
    });
  };

  const handleAddFoodItem = () => {
    setFormData({
      ...formData,
      foodItems: [...formData.foodItems, { item: '', quantity: '', expiryDate: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can also send this data to your backend for further processing
  };

  return (
    <div>
      <h2>Restaurant Details</h2>
      <form className="fo"onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
        <div>
          <h3>Food Items:</h3>
          {formData.foodItems.map((foodItem, index) => (
            <div key={index}>
              <label htmlFor={`item-${index}`}>Item:</label>
              <input
                type="text"
                id={`item-${index}`}
                name="item"
                value={foodItem.item}
                onChange={(e) => handleChange(e, index)}
                required
              />
              <label htmlFor={`quantity-${index}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${index}`}
                name="quantity"
                value={foodItem.quantity}
                onChange={(e) => handleChange(e, index)}
                required
              />
              <label htmlFor={`expiryDate-${index}`}>Expiry Date:</label>
              <input
                type="date"
                id={`expiryDate-${index}`}
                name="expiryDate"
                value={foodItem.expiryDate}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddFoodItem}>Add Food Item</button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RestaurantForm;
