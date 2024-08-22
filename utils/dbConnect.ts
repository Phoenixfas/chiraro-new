import mongoose from "mongoose";

const uri = process.env.MONGODB_URI || "";

const dbConnect = async () => {
  try {
    await mongoose.connect(uri);
    console.log(
      `MongoDB Connected: ${mongoose.connection.host}`
    );
    return true;
  } catch (e: any) {
    throw new Error(`Error connecting to database: ${e.message}`);
  }
};

export default dbConnect;
