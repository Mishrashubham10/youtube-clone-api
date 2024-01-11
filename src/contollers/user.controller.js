import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// REGISTER USER
const registerUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  const { username, email, fullname, password } = req.body;
  console.log("username, email : ", username, email);

  // validation - not empty
  if (
    [fullname, email, password, username].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // check if user exists : username, email
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with username or email already exists");
  }

  // check for images, check for avatar
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  // upload them to cloudinary: avatar, cover
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new Error(400, "Avatar file is required");
  }

  // create user object - create entry in db
  const user = await User.create({
    username: username.toLowerCase(),
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    password,
    email,
  });

  // remove password and refresh token field from res
  // check for user creation
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  // return res
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

const login = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "login" });
});

export { registerUser, login };