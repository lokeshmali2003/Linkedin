import User from '../models/user.model.js'; 
import bcrypt from 'bcryptjs';
import { genToken } from '../config/token.js'; 

export const signUp= async (req, res) => {
    try {
        // Your sign-up logic here
        let {
            firstName,
            lastName,
            userName,
            email,
            password
        } = req.body;
        let ExistEmail = await User.findOne({ email });
        if (ExistEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }
        let ExistUsername = await User.findOne({ userName });
        if (ExistUsername) {
            return res.status(400).json({ message: "Username already exists" });
        }

        let hassedpassword = await bcrypt.hash(password, 10);

        const user = new User.Create({  
            firstName,  
            lastName,  
            userName,  
            email,  
            password: hassedpassword 
        });
        let token = await genToken(user._id);
        res.cookie("token", token, {    
            httpOnly: true,
            secure: process.env.NODE_ENVIRONMENT === 'production', 
            sameSite: 'strict', 
            maxAge: 7 * 24 * 60 * 60 * 1000 
        });
        return res.status(201).json(user)


    } catch (error) {   
        res.status(500).json({ message: error });
    }
}