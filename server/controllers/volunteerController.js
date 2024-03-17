const Volunteer = require('../models/Volunteer');
const Ngo = require('../models/Ngo');

exports.registerVolunteer = async (req, res) => {
    const { name, contactNumber, role } = req.body;
    try {
        const existingVolunteer = await Volunteer.findOne({ contactNumber });

        if (existingVolunteer) {
            return res.status(400).json({ message: 'Volunteer with this contact number already exists' });
        }

        const newVolunteer = new Volunteer({
            name,
            contactNumber,
            role,
        });

        await newVolunteer.save();
        res.status(201).json({ message: 'Volunteer registered successfully', volunteer: newVolunteer });
    } catch (error) {
        console.error('Error registering volunteer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Controller function to handle volunteer acceptance/rejection of NGO request
exports.acceptRequestFromNgo = async (req, res) => {
    const { name, ngoName } = req.body;

    try {
        const volunteer = await Volunteer.findById(name);
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }

        const volunteer_working_for = await Volunteer.working_for;
        if (!volunteer_working_for){
            // will aceept their request
            Volunteer.working_for = ngoName
            await Volunteer.save()
            console.log('Volunteer : food is handed over to me');
        }
        else {
            console.log('Volunteer : Cannot accept request as already working with another NGO');
        }
        
        res.status(200).json({ message: 'Request updated', volunteer });
    } catch (error) {
        console.error('Error accepting/rejecting request from NGO:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.freeToWork = async (req, res) => {
    const name = req.body.name
    try {
        const volunteer = await Volunteer.findOne({ name : name})
        volunteer.working_for = ''
        Volunteer.save()
        console.log(`${volunteer.name} is now free to work`);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.getNgo = async (req, res) => {
    const volName = req.body.name
    try {
        const volunteer = await Volunteer.findOne({ name : volName})
        return res.status(201).json(volunteer.working_for)
    } catch (err){
        console.log(err);
    }
}