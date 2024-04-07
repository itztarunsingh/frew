const mongoose = require('mongoose');

// create structure
const profileSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    user_name : {
        type: String,
        required: true,
    },
    coins : {
        type: Number,
    },
    posts : {
        type: Array,
    },
    tasksDone : {
        type: Number,
    }

}, {timestamp: true});

const Profile = mongoose.model('profiles', profileSchema);

module.exports = Profile;