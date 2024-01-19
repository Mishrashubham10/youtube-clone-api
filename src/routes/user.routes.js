import { Router } from "express";
import { login, logoutUser, refreshAccessToken, registerUser } from "../contollers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

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
router.route("/login").post(login)

// LOGOUT ROUTE
router.route("/logout").post(verifyJWT ,logoutUser);

// REFRESH
router.route("/refresh-token").post(refreshAccessToken);

export default router;