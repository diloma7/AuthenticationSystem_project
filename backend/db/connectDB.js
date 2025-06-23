import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `You successfully connected to MongoDB: ${conn.connection.host}`
    );
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};
