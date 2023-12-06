import mongoose from "mongoose";
import 'dotenv/config'
export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        throw new Error(error.message)
    }
}
