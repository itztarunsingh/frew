const mongoose = require('mongoose');

// create structure
const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        // unique: true,
    },
    email: {
        type: String,
        required: true,
        // unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    user_name : {
        type: String,
        required: true,
    },

}, {timestamp: true});

const User = mongoose.model('user', userSchema);

module.exports = User;