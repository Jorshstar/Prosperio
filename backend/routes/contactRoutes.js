import express from 'express';
import contactUs from '../controllers/contactController.js';


// Create an instance of the Express router
const router = express.Router();

// Define your route
router.post("/", contactUs);

// Export the router
export default router;