import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  getUserChannelProfile,
  getWatchHistory,
  login,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccDetails,
  updateUserAvatar,
  updateUserCoverImage,
} from "../contollers/user.controller.js";
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
router.route("/login").post(login);
// LOGOUT ROUTE
router.route("/logout").post(verifyJWT, logoutUser);
// REFRESH
router.route("/refresh-token").post(refreshAccessToken);
// FORGET PASSWORD
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
// CURRENT USER
router.route("/current-user").get(verifyJWT, getCurrentUser);
// UPDATE DETAILS
router.route("/update-account").patch(verifyJWT, updateAccDetails);
// AVATAR UPDATE
router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
// UPDATE COVERIMAGE
router
  .route("/cover-image")
  .patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);
// GET PROFILE
router.route("/c/:username").get(verifyJWT, getUserChannelProfile);
// WATCH HISTORY
router.route("/history").get(verifyJWT, getWatchHistory);

export default router;