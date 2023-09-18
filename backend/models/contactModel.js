import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    Subject: {
        type: String,
        default: "subject"
    },
    message: {
        type: String,
        maxLength: [250, "Message must not be more than 250 characters"],
        default: "message",
    }
})



const Contact = mongoose.model('Contact', contactSchema);

export default Contact;