const { TweetRepository, HastagRepository } = require('../repository/index')
class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hastagRepository = new HastagRepository();
    }
    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1))// this regex extract the hashtag from the content
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hastagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return { title: tag, tweets: [tweet.id] }
        })
        const response = await this.hastagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return response;
    }
}
module.exports = TweetService;

/* 
    This is my #first #tweet. I am really #exited for this.
*/