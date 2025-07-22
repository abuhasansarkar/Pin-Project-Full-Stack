import express from "express";
import {
  createPin,
  getAllPins,
  getSinglePin,
} from "../controller/pin.controller.js";

const router = express.Router();

router.post("/create", createPin);
router.get("/", getAllPins);
router.get("/:id", getSinglePin);

export default router;
