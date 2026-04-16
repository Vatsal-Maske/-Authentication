import  mongoose from "mongoose";
import config from "./config.js";

async function connectDB(){
    await mongoose.connect(config.MONGOO_URI)


    console.log("Connected to db")
}
export default connectDB;
   