import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // const connectionInstance = await mongoose.connect(
    //   "mongodb+srv://New_Demo_User:VXrC2WGyxTwyU2sT@cluster0.shqzn.mongodb.net/videotube?retryWrites=true&w=majority&appName=Cluster0"
    // );
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("MongoDB connected", connectionInstance.connection.host);
  } catch (error) {
    console.log("Error while connecting :", error);
    process.exit(1);
  }
};

export default connectDB;

// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//   try {
//     // Ensure the URI is properly prefixed
//     const mongoURI = `${process.env.MONGODB_URI}`;
//     const connectionInstance = await mongoose.connect(
//       "mongodb+srv://New_Demo_User:VXrC2WGyxTwyU2sT@cluster0.shqzn.mongodb.net/videotube"
//     );

//     console.log("MongoDB connected", connectionInstance.connection.host);
//   } catch (error) {
//     console.log("Error while connecting:", error);
//     process.exit(1); // Exit the process if MongoDB connection fails
//   }
// };

// export default connectDB;
