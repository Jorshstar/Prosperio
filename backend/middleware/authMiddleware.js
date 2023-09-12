import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import User from '../models/productModels.js'

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Getting token from header
            token = req.headers.authorization.split(' ')[1];

            //verifying the token and decoding its payload
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Check if the token has an expiration time (exp claim)
            if (decoded.exp && Date.now() >= decoded.exp * 1000) {
            // Token has expired
                res.status(401);
                throw new Error('Token has expired');
             }

            //Getting user from the token
            req.user = await User.findById(decoded.id).select('-password')

            next();
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('Not Authorized')
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token')
    }

});

export default protect;