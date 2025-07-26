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
