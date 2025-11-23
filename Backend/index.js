import express from "express";
import dotenv from "dotenv"
dotenv.config()
let port=process.env.PORT || 5000
let app = express()

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log("server Started")
})