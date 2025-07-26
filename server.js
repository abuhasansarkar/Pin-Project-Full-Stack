import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
import userRoutes from "./routes/user.route.js";
import boardRoutes from "./routes/board.route.js";
import commentRoutes from "./routes/comment.route.js";
import pinRoutes from "./routes/pin.route.js";
import connectDB from "./utils/connectDB.js";

const port = process.env.PORT || 8080;

// Middleware to parse JSON bodies

app.use(express.json());
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cookieParser());

// User routes
app.use("/api/users", userRoutes);
// Board routes
app.use("/api/boards", boardRoutes);
// Comment routes
app.use("/api/comments", commentRoutes);
// Pin routes
app.use("/api/pins", pinRoutes);

//Root Endpoint
app.get("/", (req, res) => {
  res.send("Pin Project Api is running");
});

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
