import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8000;
// console.log(`server is running on http://localhost:${PORT}`);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

connectDB();
