const Profile = require("../models/profiles.js");
const mongoose = require('mongoose');

function createprofile(details) {
  Profile.create({
    email: details.email,
    password: details.password,
    user_name: details.User_Name,
    coins: 100,
    posts: [],
    tasksDone: 0,
  }).then(() => console.log("Profile Created"))
  .catch((error) => console.error(error));
}
exports.createprofile = createprofile;
