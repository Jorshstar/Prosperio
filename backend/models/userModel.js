import mongoose from 'mongoose';
import validator from 'validator'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A user must have a First name'],
        
    },
    lastName: {
        type: String,
        required: [true, 'A user must have a Last name'],
        
    },
    userName: {
        type: String,
        required: [true, 'A user must have a username'],
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please add a phone number'],
        default: "+234"
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true,
        
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
    },
    confirmPassword: {
        type: String,
        required: [true, 'A user must have a password'],
    },
   
    
    bio: {
        type: String,
        maxLength: [250, "Bio must not be more than 250 characters"],
        default: "bio",
    },
    profilePicture: {
        type: String,
        trim: true
    }
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;