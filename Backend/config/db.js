import mongoose from "mongoose";

const connectDb= async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("DATABASE CONNECT SUCCESSFULLY")

    }catch(error){
     console.log("DATABASE CONNECTION ERROR")
    }
   
}
export default connectDb