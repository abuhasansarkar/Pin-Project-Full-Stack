import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_TOKEN, (err, payload) => {
    if (err) {
      return res.status(401).json({ message: "Invalid Token" });
    }
    req.userId = payload.userId;
    next();
  });
};
