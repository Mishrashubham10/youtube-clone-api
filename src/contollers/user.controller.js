import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({ msg: 'ok' })
})

const login = asyncHandler( async (req, res) => {
    res.status(201).json({ msg: 'login' })
})

const getUser = asyncHandler( async (req, res) => {})
const updateUser = asyncHandler( async (req, res) => {})
const deleteUser = asyncHandler( async (req, res) => {})

export { registerUser, login }