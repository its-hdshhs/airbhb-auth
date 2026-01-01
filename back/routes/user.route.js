import express from "express"
import isAuth from "../middleware/isauth.js"
import { getCurrentuser } from "../controllers/user.controller.js"


const userRouter = express.Router()


userRouter.get("/currentuser",isAuth,getCurrentuser)



export default userRouter