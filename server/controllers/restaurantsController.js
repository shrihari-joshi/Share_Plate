const Restaurant = require('../models/Restaurant')

exports.getRestaurants = async (req, res) => {
    const hotels = await Restaurant.find()
    if (!hotels) {
        return res.status(204).json({ 'message' : 'No hotels found yet'})
    }
    res.json(hotels)
}


exports.addFood = async (req, res) => {
    const { restaurantName, foodItem, quantity } = req.body;

    try {
        const restaurant = await Restaurant.findOne({ name: restaurantName });

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        const existingFoodItem = restaurant.foodItems.find(item => item.item === foodItem);

        if (existingFoodItem) {
            existingFoodItem.quantity += quantity;
        } else {
            restaurant.foodItems.push({ item: foodItem, quantity });
        }
        await restaurant.save();

        res.status(200).json({ message: 'Food item added/updated successfully', restaurant });
    } catch (error) {
        console.error('Error adding food item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

