import JWT, { ExtractJwt } from 'passport-jwt'
import User from '../model/user.js'
const jstStrategy=JWT.Strategy;
const extractJwt=JWT.ExtractJwt;

const opts={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:'twitter'
}

// logic for validating the jwt (Json Web Token)

export const passportAuth=(passport)=>{
    passport.use(new jstStrategy(opts,async (jwt_payload,done)=>{
        const user=await User.findById(jwt_payload.id)
        if(!user){
            done(null,false);
        }else{
            done(null,user)
        }
    }));
}