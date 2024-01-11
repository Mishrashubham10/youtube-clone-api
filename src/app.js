import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes import
import userRoute from "./routes/user.routes.js";

const app = express();

// MIDDLEWARE TO HANDLE DATA
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

// routes declaration
app.use("/api/v1/users", userRoute);

export { app };