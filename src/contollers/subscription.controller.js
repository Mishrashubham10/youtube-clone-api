import { asyncHandler } from "../utils/asyncHandler.js";

const toggleSubscription = asyncHandler(async(req, res) => {})

const getUserChannelSubscibers = asyncHandler(async(req, res) => {})

const getSubscribedChannels = asyncHandler(async(req, res) => {})

export {
    toggleSubscription,
    getUserChannelSubscibers,
    getSubscribedChannels
}