import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const user = await User.findOne({ username }); //revisa si el usuario existe

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const newUser = new User({
      username,
      password,
    });

    if (newUser) {
      await newUser.save(); // se guarda en la base de dato

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
      });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } catch (error) {
    console.log("Error in signup controller", error); // cambiar la notificacion en espanol
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    res.status(200).json({
      _id: user._id,
      username: user.username,
    });
  } catch (error) {
    console.log("Error in login controller", error); // cambiar la notificacion en espanol
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in login controller", error); // cambiar la notificacion en espanol
    res.status(500).json({ error: "Internal Server Error" });
  }
};
