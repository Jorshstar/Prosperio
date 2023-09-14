import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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
        required: [false, 'Please add a phone number'],
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
        required: [false, 'A user must have a password'],
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