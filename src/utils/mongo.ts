import mongoose from "mongoose"

const connect = async () => {
  try {
    await mongoose.connect(String(process.env.MONGODB_URI)!);
    console.log("MongoDB connected successfully");
    console.log("Connection state: ", mongoose.connection.readyState);
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

export default connect