const Restaurant = require('../models/Restaurant');
const Ngo = require('../models/Ngo')

exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        if (restaurants.length === 0) {
            return res.status(204).json({ message: 'No restaurants found yet' });
        }
        res.json(restaurants);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.addFood = async (req, res) => {
    const { restaurantName, location, foodItem, quantity , expirydate } = req.body;

    try {
        let restaurant = await Restaurant.findOne({ name: restaurantName });
        if (!restaurant) {
            restaurant = new Restaurant({
                name: restaurantName,
                location: location,
                foodItems: [{ item: foodItem, quantity : quantity, expiryDate: new Date(expirydate), quantity: 1 }],
            });
        } else {
            const existingFoodItem = restaurant.foodItems.find(item => item.item === foodItem);
            if (existingFoodItem) {
                existingFoodItem.quantity += quantity;
            } else {
                restaurant.foodItems.push({ item: foodItem, expiryDate: new Date(expirydate), quantity: quantity });
            }
        }

        await restaurant.save();
        res.status(200).json({ message: 'Food item added/updated successfully', restaurant });
    } catch (error) {
        console.error('Error adding food item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.donateFood = async (req, res) => {
    try {
        const restaurant = await Restaurant.findOne({ name: restaurantName });
        const ngo = await Ngo.findOne({ name: ngoName });

        if (!restaurant || !ngo) {
            return res.status(400).json({ message: 'All fields are mandatory' });
        }

        restaurant.foodItems.forEach(item => {
            item.quantity = 0;
        });

        // Save the updated restaurant and respond with success message
        console.log('food donated successfully')
        await restaurant.save();
        res.status(200).json({ message: 'Food donated successfully' });
    } catch (error) {
        console.error('Error donating food:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}