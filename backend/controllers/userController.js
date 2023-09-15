import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'


//@desc Register new user
//@route Post /api/users
//@access Public

//Generate token for the user
const accessToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : "30d"
})
}
const registerUser = asyncHandler(async (req, res) => {
    //Extract user data from the request body
    const {firstName, lastName, userName, email, password} = req.body;

    console.log('Received request with body:', req.body)

    // Validate request
    if (!firstName || !lastName || !userName || !email || !password) {
        console.log('validation failed, please fill all fields')
        res.status(400)
        throw new Error('Please fill all fields')

    }
    console.log('Validation Successful')
    //Validate the length of the password
    if(password.length < 6) {
        res.status(400)
        throw new Error("Password must be up to 6 characters");    
    }
    //Check if user exists
    const userExists =await User.findOne({email})
    if(userExists) {
        res.status(400);
        throw new Error("Email has already been used")
    }
    // Create new user
    const user = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password    
    })
    // Generate Token
    const token = accessToken(user._id)
    if(user) {
        const {_id, userName, email} = user;
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),
            // secure: true,
            // samesite: none
        })
        // Send user data
        res.status(201).json({_id, userName, email, token})
    } else{
        res.status(400);
        throw new Error("Invalid user data");
    }
})

//@desc Authenticate a user
//@route POST /api/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    const { userNameOrEmail, password } = req.body;
    
    // Validate Request
    if(!userNameOrEmail || !password) {
        res.status(400);
        throw new Error("Please add email or username and password")    
    } 
    //check if user exist
    const user = await User.findOne({
        $or: [
            { userName: userNameOrEmail },
            { email: userNameOrEmail }
        ],
    });

    if(!user){
        res.status(400);
        throw new Error("Invalid Credentials");
}




// User exists, check if password is correct
//compare the password to the hashed password stored in the database
const passwordIsCorrect = await bcrypt.compare(password, user.password)
// Generate token to log the user in
const token = accessToken(user._id)
    if(user && passwordIsCorrect) {
        const newUser = await User.findOne({ email: user.email || userNameOrEmail}).select("-password")
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
    const user = await User.findById(req.user._id);

    if (user) {
        const { firstName, lastName, userName, 
            phoneNumber, bio, profilePicture } = user; 
        user.firstName = req.body.firstName || firstName;
        user.lastName = req.body.lastName || lastName;
        user.userName = req.body.userName || userName;
        user.phoneNumber = req.body.phoneNumber || phoneNumber;
        user.bio = req.body.bio || bio;
        

        const updatedProfile = await user.save()
        res.status(200).json(updatedProfile)
    } else {
        res.status(404);
        throw new Error("User not found")
    }
})

//@desc Delete user profile
//@route DELETE /api/users/me
//@access private
const deleteProfile = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const user = await User.findById(req.user._id);
    // If user is found
    if(user) {
         // Check if the authenticated user's ID matches the ID in the request
         if (String(userId) === String(user._id)) {
            // Delete the user's profile
            await user.remove();
            res.status(200).json({ message: "Profile deleted successfully" });
        } else {
            res.status(403); // Forbidden status code
            throw new Error("You are not authorized to delete this profile");
        }
    } else {
        res.status(404)
        throw new Error("User not found")
    }
})

//@desc Upload profile picture
//@route Post /api/users/upload-profile-picture
//@access Private
const uploadProfilePicture = asyncHandler(async (req, res) => {
    const { profilePicture } = req.body.profilePicture;
    const user = await User.findById(req.user._id);
    // Get only the profile from db
    user.profilePicture = profilePicture;
    const uploadedProfilePicture = await user.save()
    // send photo to the frontend
    res.status(200).json(uploadedProfilePicture);

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