import jwt from "jsonwebtoken"

const getToken = async(id)=>{

    try {
        const token = await jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"7d"});
        return token
    } catch (error) {
        console.log("token error",error.message)
        
    }

}

export default getToken;