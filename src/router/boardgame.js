import express from "express";
import { getAllBoardgames, getBoardgameById } from "../controller/boardgame.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/boardgames", auth, getAllBoardgames);

router.get("/boardgames/:id", auth, getBoardgameById);

export default router;
