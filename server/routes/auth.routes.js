import express from "express";
import {
  getUsers,
  login,
  logout,
  signup,
  deleteUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.delete("/:id", deleteUser);

export default router;
