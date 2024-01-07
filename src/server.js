import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/db.js";
import express from "express";
const app = express();

const PORT = process.env.PORT || 5000;

// DB CONNECTION
connectDB();

app.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
});

// import express from "express";

// const app = express();

// // DB CONNECTION
// const connectDB = async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.log("ERRR: ", err);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is listening on port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     throw err;
//   }
// };
