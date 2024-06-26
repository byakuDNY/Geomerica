import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        
        if(password !== confirmPassword) {
            return res.status(400).json({error:"Password don't match"})
        }

        const user = await User.findOne({username}); //revisa si el usuario existe

        if(user) {
            return res.status(400).json({error:"Username already exists"})
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });

        if (newUser) {
            await newUser.save(); // se guarda en la base de dato
        
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(500).json({error: "Internal Server Error"});
        }

    } catch (error) {
        console.log("Error in signup controller", error) // cambiar la notificacion en espanol
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("Error in login controller", error) // cambiar la notificacion en espanol
        res.status(500).json({error:"Internal Server Error"})
    }
}

export const logout = (req, res) => {
    try {
        res.status(200).json({message:"Logged out successfully"});

    } catch (error) {
        console.log("Error in login controller", error) // cambiar la notificacion en espanol
        res.status(500).json({error:"Internal Server Error"})
    }
}
