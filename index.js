import express from'express'
import connectDb from './config/DB.js'
import uesrRouters from './routes/user_routes.js'



connectDb()
const app = express()
app.use(express.json())

app.use("/api", uesrRouters)

app.listen(9000,()=>{
    console.log("server is running on port 9000")
})