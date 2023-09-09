import asyncHandler from 'express-async-handler';


//@desc Register new user
//@route Post /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})



//@desc Authenticate a user
//@route POST /api/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})

//@desc Logout user profile
//@route POST /api/users/me
//@access public
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})

//@desc Get user Profile
//@route Get /api/users/me
//@access private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})

//@desc Update user profile
//@route PUT /api/users/me
//@access private
const updatePriofile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})

//@desc Delete user profile
//@route DELETE /api/users/me
//@access private
const deletePriofile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})

//@desc Upload profile picture
//@route Post /api/users/upload-profile-picture
//@access Private
const uploadPriofilePicture = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})


//@desc Delete profile picture
//@route DELETE /api/users/delete-profile-picture
//@access private
const deletePriofilePicture = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getMe,
    updatePriofile,
    deletePriofile,
    uploadPriofilePicture,
    deletePriofilePicture


};