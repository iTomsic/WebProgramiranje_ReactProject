import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { connectDB } from "./config/db";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
