
import { LikeRepository,TweetRepository } from "../repository/index.js";

class LikeService{
    constructor(){
        this.likeReposiory=new LikeRepository();
        this.tweetRepository=new TweetRepository();
    }
    async toggleLike(modelId,modelType,userId){ // api/v1/likes/toggle?id=modelid&type=Tweet
        if(modelType==='Tweet'){
            var likeable=await this.tweetRepository.get(modelId);
        }else if(modelType==='Comment'){
            
        }else{
            throw new Error('unknown model type');
        }
        const exist=await this.likeReposiory.findByUserAndLikeable({
            user:userId,
            onModel:modelType,
            likeable:modelId
        })
        console.log(exist);
        if(exist){
            likeable.likes.pull(exist.id);
            await likeable.save();
            await exist.remove();
            var isRemoved=true;
        }else{
            const newLike=await this.likeReposiory.create({
                user:userId,
                onModel:modelType,
                likeable:modelId
            });
            likeable.likes.push(newLike)
            await likeable.save();
            var isRemoved=false;
        }
        return isRemoved;
    }
}

export default LikeService;