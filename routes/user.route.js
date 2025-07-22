import express from "express";
import {
  allUser,
  createUser,
  deleteUser,
  getSingleUser,
  updateUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.get("/", allUser);
router.post("/create", createUser);
router.get("/:id", getSingleUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
