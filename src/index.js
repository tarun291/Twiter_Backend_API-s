import express from 'express'

import apiRoutes from './routes/index.js'

import { connect } from './config/database.js';
import bodyParser from 'body-parser';
import {UserRepository,TweetRepository} from './repository/index.js'
import LikeService from './service/like-service.js';
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(3700, async () => {
    console.log('server started at port', 3700)
    await connect();
    console.log('MongoDB connected Successfully');
    let userRepo=new UserRepository();
    let tweetRepo=new TweetRepository();
    const tweets=await tweetRepo.getAll(0,10);
    const user=await userRepo.getAll();
    const likeService=new LikeService();
    let flag=await likeService.toggleLike(tweets[0].id,'Tweet',user[0].id)
    console.log(flag);

})


