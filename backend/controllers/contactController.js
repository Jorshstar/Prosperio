import Contact from '../models/contactModel.js';
import asyncHandler from 'express-async-handler'
import sendEmail from '../config/emailSender.js';


//@desc Contact Us
//@route POST /api/contacts/
//@access public
const contactUs = asyncHandler(async (req, res) => {
    res.send("Contact Us")
});


export default contactUs;