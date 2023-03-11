import mongoose from "mongoose"

const connect = async () => {

  const connectionParams:any  = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  const URI = String(process.env.MONGODB_URI)

  try {
    await mongoose.connect(URI!, connectionParams);
    console.log("MongoDB connected successfully");
    console.log("Connection state: ", mongoose.connection.readyState);
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

export default connect