const User = require("../models/userModel");
const mongoose = require("mongoose");
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// create user
exports.createUser = async (req, res, next) => {
  try {
    if (/^[a-zA-Z]+$/.test(req.body.name)) {
      const user = await User.create(req.body);
      return res.status(201).json(user);
    }
    res.status(400).json({ message: "Enter a valid input" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
// get user
exports.getUser = async (req, res, next) => {
  const { user_id } = req.params;
  try {
    if (mongoose.Types.ObjectId.isValid(user_id)) {
      const userById = await User.findById(user_id);
      if (!userById) {
        return res.status(404).json({ msg: `No user with id ${user_id}` });
      }
      res.status(200).json(userById);
    } else {
      const userByName = await User.findOne({ name: user_id });
      if (!userByName) {
        return res.status(404).json({ msg: `No user with name ${user_id}` });
      }
      res.status(200).json(userByName);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.updateUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const name_regex = /^[a-zA-Z]+$/;
    if (!name_regex.test(name))
      return res.status(400).json({
        message:
          "Enter a valid value for name(name should not contain any other character that is not an alphabet)",
      });

    const userId = req.params.user_id;
    const user_id_regex = /[0-9]/;

    if (user_id_regex.test(userId)) {
      // console.log("user id contains number so checking with id and updating");
      const user = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
        runValidator: true,
      });
      if (!user) {
        return res.status(404).json({ msg: `No user with id ${userId}` });
      }
      return res.status(200).json(user);
    } else {
      //find by name and update
      const user = await User.findOneAndUpdate({ name: userId }, req.body, {
        new: true,
        runValidator: true,
      });
      if (!user) {
        return res.status(404).json({ msg: `No user with name ${userId}` });
      }
      return res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
exports.deleteUsers = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    if (mongoose.Types.ObjectId.isValid(user_id)) {
      const userById = await User.findByIdAndDelete(user_id);
      if (!userById) {
        return res.status(404).json({ msg: `No user with id ${user_id}` });
      }
      res.status(200).json(userById);
    } else {
      const userByName = await User.findOneAndDelete({ name: user_id });
      if (!userByName) {
        return res.status(404).json({ msg: `No user with name ${user_id}` });
      }
      res.status(200).json(userByName);
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
