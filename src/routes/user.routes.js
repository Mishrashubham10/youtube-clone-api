import { Router } from "express";
import { login, registerUser } from "../contollers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// REGISTER ROUTE
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

// LOGIN ROUTE
router.route("/login").post(login);

export default router;