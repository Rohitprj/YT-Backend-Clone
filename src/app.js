import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Router imports
import userRoutes from "./routes/user.routes.js";

// Routes
app.use("/api/v1/users", userRoutes);

app.use("/", (req, res) => {
  res.send({
    success: true,
    message: "Server is running",
  });
});

export { app };
