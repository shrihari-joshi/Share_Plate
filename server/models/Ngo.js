const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  scale: {
    type: String,
    enum: ['Small', 'Medium', 'Large'],
    default: 'Medium',
  },
  isFoodAvailable : {
    type : Boolean,
    default : false
  },
  volunteer : {
    type : String
  }
});

const NGO = mongoose.model('NGO', ngoSchema);

module.exports = NGO;
