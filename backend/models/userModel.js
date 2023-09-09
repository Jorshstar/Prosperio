const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'A user must have a name'],
        unique: true,
        trim: true
    },
    lastname: {
        type: String,
        required: [true, 'A user must have a name'],
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
    passwordConfirm: {
        type: String,
        required: [true, 'A user must have a password'],
        minlength: 8,
        trim: true
    },
    username: {
        type: String,
        required: [true, 'A user must have a username'],
        unique: true,
        trim: true
    },
    phone_number: {
        type: String,
        unique: true,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    photo: {
        type: String,
        trim: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;