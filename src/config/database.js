const mongoose=require('mongoose')

const connet=async()=>{
    await mongoose.connect('mongodb://localhost/twitter_dev');
}

module.exports=connet;