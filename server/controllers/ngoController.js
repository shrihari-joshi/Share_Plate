const NGO = require('../models/Ngo');

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
    const { name, location, contactNum, scale, isFoodAvailable } = req.body;

    try {
        const existingNGO = await NGO.findOne({ name });
        if (existingNGO) {
            return res.status(400).json({ message: 'NGO with this name already exists' });
        }

        const newNGO = new NGO({
            name,
            location,
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

