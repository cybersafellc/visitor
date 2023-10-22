import express from "express";
import { totalVisitor, visitor } from "../controllers/user.controller.js";
import { apiValidate } from "../middlewares/ApiValidate.js";

const router = express.Router();
router.use(apiValidate);
router.post("/check", visitor);
router.get("/view", totalVisitor);
export default router;
