import mongoose from "mongoose";
export const connet = async () => {
    await mongoose.connect('mongodb://localhost/twitter_dev');
}
