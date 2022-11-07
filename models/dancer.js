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
    description: {
        type: String,
        required: true
    },
    strYoutube: {
        type: String,
        required: 'URL can\'t be empty',
        unique: true
    },
    registeredDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

dancerSchema.path('strYoutube').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL');


module.exports = mongoose.model('dancer', dancerSchema);