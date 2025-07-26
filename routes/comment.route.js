import express from "express";
import {
  addComment,
  getComments,
  getPinComments,
} from "../controller/comment.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getComments);

router.get("/:id", getPinComments);

router.post("/", verifyToken, addComment);

export default router;
