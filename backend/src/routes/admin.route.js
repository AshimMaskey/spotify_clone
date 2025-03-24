import express from "express";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protectRoute, requireAdmin, createSong);

export default router;
