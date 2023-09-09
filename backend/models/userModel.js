import mongoose from 'mongoose';
import validator from 'validator'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A user must have a First name'],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'A user must have a Last name'],
        trim: true
    },
    userName: {
        type: String,
        required: [true, 'A user must have a username'],
        unique: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
        minlength: 8,
        trim: true
    },
    confirmPassword: {
        type: String,
        required: [true, 'A user must have a password'],
        minlength: 8,
        trim: true
    },
   
    
    bio: {
        type: String,
        trim: true
    },
    profilePicture: {
        type: String,
        trim: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;