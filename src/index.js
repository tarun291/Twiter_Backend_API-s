import express from 'express'
import { connet } from './config/database.js';
const app = express()
// const { PORT } = require('./config/serverConfig')

import TweetService from './service/tweet-service.js';

app.listen(3700, async () => {
    console.log('server started at port', 3700)
    await connet();
    console.log('MongoDB connected Successfully');
    const service = new TweetService();
    const obj={
        content:'Capital #JBHEFO '
    }
    const response=await service.create(obj);
    console.log('response=',response);
})


