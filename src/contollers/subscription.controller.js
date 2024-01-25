import { asyncHandler } from "../utils/asyncHandler.js";

const toggleSubscription = asyncHandler(async (req, res) => {
  const { channelId } = req.params;
});

const getUserChannelSubscibers = asyncHandler(async (req, res) => {
  const { channelId } = req.params;
});

const getSubscribedChannels = asyncHandler(async (req, res) => {
  const { subscriberId } = req.params;
});

export { toggleSubscription, getUserChannelSubscibers, getSubscribedChannels };