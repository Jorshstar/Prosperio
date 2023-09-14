import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {

    try {
        // Get the token stored in the cookie 
        const token = req.cookies.token
        if(!token){
            res.status(401);
          throw new Error("Not authorized, please login");
        }
        // verify Token
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        // Get the user id from the token
        const user = await User.findById(verified.id).select("-password")
        // check if user exists
        if(!user){
            res.status(401);
            throw new Error("User not found"); 
        }
        req.user = user;
        next()
    } catch (error) {
        res.status(401);
        throw new Error("Not authorized, please login")
    }
})
export {
    protect
}