import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Product.deleteMany();

  await Product.insertMany([
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "Classic American literature.",
      price: 19.99,
      image: "https://example.com/gatsby.jpg",
      category: "Novel",
      stock: 5,
    },
    {
      title: "1984",
      author: "George Orwell",
      description: "Dystopian novel.",
      price: 14.99,
      image: "https://example.com/gatsby.jpg",
      category: "Book",
      stock: 10,
    },
  ]);

  console.log("Seed completed");
  process.exit();
};

seed();
