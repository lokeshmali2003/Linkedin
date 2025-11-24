import express from "express";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
dotenv.config()
let port=process.env.PORT || 5000
let app = express()
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",  
    credentials:true
}));
app.use(cookieParser());
app.use("/api/auth",authRouter)

app.get("/",(req,res)=>{
    res.send("hello")
})






const start = async () => {
    try {
        await connectDb();
        app.listen(port, () => {
            console.log(`server Started on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err.message || err);
        process.exit(1);
    }
};

start();