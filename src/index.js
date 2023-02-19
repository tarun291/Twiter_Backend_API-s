const express = require('express')

const connet = require('./config/database');
const app = express()
const { PORT } = require('./config/serverConfig')
app.listen(PORT, async () => {
    console.log('server started at port', PORT)
    await connet();
    console.log('MongoDB connected Successfully');
    let service = new TweetService();
    const tweet = await service.create({ 
        content: 'This is after #working really #exited, it is going to be #fun' 
    });
})


