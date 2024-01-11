import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/db.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 5000;

// DB CONNECTION
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is up runing at port : ${PORT}`));
  })
  .catch((err) => {
    console.log("MONGO db connection failed! ", err);
  });