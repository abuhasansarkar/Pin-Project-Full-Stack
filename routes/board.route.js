import express from "express";
import { getAllBoards, getBoard } from "../controller/board.controller.js";

const router = express.Router();

router.get("/", getAllBoards);
router.get("/:id", getBoard);

export default router;
