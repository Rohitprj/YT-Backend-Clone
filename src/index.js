import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;
console.log(`server is running on ${PORT}`);

connectDB();
