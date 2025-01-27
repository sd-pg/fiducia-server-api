import express from "express";
import cors from "cors";
import connectDB from "./config/db";

const startServer = async () => {
  try {
    await connectDB(); // Подключение к MongoDB
    console.log("Database connected successfully");

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.listen(5005, () => console.log("🚀 Server running on port 5000"));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
