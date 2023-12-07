import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import https from 'https'
import http from 'http'
import fs from 'fs'
import { connect } from './config/database.js';

import { passportAuth } from './config/jwt-middleware.js';

import apiRoutes from './routes/index.js';


const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
passportAuth(passport);
app.use('/api', apiRoutes)
const httpsServer = https.createServer(options, app);
const httpServer = http.createServer(app);
// Start the server
httpsServer.listen(3700, async () => {
    console.log(`https Server is listening on port 3700`);
    await connect();
    console.log('Mongo db connected');
});

httpServer.listen(6000, async () => {
    console.log(`http Server is listening on port 6000`);
    await connect();
    console.log('Mongo db connected');
})
