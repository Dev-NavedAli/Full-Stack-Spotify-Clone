import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const dbUrl  = process.env.MONGODB_URI

const connectDb = async()=>{
    await mongoose.connect(`${dbUrl}/spotify`)
}


export default connectDb