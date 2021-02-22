const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema ({
    heading: {
        type: String,
        required: [true, 'Please provide a heading'],
        unique: true
    },

    content: {
        type: String,
        required: [true, 'Please provide some content']
    },
    imagecover: {
        type: String,
        required: [true, 'Please provide a coverimage']
    },
    date: {
        type: Date
    }
});

module.exports = mongoose.model('Article', articleSchema);