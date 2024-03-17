const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    domain : {
        type : String,
        enum : ['sorting', 'packing', 'distributing'],
        default : 'distributing'
    },
    working_for : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Ngo'
    }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
