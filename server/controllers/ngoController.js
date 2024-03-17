const NGO = require('../models/Ngo');
const Restaurant = require('../models/Restaurant');

// Controller function to get all NGOs
exports.getAllNGOs = async (req, res) => {
    try {
        const ngos = await NGO.find();
        if (ngos.length === 0) {
            return res.status(204).json({ message: 'No NGOs found yet' });
        }
        res.json(ngos);
    } catch (error) {
        console.error('Error fetching NGOs:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to register a new NGO
exports.registerNGO = async (req, res) => {
    const { name, contactNum, scale } = req.body;

    try {
        const existingNGO = await NGO.findOne({ name });
        if (existingNGO) {
            return res.status(400).json({ message: 'NGO with this name already exists' });
        }

        const newNGO = new NGO({
            name,
            contactNum,
            scale
        });

        await newNGO.save();
        res.status(201).json({ message: 'NGO registered successfully', ngo: newNGO });
    } catch (error) {
        console.error('Error registering NGO:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.giveRatings = async (req, res) => {
    try{
        const { restName, rating } = req.body
        const restaurant = await Restaurant.findOne({name : restName })
        if (!restaurant) {
            return res.status(400).json({ message : ''})
        }
        restaurant.rating.push_back(rating)
        await Restaurant.save()
        return res.status(201).json({ message : 'rating saved'})
    } catch(err) {
        console.log(err);
    }
}

exports.getRating = async (req, res) => {
    try {
        const name = req.body.name
        const restaurant = await Restaurant.findOne({name : restName})
        if (!restaurant) {
            return res.status(400).json({ message : ''})
        }
        let sum = 0
        restaurant.ratings.forEach((index) => {
            sum += restaurant.ratings[index]
        })
        const rating = sum / restaurant.ratings.length
        return res.status(201).json({ 'rating' : rating })
    }
    catch (err){
        console.log(err);
    }
}