const mongoose = require('mongoose');

const coolingMSSchema = mongoose.Schema(
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

const CoolingStories = mongoose.model('CoolingStories', coolingMSSchema);
module.exports = CoolingStories;