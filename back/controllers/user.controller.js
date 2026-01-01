import userModel from "../models/user.model.js"


export const getCurrentuser = async(req,res)=>{
    try {

        if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized: userId missing" })
    }

        const user = await userModel.findById(req.userId).select("-password")

        if(!user){
          return  res.status(400).json({message:"user does not found"})
        }


       return res.status(200).json(user)

        
    } catch (error) {
       return  res.status(500).json({message:`get current user error ${error}`})
    }
}
