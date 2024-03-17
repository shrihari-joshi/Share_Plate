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
    try {
        const name = req.body.name
        const volunteer = await Volunteer.findOne({ name : name})
        volunteer.working_for = ''
        Volunteer.save()
        console.log(`${volunteer.name} is now free to work`);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.getNgos