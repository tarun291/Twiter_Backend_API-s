import express from 'express'

import { createTweet } from '../../controllers/tweet-controller.js'
import { toggleLike } from '../../controllers/like-controller.js'
const router = express.Router();

router.post('/tweet', createTweet);

router.post('/likes/toggle', toggleLike)

export default router;