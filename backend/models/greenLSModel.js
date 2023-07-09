const mongoose = require('mongoose');

const gLStorySchema = mongoose.Schema(
    {
        user:{
            type: String,
            required: true
        },

        title:{
            type: String,
            required: true
        },

        body:{
            type: String,
            required: true
        },

        likes:{
            type: Number,
            default: 0,
            required: true
        }
    },

    {
        timestamps: true
    }
)

const GLStories = mongoose.model('GLStories', gLStorySchema)
module.exports = GLStories;