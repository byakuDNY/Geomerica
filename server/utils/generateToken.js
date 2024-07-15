import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true, // cookie cannot be accessed by client side javascript / prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", // cookie will only be sent in a first-party context / CSRF attacks cross-site request forgery
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
