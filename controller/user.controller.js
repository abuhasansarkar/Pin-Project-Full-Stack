import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
export const registerUser = async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  const hashpassword = await bcrypt.hash(password, 10);

  await User.create({
    name,
    username,
    email,
    hashpassword,
  });

  // JWT Token verify
  const token = jwt.sign({ userId: User._id }, process.env.JWT_TOKEN, {
    expiresIn: "1h",
  });
  // Set JWT Token in Cookie
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 100,
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({ message: "User Created !" });
};

// SignIn or Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(401).send({ message: "Invalid User Mail" });
  }

  const isPasswordCurrect = bcrypt.compareSync(password, user.hashpassword);
  if (!isPasswordCurrect) {
    res.status(401).json({ message: "Invalid Password" });
  }

  // JWT Token verify
  const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN, {
    expiresIn: "1h",
  });
  // Set JWT Token in Cookie
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 100,
    secure: process.env.NODE_ENV === "production",
  });

  const { hashpassword, ...detailsWithOutPassword } = user.toObject();

  res.status(200).json(detailsWithOutPassword);
};

// Logout user
export const logoutUser = async (req, res) => {
  res.clearCookie("token");

  res.status(200).json({ message: "Logout Successfully" });
};

// // Get Sigle User
export const getSingleUser = async (req, res) => {
  const username = req.params.id;
  try {
    const user = await User.findOne({ username: username }).select(
      "-hashpassword"
    );
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
