import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import songRouter from "./src/routes/songRoute.js";
import connectDb from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";

dotenv.config();

//app config
const app = express()
const port  = process.env.PORT || 4000;


connectDb().then(()=>{
    console.log("connected to the db")
}).catch((err)=>{
    console.log(err)
})
connectCloudinary().then(()=>{
    console.log("connected to cloudinary")
}).catch((err)=>{
    console.log(err)
})

//middlewares
app.use(express.json())
app.use(cors())


//initializing routes
app.use('/api/song',songRouter)

app.get('/',(req,res)=>{
    res.send('Api Is Working')
})

app.listen(port,(req,res)=>{
    console.log(`app is listening at the port:${port}`)
})