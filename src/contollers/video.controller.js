import { asyncHandler } from "../utils/asyncHandler.js";
import { Video } from "../models/Video.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// UPLOAD VIDEO
const getAllVideos = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query;

  // Get all videos from db
  const videos = await Video.find();

  if (!videos) {
    throw new ApiError(404, "No videos found!");
  }

  res.status(200).json(new ApiResponse(200, videos));
});

// UPDATE VIDEO
const publishAVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "All fields are required");
  }

  // get video, upload to cloudinary, create video
  const videoPath = req.files?.video[0]?.path;

  if (!videoPath) {
    throw new ApiError(400, "Video file required");
  }

  const video = await uploadOnCloudinary(videoPath);

  if (!video) {
    throw new ApiError(400, "Video file required");
  }

  // Create and save into db
  const createVideo = await Video.create({
    title,
    description,
    video: video?.url,
  });

  res.status(200).json(200, createVideo, "Video created successfully");
});

// DELETE VIDEO
const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!videoId) {
    throw new ApiError(400, "Id is required");
  }

  // get video by id
  const video = await Video.findById({ videoId });

  if (!video) {
    throw new ApiError(400, "Video not found");
  }

  res.status(200).json(new ApiResponse(200, video));
});

// UPLOAD VIDEO
const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!videoId) {
    throw new ApiError(400, "Id is required");
  }

  // update video details like title, description, thumbnai
  const video = await Video.findByIdAndUpdate({ videoId }, { new: true });
});

// DELETE VIDEO
const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  if (!videoId) {
    throw new ApiError(400, "Id is required");
  }

  // delete video by id
  const video = await Video.findByIdAndDelete({ videoId }, { new: true });

  if (!video) {
    throw new ApiError(404, "Video is required");
  }

  res.status(200).json(new ApiResponse(200, "Video deleted successfully"));
});

//
const togglePublishStatus = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
});

export {
  getAllVideos,
  publishAVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublishStatus,
};