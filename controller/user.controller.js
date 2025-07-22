import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// Get All Users
export const allUser = async (req, res) => {
  try {
    const users = await User.find().select("-hashpassword");
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Create New User
export const createUser = async (req, res) => {
  console.log(req.body);

  const password = await bcrypt.hash(req.body.hashpassword, 12);

  await User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    hashpassword: password,
  });

  res.json("User Created !");
};

// Get Sigle User
export const getSingleUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findById({ _id: userId }).select("-hashpassword");
    res.json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Error fetching users" });
  }
};

// Update User
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const updateUser = await User.updateOne({ _id: userId }, req.body);
    res.json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const deleteUser = await User.deleteOne({ _id: userId });
    res.json(deleteUser, "User Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};
