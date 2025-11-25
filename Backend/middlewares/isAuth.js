import jwt from 'jsonwebtoken';

const isAuth = async(req, res, next)=>{
    try{
        const {token} = req.cookies
        if(!token){ 
            return res.status(401).json({message:"Unauthorized , No token found"});
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if(!verifyToken){
            return  res.status(401).json({message:"Unauthorized , Invalid token"});
        }   

        req.userId = verifyToken.id;
        next();
    }catch(err){    
        return res.status(500).json({message:"is Auth middleware error", error: err.message});
    }
}

export default isAuth;