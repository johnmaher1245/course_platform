const mongoose = require('mongoose');
const { Schema } = mongoose;

const lessonSchema = new Schema({
    courseId: String,
    name: String,
    video: String,
    videoThumbnail: String,
    lessonNumber: String,
    worksheet: String,
    description: String
});

mongoose.model('lessons', lessonSchema);