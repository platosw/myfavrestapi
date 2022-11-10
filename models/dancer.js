const mongoose = require('mongoose');

const dancerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    crew: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    strYoutube: {
        type: String,
        required: true 
    },
    registeredDate: {
        type: Date,
        required: false,
        default: Date.now
    }
});



module.exports = mongoose.model('Dancer', dancerSchema);