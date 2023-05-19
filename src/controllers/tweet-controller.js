import TweetService from "../service/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        console.log(req)
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'A Brand new Tweet Created Successfully',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(501).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        })
    }
}

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(201).json({
            success: true,
            message: 'A Tweet fetched Successfully',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(501).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        })
    }
}