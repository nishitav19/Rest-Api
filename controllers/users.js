const User = require("../model/user");

module.exports.getUser = async (req, res) => {
  const getUsers = User.find().sort({ createdAt: -1 });
  try {
    const result = await getUsers;
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports.getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await User.findById(id);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findByIdAndDelete(id);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;

    const saveUser = new User(user);
    let result = await saveUser.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports.postUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    let result = await newUser.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
