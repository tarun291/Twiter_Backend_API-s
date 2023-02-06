const { model } = require("mongoose")

const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet can not be more than 250 character']
    },
    hashtag:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'HashTag'
        }
    ]
}, { timestamps: true })

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet;