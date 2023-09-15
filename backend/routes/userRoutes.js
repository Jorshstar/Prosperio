import express from 'express';

import { 
    deleteProfile,
    getMe,
    loginUser,
    logoutUser,
    registerUser,
    updateProfile,
    uploadProfilePicture
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateUserFields } from '../middleware/userValidator.js';

const router = express.Router();

// User registration route
router.post('/', validateUserFields, registerUser)

// User login route
router.post('/login', loginUser)

// User logout route
router.post('/logout', logoutUser)

// Get logged-in user's profile route
router.get('/me', protect, getMe)

// Update user profile route
router.patch('/updateProfile', protect, updateProfile)

// Delete user profile route
router.delete('/deleteProfile', protect, deleteProfile)

// Update user profile photo
router.put('/uploadProfilePicture', protect,  uploadProfilePicture)




export default router;