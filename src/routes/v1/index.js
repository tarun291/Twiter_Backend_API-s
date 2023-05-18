import express from 'express'

import { createTweet, getTweet } from '../../controllers/tweet-controller.js'
import { toggleLike } from '../../controllers/like-controller.js'
import { createComment } from '../../controllers/comment-controller.js'
import { signup, login } from '../../controllers/auth-controller.js'
import { validateUserAuth } from '../../middleware/auth-request-validators.js'
const router = express.Router();

router.post('/tweet', createTweet);
router.get('/tweets/:id', getTweet)

router.post('/likes/toggle', toggleLike)

router.post('/comments', createComment);

router.post('/signup', validateUserAuth, signup);

router.post('/login', login)

export default router;