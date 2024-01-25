import { asyncHandler } from "../utils/asyncHandler.js";

// Get Comments
const getVideoComments = asyncHandler(async (req, res) => {
    // GET ALL COMMENTS FOR A VIDEO
    const { videoId } = req.params;
    const { page = 1, limit = 10 } = req.query;
});

// Add Comment
const addComment = asyncHandler(async (req, res) => {});

// Update Comment
const updateComment = asyncHandler(async (req, res) => {});

// Delete Comment
const deleteComment = asyncHandler(async (req, res) => {});

export { getVideoComments, addComment, updateComment, deleteComment };