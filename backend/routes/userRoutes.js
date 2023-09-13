import express from 'express';
const router = express.Router();
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

// User registration route
router.post('/', registerUser)

// User login route
router.post('/login', loginUser)

// User logout route
router.get('/logout', logoutUser)

// Get logged-in user's profile route
router.get('/getMe', protect, getMe)

// Update user profile route
router.patch('/updateProfile', protect, updateProfile)

// Delete user profile route
router.delete('/deleteProfile', protect, deleteProfile)

// Update user profile photo
router.put('/uploadProfilePicture', protect,  uploadProfilePicture)




export default router;