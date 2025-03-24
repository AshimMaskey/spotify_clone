import express from "express";
import { authCallback } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/callback", authCallback);

export default router;
