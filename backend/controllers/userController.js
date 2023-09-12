import asyncHandler from 'express-async-handler';


//@desc Register new user
//@route Post /api/users
//@access Public

//Generate token for the user
const accessToken = (id) => {
return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn : "1d"
})
}
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Register User'})
})



//@desc Authenticate a user
//@route POST /api/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
const { email, userName, password} = req.body;
const usernameOrEmail = email || userName;

// Validate Request
if(!usernameOrEmail || !password) {
    res.status(400);
    throw new Error("Please add email or username and password")    
} 
// check if user exists
const user = await User.findOne({usernameOrEmail})
if(!user){
    res.status(400);
    throw new Error("User does not exist");
}

// User exists, check if password is correct
const passwordIsCorrect = await bcrypt.compare(password, user.password)
// Generate token to log the user in
const token = generateToken(user._id)
    if(user && passwordIsCorrect) {
        const newUser = await User.findOne({ email }).select("-password")
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400), 
            // secure: true,
            // samesite: none, 
        })
        // Send user data
        res.status(201).json(newUser)
    } else {
        res.status(400);
        throw new Error("Invalid username and password")    
    }

})

//@desc Logout user profile
//@route POST /api/users/me
//@access public
const logoutUser = asyncHandler(async (req, res) => {
  // To logout the user  you need to end the token used while logging in
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        // secure: true,
        // samesite: none,
    })
    return res.status(200).json({message: "Successfully logged out!"})
})

//@desc Get user Profile
//@route Get /api/users/me
//@access private
const getMe = asyncHandler(async (req, res) => {
    // Get the user from the req.user
    const user = await User.findById(req.user._id).select(-password);
    if (user){ // send user to the frontend
        res.status(200).json(user);
    } else {
        res.status(401);
        throw new Error("User Not Found");
    }
   
})

//@desc Update user profile
//@route PUT /api/users/me
//@access private
const updateProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Update User Profile'})
})

//@desc Delete user profile
//@route DELETE /api/users/me
//@access private
const deleteProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Delete User Profile'})
})

//@desc Upload profile picture
//@route Post /api/users/upload-profile-picture
//@access Private
const uploadProfilePicture = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Upload Profile Picture'})
})


//@desc Delete profile picture
//@route DELETE /api/users/delete-profile-picture
//@access private
const deleteProfilePicture = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Delete Profile Picture'})
})

export {
    registerUser,
    loginUser,
    logoutUser,
    getMe,
    updateProfile,
    deleteProfile,
    uploadProfilePicture,
    deleteProfilePicture


};