import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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
        trim: true
    },
    profilePicture: {
        type: String,
        trim: true
    }
});


// Encrypt password before saving to DB
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")){
        return next()
    }
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
})
const User = mongoose.model('User', userSchema);

export default User;