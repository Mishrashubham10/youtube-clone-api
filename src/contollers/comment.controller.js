import { asyncHandler } from "../utils/asyncHandler.js";
import { Video } from "../models/Video.js";
import { Comment } from "../models/Comment.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/User.js";

// Get Comments
const getVideoComments = asyncHandler(async (req, res) => {
  // GET ALL COMMENTS FOR A VIDEO
  const { videoId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  const video = await Video.findById(videoId);
  const comments = await Comment.find();

  if (!comments) {
    throw new ApiError(404, "No comments found");
  }

  res.status(200).json(new ApiResponse(200, comments));
});

// Add Comment
const addComment = asyncHandler(async (req, res) => {
    const { content } = req.params

    if (!content) {
        throw new ApiError(400, "All fields are required");
    }

    const user = await User.findById(req.user._id);

    if (!user) {
        throw new ApiError(400, "No such user");
    }

    const comment = await Comment.create({
        content,
    });

    res.status(200).json(
        new ApiResponse(200, comment, "Comment created successfully")
    )
});

// Update Comment
const updateComment = asyncHandler(async (req, res) => {});

// Delete Comment
const deleteComment = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (!id) {
        throw new ApiError(400, "Id required")
    }

    const comment = await Comment.findByIdAndDelete(id, { new: true });

    res.status(200).json(
        new ApiResponse(200, comment, "Comment deleted successfully")
    )
});

export { getVideoComments, addComment, updateComment, deleteComment };