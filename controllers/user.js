const User = require("../models/users.js");
const Profile = require("../models/profiles.js");
const { createprofile } = require("./createprofile.js");

async function handleUserSignup(req, res) {
  const details = req.body;
  console.log(details);
  const id = id_genrate();
  const alreadyUser = await User.findOne({ email: details.email });
  if (alreadyUser) {
    console.log("User already exists");
    res.send({ message: "User already exists" });
    return;
  } else {
    await User.create({
      id: id,
      email: details.email,
      password: details.password,
      user_name: details.User_Name,
    }).then(() => createprofile(details));
    res.send({
      message: "User Signed up",
      redirectTo: "http://localhost:3000/login",
    });
  }
}

async function handleUserLogin(req, res) {
  const details = req.body;
  console.log(details);
  const user = await User.findOne({ email: details.email });
  console.log(user);
  console.log(
    `password stored: ${user.password}`,
    `Password by user: ${details.password}`
  );
  if (!user) {
    console.log("User not found");
    res.send({ message: "User not found" });
  } else if (user.password !== details.password) {
    console.log("Password not matched");
    res.send({ message: "Wrong Password" });
  } else {
    const profile = await Profile.findOne({ email: details.email });
    console.log(profile);
    console.log("User Logged in");
    res.send({
      message: "User Logged in",
      name: profile.name,
      coins: profile.coins,
      tasksDone: profile.tasksDone,
      redirectTo: "http://localhost:3000/home",
    });
  }
}

// id generator
function id_genrate() {
  var minm = 10000;
  var maxm = 99999;
  const id = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  console.log(id);
  return id;
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
