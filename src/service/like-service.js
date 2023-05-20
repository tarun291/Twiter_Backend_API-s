
import { LikeRepository, TweetRepository,CommentRepository } from "../repository/index.js";

class LikeService {
    constructor() {
        this.likeReposiory = new LikeRepository();
        this.tweetRepository = new TweetRepository();
        this.commentRepository= new CommentRepository();
    }
    async toggleLike(modelId, modelType, userId) { // api/v1/likes/toggle?id=modelid&type=Tweet
        let likeable;
        if (modelType === 'Tweet') {
            likeable = await this.tweetRepository.find(modelId);
        } else if (modelType === 'Comment') {
            likeable = await this.commentRepository.find(modelId);
        } else {
            throw new Error('unknown model type');
        }
        const exist = await this.likeReposiory.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        })
       
        if (exist) {
            likeable.likes.pull(exist.id);
            await exist.remove();
            var isRemoved = true;
        } else {
            const newLike = await this.likeReposiory.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike)
            await likeable.save();
            var isRemoved = false;
        }
        return isRemoved;
    }
}

export default LikeService;