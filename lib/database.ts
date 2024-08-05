import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true)
  const uri = process.env.MONGODB_URI;

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(uri || "")

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err)
  }
}