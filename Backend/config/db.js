import mongoose from "mongoose";

const connectDb= async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DATABASE CONNECT SUCCESSFULLY")

    }catch(error){
     console.error("DATABASE CONNECTION ERROR:", error.message || error)
    }
   
}
export default connectDb