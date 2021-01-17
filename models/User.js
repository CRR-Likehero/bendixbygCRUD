const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name!']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email!'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password!'],
        minlength: 8
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", userSchema);