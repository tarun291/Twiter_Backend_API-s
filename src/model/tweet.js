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
tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \ncreated by ${this.userEmail}`;
})

tweetSchema.pre('save',function(next){
    console.log('Inside the hook')
    this.content=this.content+'...';
    next();
})

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet;