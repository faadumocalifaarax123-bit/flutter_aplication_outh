import express from'express'
import connectDb from './config/DB.js'
import uesrRouters from './routes/user_routes.js'
import dotenv from "dotenv"
import cors from "cors"

app.use(cors());

dotenv.config()
connectDb()
const app = express()
app.use(express.json())

app.use("/api", uesrRouters)

app.listen(process.env.PORT,()=>{
    console.log("server is running on port 500")
})