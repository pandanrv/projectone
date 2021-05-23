const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        posterId: {
            type: String,
            require: true
        },
        message: {
            type: String,
            trim: true,
            maxlenght: 240
        },
        pictures: {
            type: String
        },
        video: {
            type: String
        },
        likers: {
            type: [String],
            require: true,
        },
        comments: {
            type: [
                {
                    commenterId: String,
                    commenterPseudo: String,
                    text: String,
                    timestamp: Number,
                }
            ],
            require: true
        },
    },
    {
        timestamp: true
    }
);

module.exports = mongoose.model('post', PostSchema)