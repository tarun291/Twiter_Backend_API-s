import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email: {
        type: String,
        unique:true
    },
    password: {
        type: String,
    }
}, { timestamps: true })

userSchema.pre('save', function (next) {
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedPassword;
    next();
})

userSchema.methods.comparePassword=function compare(password){
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.genJWT=function generate(){
    return JsonWebTokenError.sign({id:this._id,email:this.email},'twitter-api',{
        expiresIn:'1h'
    });
}
//55 min
const User = mongoose.model('User', userSchema)


export default User;