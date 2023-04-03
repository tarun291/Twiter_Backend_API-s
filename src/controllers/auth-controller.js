import UserService from "../service/user-service.js";

const userService=new UserService();

export const signup=async (req,res)=>{
    try {
        const response=await userService.signup({
            email:req.body.name,
            password:req.body.email,
            name:req.body.password
        }) 
        return res.status(201).json({
            success:true,
            message:'Successfully created a new user',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            message:'something went wrong',
            data:{},
            success:false,
            err:error
        })
    }
}