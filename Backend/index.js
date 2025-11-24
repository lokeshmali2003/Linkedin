import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv"
dotenv.config()
let port=process.env.PORT || 5000
let app = express()
app.use("/api/auth",authRouter)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    connectDb();
    console.log("server Started")
})