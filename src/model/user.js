import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const userShema = new mongoose.Schema({
    name:{
        type:String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
}, { timestamps: true })

userShema.pre('save', function (next) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
})


const User = mongoose.model('User', userShema)


export default User;