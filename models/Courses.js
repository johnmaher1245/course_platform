const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    name: String,
    picture: String,
    author: String,
    authorPicture: String,
    time: String,
});

mongoose.model('courses', courseSchema);