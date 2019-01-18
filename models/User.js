const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    givenName: String,
    familyName: String,
    picture: String,
    activeSubscription: {
        default: 0,
        type: Number
    }
});

mongoose.model('users', userSchema);