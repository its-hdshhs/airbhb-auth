import mongoose from "mongoose"
const listingSchema = new mongoose.Schema({
    tittle:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    host:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    image1:{
        type:string,
        required:true
    },
    image2:{
        type:string,
        required:true
    },
    rent:{
        type:Number,
        required:true
    },
    city:{
        type:string,
        required:true
    },
    landMark:{
        type:string,
        required:true
    },
    category:{
        type:string,
        required:true
    },
    isBooked:{
        type:Boolean,
        default:false
    }

},{timestamps:true})


const Listing = mongoose.model("Listing",listingSchema)

export default Listing