import jwt from "jsonwebtoken";
import Comment from "../models/comment.model.js";

export const getComments = async (req, res) => {
  const comments = await Comment.find().populate(
    "user",
    "_id name username profilePicture"
  );

  res.status(200).json(comments);
};

// Get Data useing Pin Post ID
export const getPinComments = async (req, res) => {
  const { id } = req.params;
  const comments = await Comment.find({ pin: id })
    .populate("user", "name username profilePicture")
    .sort({
      createdAt: -1,
    });

  res.status(200).json(comments);
};

export const addComment = async (req, res) => {
  const { pin, description } = req.body;
  const userId = req.userId;

  try {
    const comment = await Comment.create({
      user: userId,
      pin,
      description,
    });

    // await comment.populate("user", "name username profilePicture");

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Failed to create comment" });
  }
};
