const { TweetRepository } = require('../repository/tweet-repository');


class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }
    async create(data) {
        const content = dada.content;
        const tags=content.match(/#[a-zA-Z0-9_]+/g); // this regex extract the hashtag from the content
        tags=tags.map((tag)=>{
            return tag.substring(1);
        })
        console.log(tags);
        const tweet=await this.tweetRepository.create(data);
        /*
        * 1. bulkcreate in mongoose
        * 2. filter title of the hashtag based on multiple tag
        * 3. How to add tweet id inside all hashtag
        */
        return tweet;
    }
}
module.exports = TweetService;

/* 
    This is my #first #tweet. I am really #exited for this.
*/