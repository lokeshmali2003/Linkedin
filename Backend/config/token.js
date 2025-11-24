import jwt from 'jsonwebtoken';

const genToken = async (userId) => {        
    // Your token generation logic here
    try {
        const token = await jwt.sign({ id: userId }, process.env.JWT_SECRET, {
            expiresIn: '7d', 
        });
        return token;
    } catch (error) {
        throw new Error('Token generation failed');     
    }
};

export default genToken;