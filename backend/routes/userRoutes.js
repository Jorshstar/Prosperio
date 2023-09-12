import express from 'express';
const router = express.Router();
import { 
    deleteProfile,
    getMe,
    loginUser,
    logoutUser,
    registerUser,
    updateProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

// User registration route
router.post('/', registerUser)

// User login route
router.post('/login', loginUser)

// User logout route
router.get('/logout', logoutUser)

// Get logged-in user's profile route
router.get('/me', protect, getMe)

// Update user profile route
router.put('/me', updateProfile)

// Delete user profile route
router.delete('/me', deleteProfile)



export default router;