const User = require("../models/user");
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.getUser = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: `No user with id ${userId}` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const user = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidator: true,
    });
    if (!user) {
      return res.status(404).json({ msg: `No user with id ${userId}` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.deleteUsers = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ msg: `No user with id ${userId}` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
