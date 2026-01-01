import express from "express"
import dotenv from "dotenv"
import dbConection from "./config/dbcon.js"
import AuthRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/user.route.js"
dotenv.config()

const port = process.env.PORT || 6000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:5173","https://app.netlify.com/projects/mernappballiac"],
    credentials:true
}))


app.use("/api/auth",AuthRouter)
app.use("/api/user",userRouter)

app.listen(port,()=>{
    dbConection()
    console.log(`server running port ${port} `)
})