const Hashtag=require('../model/hashtag');

class HashtagRepository{
    async create(data){
        try {
            const hashtag=await Hashtag.create(data);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }
    async bulkCreate(data){
        try {
            console.log(data);
            const tags=await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id){
        try {
            const hashtag=await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }
    async destroy(id){
        try {
            const hashtag=await Hashtag.findByIdAndRemove(id);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }
    async findByName(titleList){
        try {
            const tags=await Hashtag.find({
                title:titleList
            })
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports=HashtagRepository;