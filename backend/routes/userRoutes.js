import express from 'express';
const router = express.Router();
import { 
    deletePriofile,
    getMe,
    loginUser,
    logoutUser,
    registerUser,
    updatePriofile,
} from '../controllers/userController.js';

// User registration route
router.post('/', registerUser)

// User login route
router.post('/login', loginUser)

// User logout route
router.post('/logout', logoutUser)

// Get logged-in user's profile route
router.get('/me', getMe)

// Update user profile route
router.put('/me', updatePriofile)

// Delete user profile route
router.delete('/me', deletePriofile)



export default router;