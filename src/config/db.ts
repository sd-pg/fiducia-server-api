import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const { MONGODB_HOST, MONGODB_PORT, MONGODB_NAME, MONGODB_USER, MONGODB_PSWD } = process.env;

const mongoURI = `${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      user: MONGODB_USER,
      pass: MONGODB_PSWD,
      authSource: "admin", // Используется, если требуется аутентификация
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as mongoose.ConnectOptions);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
