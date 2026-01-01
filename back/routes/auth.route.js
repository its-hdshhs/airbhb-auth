import express from "express"
import { Login, Logout, Signup } from "../controllers/auth.controller.js"

const AuthRouter = express.Router()


AuthRouter.post("/signup",Signup);
AuthRouter.post("/login",Login);
AuthRouter.get("/logout",Logout);



export default AuthRouter