const User = require("../models/users.js");

async function handleUserSignup(req, res) {
  const details = req.body;
  console.log(details);
  const id = id_genrate();
  await User.create({
    id: id,
    email: details.email,
    password: details.password,
    user_name: details.User_Name,
  });
  console.log("User Created");
  res.send({
    message: "User Signed up",
    redirectTo: "http://192.168.37.207:3000/login",
  });
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
    console.log("User Logged in");
    res.send({
      message: "User Logged in",
      redirectTo: "http://192.168.37.207:3000/",
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
