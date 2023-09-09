const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'A user must have a name'],
        unique: true
    },
    lastname: {
        type: String,
        required: [true, 'A user must have a name'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email'] 
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
        minlength: 8
    },
    passwordConfirm: {
        type: String,
        required: [true, 'A user must have a password'],
        minlength: 8
    },
    username: {
        type: String,
        required: [true, 'A user must have a username'],
        unique: true
    },
    phone_number: {
        type: String,
        unique: true
    },
    bio: {
        type: String
    },
    photo: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;