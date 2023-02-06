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
    
    // const tweet=await tweetRepository.getAll(0,4);
    // console.log(tweet[0]._id);
    // console.log(tweet[0].id)
    const tweet=await tweetRepository.create({content:'Tweet with hooks'});
    console.log(tweet)
})


// jagzmz