const { model } = require("mongoose")

const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    },
    comment: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
}, { timestamps: true })

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet;