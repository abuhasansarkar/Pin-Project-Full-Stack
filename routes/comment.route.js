import express from "express";
import {
  getComments,
  getPinComments,
} from "../controller/comment.controller.js";

const router = express.Router();

router.get("/", getComments);

router.get("/:id", getPinComments);

export default router;
