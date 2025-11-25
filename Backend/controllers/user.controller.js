import User from "../models/user.model.js"; 

export const getCurrentUser = async (req, res) => {
    try {         
        // Fetch user details from the database using userId    
        let id = req.userId;
        console.log(id);
        const user = await User.findById(id).select('-password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }   
        return res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching user details" });
    }   
}
