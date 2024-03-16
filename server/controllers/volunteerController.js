const Volunteer = require('../models/Volunteer');
const Ngo = require('../models/Ngo');

exports.sendRequestToVolunteer = async (req, res) => {
    const { name , ngoName } = req.body;

    try {
        const volunteer = await Volunteer.findById(name);
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }

        const ngo = await Ngo.findOne({ name: ngoName });
        if (!ngo) {
            return res.status(404).json({ message: 'NGO not found' });
        }

        // Check if the volunteer is already working for this NGO
        if (volunteer.working_for.includes(ngo._id)) {
            return res.status(400).json({ message: 'Volunteer is already working for this NGO' });
        }

        // Append the NGO to the volunteer's working_for array
        volunteer.working_for.push(ngo._id);
        await volunteer.save();

        res.status(200).json({ message: 'Request sent and volunteer updated', volunteer });
    } catch (error) {
        console.error('Error sending request to volunteer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to handle volunteer acceptance/rejection of NGO request
exports.acceptRequestFromNgo = async (req, res) => {
    const { name, ngoName, accept } = req.body;

    try {
        const volunteer = await Volunteer.findById(name);
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }

        const index = volunteer.working_for.indexOf(ngoName);
        if (index === -1) {
            return res.status(400).json({ message: 'Volunteer is not working for this NGO' });
        }

        if (accept) {
            if (volunteer.working_for.includes(ngoName)) {
                return res.status(400).json({ message: 'Volunteer is already working for this NGO' });
            }
            // Update volunteer's working_for to include the NGO name
            volunteer.working_for.push(ngoName);
            await volunteer.save();
        } else {
            volunteer.working_for = '';
            await volunteer.save();
        }

        res.status(200).json({ message: 'Request updated', volunteer });
    } catch (error) {
        console.error('Error accepting/rejecting request from NGO:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
