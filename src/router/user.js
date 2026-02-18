import express from "express";
import { createNewUser, login } from "../controller/user.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/users", createNewUser);

router.post("/login", login);

router.get("/jwt/validate", auth, (req, res) => {
  res.status(200).json({ message: "JWT is valid" });
});

export default router;
