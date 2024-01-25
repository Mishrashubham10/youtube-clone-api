import { asyncHandler } from "../utils/asyncHandler.js";

// UPLOAD VIDEO
const getAllVideos = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
});

// UPDATE VIDEO
const publishAVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body
  // get video, upload to cloudinary, create video
});

// DELETE VIDEO
const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params
});

// UPLOAD VIDEO
const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;
  // update video details like title, description, thumbnai
});

// DELETE VIDEO
const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params;

  // delete video by id
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