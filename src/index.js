const express = require('express')

const connet = require('./config/database');
const app = express()
const mongoose = require('mongoose');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./model/comment');
const Tweet = require('./model/tweet');


app.listen(3300, async () => {
    console.log('server started at port', 3300)
    await connet();
    console.log('MongoDB connected Successfully');
    const tweets=await Tweet.find({
        content:['New updated content','Third tweet','This is my favroute tweet']
    })
    console.log(tweets);
})


// jagzmz