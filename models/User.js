const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    givenName: String,
    familyName: String,
    type: Number,
    picture: String,
    credits: {
        default: 0
    }
});

mongoose.model('users', userSchema);