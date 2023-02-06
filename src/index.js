const express = require('express')

const connet = require('./config/database');
const app = express()
const {PORT}=require('./config/serverConfig')
const mongoose = require('mongoose');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./model/comment');
const Tweet = require('./model/tweet');


app.listen(PORT, async () => {
    console.log('server started at port', PORT)
    await connet();
    console.log('MongoDB connected Successfully');
    const tweets=await Tweet.find({
        content:['New updated content','Third tweet','This is my favroute tweet']
    })
    console.log(tweets);
})


// jagzmz