const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'You must enter a name'],
        minlength: [1, 'Name must be between 1 and 99 characters'],
        maxlength: [99, 'Name must be between 1 and 99 characters']
    },
    password: {
        type: String,
        required: [true, 'You must enter a password'],
        minlength: [8, 'must be at least 8 charecters'],
        maxlength: [128, 'password must be under 128 characters']
    },
    email: {
        type: String,
        required: [true, 'You must enter a password'],
        minlength: [8, 'must be at least 8 charecters'],
        maxlength: [128, 'password must be under 128 characters']
    }
})