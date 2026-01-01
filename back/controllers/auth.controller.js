import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import getToken from "../config/token.js"
import cookie from "cookie-parser"
export const Signup = async (req, res) => {

    try {

        const {name,email,password} = req.body;

        const existUser = await userModel.findOne({email});
        if(existUser){
            return res.status(400).json({message:"user is already exist"});

        }

        const hashPassword = await bcrypt.hash(password,10)

        const user  =await userModel.create({
            name,
            email,
            password:hashPassword

        })

        const token = getToken(user._id)
        res.cookie("token",token,{
             httpOnly: true,
            secure: process.env.NODE_ENV= "production",
            sameSite: "strict",
             maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json(user)
        
    } catch (error) {
        res.status(500).json({message:"signup error",err:error.message})
        
    }
}



export const Login = async (req, res) => {

    try {

        const {email,password} = req.body;

        const user = await userModel.findOne({email});

         if(!user){
            return res.status(400).json({message:"user not exists"})
        }

        const matchPassword = await bcrypt.compare(password,user.password)
        
        if(!matchPassword){
            return res.status(400).json({message:"email or password was incorrect"})
        }

        const token = getToken(user._id)
        res.cookie("token",token,{
             httpOnly: true,
            secure: process.env.NODE_ENV= "production",
            sameSite: "strict",
             maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({message:"login error",err:error.message})
        
    }
}

export const Logout = async(req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"Logout Successfully"})
    } catch (error) {
         res.status(500).json({message:`logout error ${error}`})
    }
}


 