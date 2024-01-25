import { asyncHandler } from "../utils/asyncHandler.js";

const createPlaylist = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
});

const getUserPlaylist = asyncHandler(async (req, res) => {
  const { userId } = req.params;
});

const getPlaylistById = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
});

const getVideoToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId, videoId } = req.params;
});

const removeVideFromPlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
});

const updatePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  const { name, description } = req.body;
});

export {
  createPlaylist,
  getUserPlaylist,
  getPlaylistById,
  getVideoToPlaylist,
  removeVideFromPlaylist,
  updatePlaylist,
};