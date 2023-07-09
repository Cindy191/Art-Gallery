const mongoose = require('mongoose');

const ghibliStorySchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true
        },

        title: {
            type: String,
            required: true
        },

        body: {
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

const GhibliStories = mongoose.model('GhibliStories', ghibliStorySchema)
module.exports = GhibliStories;