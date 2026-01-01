import mongoose from "mongoose";

 const dbConnection = async()=>{
   try {
     await mongoose.connect(process.env.MONGO_URI)
     console.log("database is connected")
    
   } catch (error) {
       console.log("db error",error.message)
    
   }
}


export default dbConnection

