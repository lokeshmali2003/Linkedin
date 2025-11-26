import User from '../models/user.model.js'; 
import bcrypt from 'bcryptjs';
import genToken from '../config/token.js';

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
        if(password.length < 8){
            return res.status(400).json({ message: "Password must be at least 8 characters long" });
        }

        let hassedpassword = await bcrypt.hash(password, 10);

        const user = new User({
            firstName,
            lastName,
            userName,
            email,
            password: hassedpassword,
        });
        await user.save();
        let token = await genToken(user._id);
        // set cookie (best-effort for dev). For cross-origin cookies in modern browsers,
        // SameSite=None and Secure are required — not always available on localhost.
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        // Return token in body too so frontend can use it if cookies are blocked in dev
        return res.status(201).json({ user, token })


    } catch (error) {   
        console.log(error);
        res.status(500).json({ message: "Signup error" });
    }
}

export const login = async (req, res) => {
    try {
        // login logic
        let {
            email,
            password
        } = req.body || {};

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Email does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password" });
        }

        let token = await genToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json({ user, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Login error" });
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Logout error" });
    }
} 

