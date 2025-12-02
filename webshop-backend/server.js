import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/ProductRoutes.js";

dotenv.config();
console.log("DEBUG MONGO_URI:", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Backend running" });
});

app.use("/products", productRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
