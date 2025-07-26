import express from "express";
import {
  allUser,
  registerUser,
  deleteUser,
  getSingleUser,
  loginUser,
  logoutUser,
  updateUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.get("/", allUser);
// Create or Register Account
router.post("/register", registerUser);
// Login or SignIn User
router.post("/login", loginUser);
// LogOut user
router.post("/logout", logoutUser);
// Get Single User
router.get("/:id", getSingleUser);
// Update User Information
router.patch("/:id", updateUser);
// Delete User
router.delete("/:id", deleteUser);

export default router;
