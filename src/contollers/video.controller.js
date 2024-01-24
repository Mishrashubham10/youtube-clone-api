import { asyncHandler } from "../utils/asyncHandler.js";

// UPLOAD VIDEO
const getAllVideos = asyncHandler(async (req, res) => {});

// UPDATE VIDEO
const publishAVideo = asyncHandler(async (req, res) => {});

// DELETE VIDEO
const getVideoById = asyncHandler(async (req, res) => {});

// UPLOAD VIDEO
const updateVideo = asyncHandler(async (req, res) => {});

// DELETE VIDEO
const deleteVideo = asyncHandler(async (req, res) => {});

//
const togglePublishStatus = asyncHandler(async (req, res) => {});
export {
  getAllVideos,
  publishAVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublishStatus,
};