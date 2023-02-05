const express = require('express')

const connet = require('./config/database');
const app = express()


const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./model/comment');

app.listen(3300, async () => {
    console.log('server started at port', 3300)
    await connet();
    console.log('MongoDB connected Successfully');
    const tweetRepository = new TweetRepository();
    const obj = {
        content: "Third tweet",
        userEmail: "arun@gmail.com"
    }
    const tweet=await tweetRepository.getWitComment('63de98ad58f4e9e1fe766a37')
    console.log(tweet); 
})


